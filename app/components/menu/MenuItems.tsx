import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Image,
} from "@nextui-org/react";
import { useCart } from "./CartContext";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface MenuItemsProps {
  isOpen: boolean;
  onClose: () => void;
  item: Item;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const { addToCart } = useCart();

  const addToCartHandler = () => {
    addToCart({ ...item, quantity });
    onClose();
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => (prev + amount < 1 ? 1 : prev + amount));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        size="2xl"
        className=""
        placeholder="center"
        hideCloseButton
      >
        <ModalContent>
          <ModalHeader className="relative flex flex-col gap-1">
            <Image
              isBlurred
              shadow="none"
              loading="eager"
              radius="none"
              src="/10.jpg"
              alt={item.name}
              className="w-full max-w-2xl object-cover"
            />
          </ModalHeader>
          <ModalBody>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="text-gray-600">{item.description}</p>
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  color="primary"
                  onPress={() => handleQuantityChange(-1)}
                >
                  -
                </Button>
                <span className="mx-3">{quantity}</span>
                <Button color="primary" onPress={() => handleQuantityChange(1)}>
                  +
                </Button>
              </div>
              <Button
                color="primary"
                size="lg"
                className="px-8"
                onPress={addToCartHandler}
              >
                Add to Cart
              </Button>
            </div>
            <Button
              color="primary"
              variant="bordered"
              onPress={onClose}
              size="lg"
            >
              Back to menu
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuItems;
