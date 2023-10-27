"use client";
import React from "react";
import { ArrowRightIcon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "@nextui-org/badge";
import { useCart } from "../menu/CartContext";

const CheckoutBar = () => {
  const { cartItems } = useCart();

  return (
    <div className="fixed inset-x-0 bottom-14 z-10 mx-auto max-w-2xl">
      <div className="m-2 flex cursor-pointer justify-between rounded-2xl bg-yellow-400 px-6 py-4 shadow-xl">
        <h1 className="flex text-sm">
          Checkout now <ArrowRightIcon />
        </h1>

        <div className="flex gap-3 text-sm">
          <Badge content={cartItems.length} color="danger">
            <ShoppingCartIcon />
          </Badge>

          {/* You can display cart item count or details here */}
          <span>{cartItems.length} items</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBar;
