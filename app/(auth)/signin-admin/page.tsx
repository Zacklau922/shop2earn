import React from "react";
import AuthFormAdmin from "@/app/components/auth/AuthFormAdmin";

const signin = () => {
  return (
    <div>
      <div className="rounded-xl p-8">
        <h1 className="pb-2 text-center text-lg">Admin Login / Signup</h1>
        <AuthFormAdmin />
      </div>
    </div>
  );
};

export default signin;
