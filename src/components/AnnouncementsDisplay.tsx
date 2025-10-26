import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Community Potluck Next Saturday!",
    content: "Join us for a fun community potluck next Saturday at 6 PM in the main hall. Bring your favorite dish to share!",
    date: "October 26, 2024",
  },
  {
    id: "2",
    title: "Volunteer Opportunity: Park Cleanup",
    content: "We need volunteers for our annual park cleanup event this Sunday from 9 AM to 12 PM. Gloves and bags will be provided.",
    date: "October 20, 2024",
  },
  {
    id: "3",
    title: "New Youth Program Starting Soon",
    content: "Exciting new youth programs are launching in November! Stay tuned for more details on registration and activities.",
    date: "October 15, 2024",
  },
  {
    id: "4",
    title: "Reminder: Daylight Saving Time Ends",
    content: "Don't forget to set your clocks back one hour on November 3rd as Daylight Saving Time ends.",
    date: "October 10, 2024",
  },
];

const AnnouncementsDisplay: React.FC = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Announcements</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <ScrollArea className="h-full pr-4">
          {announcements.map((announcement, index) => (
            <React.Fragment key={announcement.id}>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-primary">{announcement.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{announcement.date}</p>
                <p className="text-base">{announcement.content}</p>
              </div>
              {index < announcements.length - 1 && <Separator className="my-4" />}
            </React.Fragment>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AnnouncementsDisplay;