import React from "react";
import PrayerTimesDisplay, { PrayerTime } from "@/components/PrayerTimesDisplay";
import SlideShow from "@/components/slides/SlideShow";

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

interface Layout1SplitProps {
  prayerTimes: PrayerTime[];
  slides: Slide[];
  slideInterval?: number;
}

const Layout1Split: React.FC<Layout1SplitProps> = ({ prayerTimes, slides, slideInterval }) => {
  return (
    <div className="flex h-full w-full">
      {/* Left 50% - Prayer Times */}
      <div className="w-1/2 p-4">
        <PrayerTimesDisplay prayerTimes={prayerTimes} className="h-full" />
      </div>

      {/* Right 50% - Rotating Slides */}
      <div className="w-1/2 p-4">
        <SlideShow slides={slides} interval={slideInterval} className="h-full" />
      </div>
    </div>
  );
};

export default Layout1Split;