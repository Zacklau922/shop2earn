"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function MenuCard() {
  const list = [
    {
      title: "Rm20 Off",
      img: "/1.jpg",
      price: "500pts",
    },
    {
      title: "Rm50 Off",
      img: "/1.jpg",
      price: "2500pts",
    },
    {
      title: "HairCare",
      img: "/3.jpg",
      price: "5000pts",
    },
    {
      title: "HairCut",
      img: "/4.jpg",
      price: "3500pts",
    },
    {
      title: "Free Spray",
      img: "/5.jpg",
      price: "2000pts",
    },
    {
      title: "Free Wax",
      img: "/6.jpg",
      price: "2500pts",
    },
    {
      title: "Mystery Gift",
      img: "/7.jpg",
      price: "8000pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
    {
      title: "Birthday 50% Off",
      img: "/8.jpg",
      price: "4500pts",
    },
  ];

  return (
    <div className="my-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="h-[140px] w-full object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
