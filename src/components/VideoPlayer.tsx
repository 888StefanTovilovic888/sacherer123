"use client";

import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  thumb: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Capture first frame from the video as a poster image
  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.preload = "metadata";

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 0.05;
    });

    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPosterUrl(canvas.toDataURL("image/jpeg", 0.85));
      }
    });

    video.load();
  }, [src]);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  if (playing) {
    return (
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video object-contain block"
        controls
        autoPlay
        playsInline
      />
    );
  }

  return (
    <div className="relative w-full aspect-video bg-[#0a0a0a] cursor-pointer" onClick={handlePlay}>
      {/* Poster image (first frame) */}
      {posterUrl ? (
        <img
          src={posterUrl}
          alt="Video-Vorschau"
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full bg-[#111]" />
      )}

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-300">
          <Play size={20} className="text-white ml-1" fill="white" />
        </div>
      </div>
    </div>
  );
}
