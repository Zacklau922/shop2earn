import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import RewardCard from "./RewardCard";

const Usercard = () => {
  return (
    <div>
      <Card
        isPressable
        className="mx-auto mb-3 flex w-full max-w-2xl bg-white px-3 shadow-card"
      >
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src="/7.jpg" />
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
        <CardBody className="px-3 pt-4 text-3xl text-default-400">
          <p>300 points</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="text-xl font-semibold text-default-500">Wallet:</p>
            <p className="text-xl text-default-500">Rm10.50</p>
          </div>
        </CardFooter>
      </Card>
      <RewardCard />
    </div>
  );
};

export default Usercard;
