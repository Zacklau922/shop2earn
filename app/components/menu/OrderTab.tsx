"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const OrderTab = () => {
  return (
    <div className="mx-auto flex flex-wrap gap-4">
      <Tabs
        disabledKeys={["pre-order"]}
        key="xl"
        size="lg"
        aria-label="Tabs sizes"
      >
        <Tab key="order-now" title="Order Now" />
        <Tab key="pre-order" title="Pre Order" />
      </Tabs>
    </div>
  );
};

export default OrderTab;
