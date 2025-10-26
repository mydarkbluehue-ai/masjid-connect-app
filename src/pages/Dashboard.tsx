import React from "react";
import PrayerTimesDisplay from "@/components/PrayerTimesDisplay";
import AnnouncementsDisplay from "@/components/AnnouncementsDisplay";
import AdvertisementsDisplay from "@/components/AdvertisementsDisplay";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 flex flex-col">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl text-primary">
          Community Hub
        </h1>
        <p className="text-lg text-muted-foreground mt-2">Your daily source for prayer times, announcements, and local ads.</p>
      </header>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <PrayerTimesDisplay />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex-grow">
            <AnnouncementsDisplay />
          </div>
          <div className="flex-grow">
            <AdvertisementsDisplay />
          </div>
        </div>
      </main>

      <footer className="mt-8">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Dashboard;