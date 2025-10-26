import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface PrayerTime {
  name: string;
  waqt: string; // Start time
  iqamah: string; // Congregation time
}

interface PrayerTimesDisplayProps {
  prayerTimes: PrayerTime[];
  isBottomBar?: boolean; // To adjust styling for the bottom bar layout
  className?: string;
}

const PrayerTimesDisplay: React.FC<PrayerTimesDisplayProps> = ({ prayerTimes, isBottomBar = false, className }) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader className={cn({ "py-2": isBottomBar, "py-4": !isBottomBar })}>
        <CardTitle className={cn("font-bold text-center", { "text-xl": isBottomBar, "text-2xl": !isBottomBar })}>
          Prayer Times
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center p-4">
        <div className={cn("grid gap-2", { "grid-cols-3 text-sm md:text-base": isBottomBar, "grid-cols-3 text-lg md:text-xl": !isBottomBar })}>
          <span className="font-bold">Time Name</span>
          <span className="font-bold text-center">Waqt</span>
          <span className="font-bold text-center">Iqamah</span>
        </div>
        <Separator className="my-2" />
        {prayerTimes.map((prayer, index) => (
          <React.Fragment key={prayer.name}>
            <div className={cn("grid gap-2 py-2", { "grid-cols-3 text-sm md:text-base": isBottomBar, "grid-cols-3 text-lg md:text-xl": !isBottomBar })}>
              <span className="font-medium">{prayer.name}</span>
              <span className="font-semibold text-primary text-center">{prayer.waqt}</span>
              <span className="font-semibold text-primary text-center">{prayer.iqamah}</span>
            </div>
            {index < prayerTimes.length - 1 && <Separator className="my-1" />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default PrayerTimesDisplay;