/* eslint-disable camelcase */
"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";

export default function AccountFormAdmin({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  const user = session?.user;
  const router = useRouter();
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status }: any = await supabase
        .from("profiles")
        .select(`full_name, username, website, phone, business_name`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);

        setPhone(data.phone);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
    fullname,
    phone,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
    phone: string | null;
  }) {
    try {
      setLoading(true);

      // Input validation
      if (!username || !phone) {
        alert("Fields cannot be blank!");
        return;
      }

      // Check if the new username is different from the current one
      const { data: currentUser }: any = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user?.id)
        .single();

      if (currentUser && currentUser.username !== username) {
        // If it's different, check if the new username exists in the profiles table
        const { data: existingUser }: any = await supabase
          .from("profiles")
          .select("username")
          .eq("username", username)
          .single();

        if (existingUser && existingUser.username === username) {
          setUsernameError("Username already exists!");
          return;
        }
      }

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        phone,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
      router.push(`/app/${username}/account`);
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border-1 bg-white p-12 shadow-lg">
      <div>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="mx-auto h-24 w-24 items-center justify-center text-tiny"
        />
      </div>

      <div className="my-8">
        <div className="my-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            type="text"
            value={session?.user.email}
            disabled
            className="rounded-xl border-1 shadow-md"
            color="default"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <Input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => {
              setUsernameError(null); // Reset error when user changes input
              setUsername(e.target.value);
            }}
            className="rounded-xl border-1 shadow-md"
          />
          {usernameError && (
            <p className="mt-2 text-xs text-red-500">{usernameError}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <Input
            id="phone"
            type="text"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border-1 shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-around">
        <Button
          color="primary"
          onClick={() =>
            updateProfile({
              fullname,
              username,
              website,
              avatar_url,
              phone,
            })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </Button>

        <form action="/auth/signout" method="post">
          <Button color="danger" type="submit">
            Sign out
          </Button>
        </form>
      </div>
    </div>
  );
}
