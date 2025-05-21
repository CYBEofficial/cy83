'use client';

import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

export default function VideoPlayer({ videoUrl, isMuted, setIsMuted }: VideoPlayerProps) {
  // isMuted and setIsMuted now come from props
  const [isMounted, setIsMounted] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Simply return the path as-is for root deployment
  const getVideoUrl = (path: string) => path;
  const fullVideoUrl = getVideoUrl(videoUrl);

  // Unmute when clicking on the video
  const handleVideoClick = () => {
    if (isMuted) {
      setIsMuted(false);
    }
  };

  // Toggle mute state for the button
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };



  // Add click event listener to the container (for unmute)
  useEffect(() => {
    const container = playerContainerRef.current;
    if (container) {
      container.addEventListener('click', handleVideoClick);
      return () => container.removeEventListener('click', handleVideoClick);
    }
  }, [isMuted]);

  // Set mounted state to handle SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full" style={{ height: 'calc(100dvh - env(safe-area-inset-bottom))', boxSizing: 'border-box' }}>
      <div className="w-full h-full overflow-hidden rounded-none relative" ref={playerContainerRef}>
        <ReactPlayer
          url={fullVideoUrl}
          playing={true}
          loop
          muted={isMuted}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous',
                playsInline: true,
                webkitplaysinline: "true",
                muted: isMuted,
                autoPlay: true,
              }
            }
          }}

        />

        {/* Click overlay - only un-mutes */}
        <button 
          className="absolute inset-0 cursor-pointer z-10 bg-transparent border-0"
          onClick={handleVideoClick}
          aria-label="Unmute video"
        />
      </div>


    </div>
  );
}
