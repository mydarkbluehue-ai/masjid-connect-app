import React from "react";

interface Slide {
  id: string;
  type: "image" | "text" | "video" | "announcement" | "advertisement";
  content?: string; // For text slides
  imageUrl?: string; // For image slides
  videoUrl?: string; // For video slides (placeholder)
  title?: string; // For announcement/advertisement titles
  description?: string; // For announcement/advertisement descriptions
  link?: string; // For advertisement links
}

interface SlideRendererProps {
  slide: Slide;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case "image":
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          {slide.imageUrl ? (
            <img src={slide.imageUrl} alt={slide.title || "Slide Image"} className="w-full h-full object-cover" />
          ) : (
            <p className="text-2xl text-muted-foreground">Image Slide Placeholder</p>
          )}
        </div>
      );
    case "text":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-blue-100 dark:bg-blue-900 rounded-lg">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">{slide.title || "Text Slide"}</h2>
          <p className="text-2xl text-blue-700 dark:text-blue-300">{slide.content || "This is a text-based announcement or message."}</p>
        </div>
      );
    case "video":
      return (
        <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
          {slide.videoUrl ? (
            <video src={slide.videoUrl} controls className="w-full h-full object-cover" />
          ) : (
            <p className="text-2xl text-white">Video Slide Placeholder</p>
          )}
        </div>
      );
    case "announcement":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-green-100 dark:bg-green-900 rounded-lg">
          <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">{slide.title || "Announcement"}</h2>
          <p className="text-2xl text-green-700 dark:text-green-300">{slide.description || "Important community announcement."}</p>
          {slide.imageUrl && <img src={slide.imageUrl} alt="Announcement Image" className="mt-4 max-h-1/2 object-contain" />}
        </div>
      );
    case "advertisement":
      return (
        <a href={slide.link || "#"} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-purple-100 dark:bg-purple-900 rounded-lg">
            <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-200 mb-4">{slide.title || "Advertisement"}</h2>
            {slide.imageUrl && <img src={slide.imageUrl} alt="Advertisement Image" className="mt-4 max-h-1/2 object-contain" />}
            <p className="text-2xl text-purple-700 dark:text-purple-300 mt-4">{slide.description || "Click to learn more!"}</p>
          </div>
        </a>
      );
    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg">
          <p className="text-2xl text-muted-foreground">Unknown Slide Type</p>
        </div>
      );
  }
};

export default SlideRenderer;