import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-2 py-4 md:px-8 md:py-12">
      <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-video">
        <VideoPlayer 
          videoUrl="/media/whatgoesundercomesunder.mp4"
        />
      </div>
    </main>
  );
}
