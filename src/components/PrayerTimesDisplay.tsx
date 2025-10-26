import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PrayerTime {
  name: string;
  time: string;
}

const prayerTimes: PrayerTime[] = [
  { name: "Fajr", time: "05:30 AM" },
  { name: "Sunrise", time: "06:45 AM" },
  { name: "Dhuhr", time: "01:00 PM" },
  { name: "Asr", time: "04:30 PM" },
  { name: "Maghrib", time: "07:15 PM" },
  { name: "Isha", time: "08:45 PM" },
];

const PrayerTimesDisplay: React.FC = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Prayer Times</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center p-4">
        {prayerTimes.map((prayer, index) => (
          <React.Fragment key={prayer.name}>
            <div className="flex justify-between items-center py-2 text-lg md:text-xl">
              <span className="font-medium">{prayer.name}</span>
              <span className="font-semibold text-primary">{prayer.time}</span>
            </div>
            {index < prayerTimes.length - 1 && <Separator className="my-1" />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default PrayerTimesDisplay;