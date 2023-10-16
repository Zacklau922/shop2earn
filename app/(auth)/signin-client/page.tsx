import AuthForm from "@/app/components/auth/AuthForm";
import React from "react";

const signin = () => {
  return (
    <div className="m-auto flex max-w-sm flex-col items-center justify-center">
      <div className="rounded-xl border-1 p-8 shadow-xl">
        <AuthForm />
      </div>
    </div>
  );
};

export default signin;
