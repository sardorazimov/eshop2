"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Samsung",
    designation: "TV Buds Tablet Phone More ",
    image:
      "/samsung.png",
  },
  {
    id: 2,
    name: "Apple",
    designation: "TV AirPod Ipad Phone",
    image:
      "/apple.jpeg",
  },
  {
    id: 3,
    name: "Nike ",
    designation: "Sneakers Boot more BasketBoll",
    image:
      "/nike.png",
  },
  {
    id: 4,
    name: "Adidas",
    designation: "Boot Sneakers",
    image:
      "/adidas.png",
  },
  {
    id: 5,
    name: "Amazon",
    designation: "Servis Kurye more Exstions",
    image:
      "/amazon.png",
  },
  {
    id: 6,
    name: "Ikea",
    designation: "The Service",
    image:
      "/ikea.jpeg",
  },
];

export function Tool() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full  ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
