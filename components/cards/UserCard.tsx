import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";

const Usercard = () => {
  return (
    <div>
      <Card className="min-h-[180px] min-w-[380px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/avatars/avatar-1.png"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zack Lau
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                membership
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-5xl text-default-400">
          <p>300 points</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="text-xl font-semibold text-default-400">Wallet:</p>
            <p className=" text-xl text-default-400">Rm10.50</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Usercard;
