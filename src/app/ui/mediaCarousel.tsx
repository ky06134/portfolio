'use client';

import { useState } from 'react';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
type MediaItem = {
  id: number;
  type: 'image' | 'video' | 'youtube';
  src: string; // For YouTube, this will be the full embed URL
};

interface MediaCarouselProps {
  media: MediaItem[];
}

export default function MediaCarousel({ media }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentItem = media[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto text-center pt-10 px-10">
      <div className="overflow-hidden shadow-md aspect-video">
        {currentItem.type === 'youtube' ? (
          <iframe
            key={currentItem.id}
            src={currentItem.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : currentItem.type === 'video' ? (
          <video
            key={currentItem.id}
            controls
            className="w-full h-full"
            src={currentItem.src}
          />
        ) : (
          <img
            key={currentItem.id}
            src={currentItem.src}
            className="w-full h-auto"
          />
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded mr-5"
        >
          <IconArrowLeft/>
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          <IconArrowRight/>
        </button>
      </div>
    </div>
  );
}