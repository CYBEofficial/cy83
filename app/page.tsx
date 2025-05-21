'use client';

import VideoPlayer from './components/VideoPlayer';

import { useState } from 'react';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <main className="fixed inset-0 w-screen h-screen bg-black overflow-hidden touch-none">
      <div className="absolute inset-0 w-full h-full z-0">
        <VideoPlayer 
          videoUrl="/media/whatgoesundercomesunder.mp4"
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      </div>

      {/* Overlay Buttons */}
      {/* Demo Button - Bottom Left (restored style) */}
      <div className="fixed bottom-4 left-4 z-[1000] p-2 bg-transparent sm:bottom-6 sm:left-6">
        <div className="relative">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScdXnUVqmYUBVQqRuapSiq27pfNWWXy89F1P2rRPPaoiFyfxQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 text-white rounded-full flex items-center justify-center border-2 border-transparent hover:border-[#F5001F] hover:rounded-[1px] hover:shadow-[0_0_4px_1px_rgba(245,0,31,0.5)] !transition-all !duration-150 focus:outline-none focus:ring-0 overflow-hidden p-0 glitch-effect hover:before:opacity-80 hover:after:opacity-50 shadow-none no-underline"
            aria-label="Submit demo"
          >
            <div className="relative w-6 h-6 transition-transform duration-100">
              <img src="/media/cybe-logo.svg" alt="CYBE Logo" className="w-full h-full object-contain" />
            </div>
            <div className="crt-scanline" />
          </a>
        </div>
      </div>
      {/* Mute/Unmute Button - Bottom Right (restored style) */}
      <div className="fixed bottom-4 right-4 z-[1000] p-2 bg-transparent sm:bottom-6 sm:right-6">
        <div className="relative">
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="group relative w-10 h-10 text-white rounded-full flex items-center justify-center border-2 border-transparent hover:border-[#F5001F] hover:rounded-[1px] hover:shadow-[0_0_4px_1px_rgba(245,0,31,0.5)] !transition-all !duration-150 focus:outline-none focus:ring-0 overflow-hidden p-0 glitch-effect hover:before:opacity-80 hover:after:opacity-50 shadow-none"
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
    </main>
  );
}
