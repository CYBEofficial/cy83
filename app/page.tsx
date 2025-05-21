import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <VideoPlayer 
        videoUrl="/media/whatgoesundercomesunder.mp4"
      />
    </main>
  );
}
