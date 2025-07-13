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
    setModalOpen,
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
          "absolute inset-0 flex flex-col py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="items-start flex justify-center xl:items-center h-full">
          <button
            onClick={() => { setModalOpen(true), setModalContent(card) }}
            className="font-medium text-lg px-4 py-1 text-white text-shadow-lg hover:border-2 hover:rounded-2xl transition-all duration-300 drop-shadow-2xl"
          >
            Explore
          </button>
        </div>

        {/* Title bottom-left */}
        <div className="absolute bottom-8 left-4">
          <div className="pr-1 text-xl md:text-xl font-bold bg-clip-text text-white text-shadow-lg bg-gradient-to-b from-neutral-50 to-neutral-200 drop-shadow-2xl">
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
  subtitle: string;
  description: string;
  contributors: React.ReactNode;
  video: string;
  src: any;
  tools: React.ReactNode;
};

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  modalContent: any;
};

export default function YouTubeEmbed({ src }: { src: string }) {
  if (src === "") {
    return
  }
  return (
    <div style={{ position: "relative", paddingBottom: "45.25%", height: 0 }}>
      <iframe
        src={src}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          paddingTop: 20,
        }}
      ></iframe>
    </div>
  );
}


export function Modal({ modalOpen, modalContent, setModalOpen }: ModalProps) {
  if (modalOpen != true) {
    return null
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className=" pb-25 relative z-10 bg-white rounded-lg px-15 pt-10 shadow-2xl w-[80%] h-[90%] ring-1 ring-gray-300 overflow-y-auto">
        <h1 className="text-4xl font-bold pb-3">
          {modalContent.title}
        </h1>
        <h2 className="text-lg">
          {modalContent.subtitle}
        </h2>
        <h2 className="text-lg">
          Contributors: {modalContent.contributors}
        </h2>
        <hr className="h-px mt-8 bg-gray-300 border-0" />
        <YouTubeEmbed src={modalContent.video} />
        <div className="flex flex-col items-center py-5">
          <h2 className="lg:text-xl font-bold pb-10">Tools:</h2>
          {modalContent.tools}
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0" />

        <div className="">
          <h2 className="lg:text-xl font-bold pr-2">Details:</h2>
          {modalContent.description}
        </div>
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