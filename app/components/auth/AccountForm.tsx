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

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status }: any = await supabase
        .from("profiles")
        .select(`full_name, username, website, phone`)
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
        setBusinessName(data.business_name);
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
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
    phone: string | null;
    businessName: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        business_name: businessName,
        phone,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4">
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
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="rounded-xl border-1 shadow-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="website"
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
        {session?.user.role === "admin" && (
          <>
            <Input
              value={businessName || ""}
              placeholder="Business Name"
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <Input
              value={phone || ""}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input value={username || ""} placeholder={username || ""} />
          </>
        )}
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
              businessName,
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
