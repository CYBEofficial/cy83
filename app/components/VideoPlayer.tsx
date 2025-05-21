'use client';

import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
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
    setIsMuted(prev => !prev);
  };

  // Add click event listener to the container
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
    <div className="relative w-full h-full">
      {/* Video container with click handler */}
      <div className="w-full h-full overflow-hidden rounded-lg relative" ref={playerContainerRef}>
        <ReactPlayer
          url={fullVideoUrl}
          playing
          loop
          muted={isMuted}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            transform: 'scale(1.05)',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous'
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

      {/* Demo Submission Button - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-[1000] p-2 bg-transparent">
        <div className="relative">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScdXnUVqmYUBVQqRuapSiq27pfNWWXy89F1P2rRPPaoiFyfxQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative
              w-10 h-10
              text-white rounded-full
              flex items-center justify-center
              border-2 border-transparent hover:border-[#F5001F] hover:rounded-[1px] hover:shadow-[0_0_4px_1px_rgba(245,0,31,0.5)]
              !transition-all !duration-150
              focus:outline-none focus:ring-0
              overflow-hidden
              p-0
              glitch-effect
              hover:before:opacity-80
              hover:after:opacity-50
              shadow-none
              no-underline
            "
            aria-label="Submit demo"
          >
            <div className="relative w-6 h-6 transition-transform duration-100">
              <img 
                src="/media/cybe-logo.svg" 
                alt="CYBE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="crt-scanline" />
          </a>
        </div>
      </div>

      {/* Mute Button - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-[1000] p-2 bg-transparent">
        <div className="relative">
          <button
            onClick={toggleMute}
            className="
              group relative
              w-10 h-10
              text-white rounded-full
              flex items-center justify-center
              border-2 border-transparent hover:border-[#F5001F] hover:rounded-[1px] hover:shadow-[0_0_4px_1px_rgba(245,0,31,0.5)]
              !transition-all !duration-150
              focus:outline-none focus:ring-0
              overflow-hidden
              p-0
              glitch-effect
              hover:before:opacity-80
              hover:after:opacity-50
              shadow-none
            "
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            <div className="relative w-6 h-6 transition-transform duration-100">
              {/* Muted Icon */}
              <svg 
                className={`absolute inset-0 w-full h-full transition-opacity duration-100 text-[#F5001F] ${isMuted ? 'opacity-100' : 'opacity-0'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              
              {/* Unmuted Icon */}
              <svg 
                className={`absolute inset-0 w-full h-full transition-opacity duration-100 text-[#F5001F] ${!isMuted ? 'opacity-100' : 'opacity-0'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </div>
            <div className="crt-scanline" />
          </button>
        </div>
      </div>

      {/* Click to unmute functionality remains without visual hint */}
    </div>
  );
}
