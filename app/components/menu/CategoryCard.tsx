// CategoryCard.tsx

import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Separator } from "@/app/components/ui/separator";

interface Item {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  items: Item[];
}

interface CategoryCardProps {
  category: Category;
  onOpen: (item: Item) => void;
}

// In CategoryCard.tsx

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onOpen }) => {
  return (
    <div>
      <Card className="mx-auto w-11/12 max-w-3xl bg-white shadow-card">
        <CardBody className="flex justify-start pb-1">
          <h1>{category.name}</h1>
        </CardBody>

        {category.items.map(
          (
            item: Item // Explicitly defined the type here
          ) => (
            <CardBody
              key={item.id}
              onClick={() => onOpen(item)} // Pass the clicked item
              className="flex flex-row items-center justify-between"
            >
              <div className="flex gap-2 text-xs">
                <Avatar />
                <div className="my-auto flex flex-col">
                  <h1>{item.name}</h1>
                </div>
              </div>

              <div className="flex h-5 items-center space-x-4 text-xs">
                <div className="flex flex-col items-center justify-center">
                  <p>+</p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex flex-col items-center justify-center">
                  <p>-</p>
                </div>
              </div>
            </CardBody>
          )
        )}
      </Card>
    </div>
  );
};

export default CategoryCard;
