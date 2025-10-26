import React, { useState, useEffect } from "react";
import SlideRenderer from "./SlideRenderer";

interface Slide {
  id: string;
  type: "image" | "text" | "video" | "announcement" | "advertisement";
  content?: string;
  imageUrl?: string;
  videoUrl?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface SlideShowProps {
  slides: Slide[];
  interval?: number; // in milliseconds
  className?: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ slides, interval = 10000, className }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides, interval]);

  if (slides.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}>
        <p className="text-2xl text-muted-foreground">No slides to display.</p>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <SlideRenderer slide={currentSlide} />
      </div>
    </div>
  );
};

export default SlideShow;