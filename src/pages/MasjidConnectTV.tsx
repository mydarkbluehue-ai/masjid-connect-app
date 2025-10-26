import React, { useState } from "react";
import Layout1Split from "@/components/layouts/Layout1Split";
import Layout2BottomBar from "@/components/layouts/Layout2BottomBar";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import { PrayerTime } from "@/components/PrayerTimesDisplay";

// Placeholder Data
const placeholderPrayerTimes: PrayerTime[] = [
  { name: "Fajr", waqt: "05:30 AM", iqamah: "05:45 AM" },
  { name: "Sunrise", waqt: "06:45 AM", iqamah: "-" },
  { name: "Dhuhr", waqt: "01:00 PM", iqamah: "01:15 PM" },
  { name: "Asr", waqt: "04:30 PM", iqamah: "04:45 PM" },
  { name: "Maghrib", waqt: "07:15 PM", iqamah: "07:20 PM" },
  { name: "Isha", waqt: "08:45 PM", iqamah: "09:00 PM" },
];

const placeholderSlides = [
  { id: "s1", type: "announcement", title: "Community Potluck", description: "Join us next Saturday at 6 PM!", imageUrl: "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Potluck+Announcement" },
  { id: "s2", type: "advertisement", title: "Local Halal Grocer", description: "Fresh Zabiha Meat - 10% off this week!", imageUrl: "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Halal+Grocer+Ad", link: "#" },
  { id: "s3", type: "text", title: "Jummah Khutbah", content: "Every Friday at 1:30 PM. Topic: The Importance of Sadaqah." },
  { id: "s4", type: "advertisement", title: "Islamic Bookstore", description: "New arrivals! Discover inspiring reads.", imageUrl: "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Bookstore+Ad", link: "#" },
  { id: "s5", type: "announcement", title: "Youth Program", description: "New youth programs starting in November. Register now!", imageUrl: "https://via.placeholder.com/800x400/FFC300/000000?text=Youth+Program" },
];

const MasjidConnectTV: React.FC = () => {
  const [currentLayout, setCurrentLayout] = useState<"layout1" | "layout2">("layout1");

  return (
    <div className="relative min-h-screen w-screen bg-background text-foreground overflow-hidden">
      <LayoutSwitcher currentLayout={currentLayout} onLayoutChange={setCurrentLayout} />

      {currentLayout === "layout1" ? (
        <Layout1Split prayerTimes={placeholderPrayerTimes} slides={placeholderSlides} slideInterval={10000} />
      ) : (
        <Layout2BottomBar prayerTimes={placeholderPrayerTimes} slides={placeholderSlides} slideInterval={10000} />
      )}
    </div>
  );
};

export default MasjidConnectTV;