import VideoPlayer from './components/VideoPlayer';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/cyb3' : '';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <VideoPlayer 
        videoUrl={`${basePath}/media/whatgoesundercomesunder.mp4`}
      />
    </main>
  );
}
