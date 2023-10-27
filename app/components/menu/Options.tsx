"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Options = () => {
  return (
    <>
      <Tabs defaultValue="order-now" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="order-now" className="p-6">
            Order Now
          </TabsTrigger>
          <TabsTrigger value="pre-order" className="p-6">
            Pre Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="order-now"></TabsContent>
        <TabsContent value="pre-order">Coming soon...</TabsContent>
      </Tabs>
    </>
  );
};

export default Options;
