import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MiniUserCard = () => {
  return (
    <div>
      <Card
        isPressable
        className="mx-auto w-11/12 max-w-3xl bg-white shadow-card"
      >
        <CardBody className="flex min-h-[50px] flex-row items-center justify-between">
          <div className="flex gap-3 text-xs">
            <Avatar />
            <div className="flex flex-col gap-1">
              <h1>Lau Yoon Tah</h1>
              <Badge className="mx-auto px-2 text-xs" variant="destructive">
                member
              </Badge>
            </div>
          </div>

          <div className="flex h-5 items-center space-x-4 text-xs">
            <div className="flex flex-col items-center justify-center">
              <p>Rm10.00</p>
              <p>Wallet</p>
            </div>

            <Separator orientation="vertical" />
            <div className="flex flex-col items-center justify-center">
              <p>305pts</p>
              <p>Points</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center justify-center">
              <p>5</p>
              <p>Vouchers</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MiniUserCard;
