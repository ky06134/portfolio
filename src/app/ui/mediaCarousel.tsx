'use client';

import { useState } from 'react';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

type MediaItem = {
  id: number;
  type: 'image' | 'video' | 'youtube';
  src: string;
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
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="max-w-6xl mx-auto pt-10 px-4">
      {/* Slide + Thumbnails side-by-side */}
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* MAIN MEDIA DISPLAY */}
        <div className="flex-1 aspect-video shadow-md bg-black relative w-full">
          {currentItem.type === 'youtube' ? (
            <iframe
              src={currentItem.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : currentItem.type === 'video' ? (
            <video controls className="w-full h-full">
              <source src={currentItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={currentItem.src}
              alt={`Media ${currentIndex}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* THUMBNAIL STRIP (outside on the right) */}
        <div className="flex flex-row md:flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
          {media.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-24 h-16 cursor-pointer rounded overflow-hidden border-2 ${index === currentIndex ? 'border-blue-500' : 'border-gray-300'
                }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  {/* Play button (CSS triangle) */}
                  <div
                    className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-white"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded mr-5"
        >
          <IconArrowLeft />
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}