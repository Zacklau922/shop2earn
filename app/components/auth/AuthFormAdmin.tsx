"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@nextui-org/button";
import { Database } from "@/types/supabase";

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient<Database>();
  const domainUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true); // Set the loading state

    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${domainUrl}/auth/callback-admin`,
      },
    });

    setIsLoading(false); // Reset the loading state

    if (error) {
      console.error("Error sending magic link:", error.message);
      // Handle the error appropriately in your UI
    } else {
      alert("Magic link sent! Please check email");
      // Handle the success case
    }
  };

  return (
    <div className=" items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Sign in
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:ring"
                placeholder="Email address"
              />
            </div>
          </div>
          <div>
            <Button type="submit" color="primary" isLoading={isLoading}>
              Send Magic Link
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// "use client";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "@/types/supabase";

// export default function AuthFormAdmin() {
//   const supabase = createClientComponentClient<Database>();

//   return (
//     <Auth
//       supabaseClient={supabase}
//       view="magic_link"
//       appearance={{ theme: ThemeSupa }}
//       theme="light"
//       showLinks={false}
//       providers={[]}
//       redirectTo="/signin-admin/create-account"

//     />
//   );
// }
