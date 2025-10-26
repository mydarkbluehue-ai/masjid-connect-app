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

interface Layout2BottomBarProps {
  prayerTimes: PrayerTime[];
  slides: Slide[];
  slideInterval?: number;
}

const Layout2BottomBar: React.FC<Layout2BottomBarProps> = ({ prayerTimes, slides, slideInterval }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Upper 75% - Rotating Slides */}
      <div className="flex-grow h-3/4 p-4">
        <SlideShow slides={slides} interval={slideInterval} className="h-full" />
      </div>

      {/* Bottom 25% - Prayer Times */}
      <div className="h-1/4 p-4">
        <PrayerTimesDisplay prayerTimes={prayerTimes} isBottomBar className="h-full" />
      </div>
    </div>
  );
};

export default Layout2BottomBar;