"use client";

import React, { useState } from "react";
import { cn } from "../libs/utils";
import { IconCircleX, IconCircleXFilled } from "@tabler/icons-react";
import { useEffect } from "react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    modalOpen,
    setModalOpen,
    modalContent,
    setModalContent,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    modalOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalContent: any,
    setModalContent: React.Dispatch<React.SetStateAction<any | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-60 lg:h-96 w-full transition-all duration-300 ease-out",
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
          "absolute inset-0 flex flex-col py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="items-start flex justify-center xl:items-center h-full">
          <button
            onClick={() => { setModalOpen(true), setModalContent(card) }}
            className="text-lg px-4 py-1 text-white hover:border-2 hover:rounded-2xl transition-all duration-300 drop-shadow-2xl"
          >
            Explore
          </button>
        </div>

        {/* Title bottom-left */}
        <div className="absolute bottom-8 left-4">
          <div className="pr-1 text-xl md:text-xl font-medium bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200 drop-shadow-2xl">
            {card.title}
          </div>
        </div>

      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  modalContent: any;
};


export function Modal({ modalOpen, modalContent, setModalOpen }: ModalProps) {
  if (modalOpen != true) {
    return null
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative z-10 bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-2xl w-[80%] min-h-[80%] ring-1 ring-gray-300">
        {modalContent.title}
        <div className="absolute top-3 right-4 group">
          <IconCircleX className="group-hover:hidden w-10 h-10" onClick={() => setModalOpen(false)} />
          <IconCircleXFilled className="hidden group-hover:block w-10 h-10" onClick={() => setModalOpen(false)} />
        </div>
      </div>

    </div>
  )
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Card | null>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div>
      <div>
        <Modal modalOpen={modalOpen} modalContent={modalContent} setModalOpen={setModalOpen} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-[80%]">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalContent={modalContent}
            setModalContent={setModalContent}
          />
        ))}
      </div>
    </div>

  );
}