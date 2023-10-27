/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
// Page.tsx

"use client";
import React, { useState } from "react";
import CategoryCard from "@/app/components/menu/CategoryCard";
import OrderTab from "@/app/components/menu/OrderTab";
import Hero from "@/app/components/image/Hero";
import MenuItems from "@/app/components/menu/MenuItems";
import { useDisclosure } from "@nextui-org/react";
import CheckoutBar from "@/app/components/navbar/CheckoutBar";
import { CartProvider } from "@/app/components/menu/CartContext";

// Assuming this is the structure of your items
interface Item {
  id: number;
  name: string;
  description: string; // Include this property
  quantity: number;
  // Add other properties as needed
}

const categories = [
  {
    id: 1,
    name: "Category A",
    items: [
      {
        id: 1,
        name: "Item A1",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 2,
        name: "Item A2",
        description: "lorem A2 saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 3,
        name: "Item A3",
        description: "lorem A3 saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 4,
        name: "Item A4",
        description: "lorem A4 saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 5,
        name: "Item A5",
        description: "lorem A5 saodkas odosd okoskdo kodksodin udnsu sds",
      },
    ],
  },
  {
    id: 2,
    name: "Category B",
    items: [
      {
        id: 6,
        name: "Item B1",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 7,
        name: "Item B2",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 8,
        name: "Item B3",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 9,
        name: "Item B4",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
      {
        id: 10,
        name: "Item B5",
        description: "lorem saodkas odosd okoskdo kodksodin udnsu sds",
      },
    ],
  },
  // Add more categories as needed
];

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemOpen = (item: Item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <CartProvider>
      <div className="relative">
        <Hero />
        <div className="mb-3 flex -translate-y-[10%] flex-col gap-2">
          <OrderTab />
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onOpen={(item) => handleItemOpen(item)}
            />
          ))}
        </div>
        {/* Pass selectedItem to MenuItems */}
        {selectedItem && (
          <MenuItems isOpen={isOpen} onClose={onClose} item={selectedItem} />
        )}

        <CheckoutBar />
      </div>
    </CartProvider>
  );
};

export default Page;
