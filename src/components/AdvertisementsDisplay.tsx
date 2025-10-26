import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Advertisement {
  id: string;
  imageUrl: string;
  altText: string;
  link: string;
}

const advertisements: Advertisement[] = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Ad+Space+1",
    altText: "Advertisement 1",
    link: "#",
  },
  {
    id: "2",
    imageUrl: "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Ad+Space+2",
    altText: "Advertisement 2",
    link: "#",
  },
  {
    id: "3",
    imageUrl: "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Ad+Space+3",
    altText: "Advertisement 3",
    link: "#",
  },
];

const AdvertisementsDisplay: React.FC = () => {
  // For simplicity, we'll just show the first ad.
  // In a real app, you might rotate these or fetch them dynamically.
  const currentAd = advertisements[0];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Advertisements</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center p-4">
        {currentAd ? (
          <a href={currentAd.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <img
              src={currentAd.imageUrl}
              alt={currentAd.altText}
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        ) : (
          <p className="text-muted-foreground">No advertisements to display.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default AdvertisementsDisplay;