import React, { useState } from "react";

export default function YouTubePlayer({embededId, thumbnailUrl}) {
  const [isPlaying, setIsPlaying] = useState(false);

//   const thumbnailUrl = thumbnailUrl;
  const youtubeId = embededId;

  return (
    <div className="relative aspect-video w-full mt-10  overflow-hidden group">
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div
            className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
              <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                  style={{
                    filter:
                      "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                  }}
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Embedded YouTube iframe
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
