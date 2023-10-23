import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const ActionCard = () => {
  return (
    <div>
      <Card
        isPressable
        className="mx-auto w-11/12 max-w-3xl bg-white px-3 shadow-card"
      >
        <CardBody className="flex min-h-[150px] flex-row items-center justify-around">
          <Link href={"/app/zack_saloon/menu"}>
            <h1>Order Now</h1>
          </Link>
          <div className="flex h-24 items-center space-x-4 text-sm">
            <Separator orientation="vertical" />
          </div>
          <Link href={"/app/zack_saloon/menu"}>
            <h1>Pre-Order</h1>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ActionCard;
