"use client";

import React, { useState } from "react";
import { cn } from "../libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { redirect } from 'next/navigation'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const router = useRouter(); // ✅ useRouter inside the functional component

    const handleClick = () => {
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Metrics Project") {
        router.push("projects/metricsProject");
      } 
      if (card.title === "UGA Hackathon 8: TappedIn") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 
      if (card.title === "Sssync.com") {
        router.push("projects/sssync");
      } 

    };

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-60 lg:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover w-full h-full absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="items-start flex justify-center xl:items-center h-full mt-4">
            <button
              onClick={handleClick} // ✅ handle redirect here
              className="bg-black font-medium text-lg px-4 py-1 text-white text-shadow-lg hover:rounded-2xl transition-all duration-300 drop-shadow-2xl"
            >
              Explore
            </button>
          </div>

          <div className="p-4 flex items-center h-[30%] bg-black">
            <div className="text-xl md:text-xl font-bold bg-clip-text text-white text-shadow-lg bg-gradient-to-b from-neutral-50 to-neutral-200 drop-shadow-2xl">
              {card.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: any;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search cards by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-15 p-2 w-[80%] md:w-[60%] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-[80%]">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Card
              key={card.title}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}