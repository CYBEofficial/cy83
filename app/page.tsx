import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  return (
    <main className="w-screen h-screen min-h-screen min-w-full bg-black overflow-hidden">
      <VideoPlayer 
        videoUrl="/media/whatgoesundercomesunder.mp4"
      />
    </main>
  );
}
