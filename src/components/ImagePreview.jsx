import React, { useState } from "react";

export default function ImagePreview({imageUrl}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target.id === "backdrop") {
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {/* Normal View */}
      <div
        className="relative aspect-video w-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsFullscreen(true)}
      >
        <img
          alt="Glow"
          className="absolute h-[110%] w-[110%] object-cover blur-[60px] brightness-10 opacity-70"
          src={imageUrl}
          style={{ color: "transparent" }}
        />
        <img
          alt="Sandbox"
          className="relative z-0 w-full object-cover rounded-xl"
          src={imageUrl}
          style={{ color: "transparent" }}
        />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          id="backdrop"
          className="fixed inset-0 p-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md backdrop-brightness-75"
          onClick={handleBackdropClick}
        >

          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 z-20 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Close
          </button>

          <img
            src={imageUrl}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl z-10"
          />
        </div>
      )}
    </>
  );
}
