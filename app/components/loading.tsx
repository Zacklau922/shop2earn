import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <Spinner
      className="flex h-screen flex-col items-center"
      label="Loading..."
      color="warning"
    />
  );
}
