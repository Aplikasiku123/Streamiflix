'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  const videos = [
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "For Bigger Blazes 🔥", user: "@StreamFlix", likes: "1.2K" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", title: "For Bigger Escapes", user: "@StreamFlix", likes: "3.5K" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "For Bigger Fun", user: "@StreamFlix", likes: "890" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", title: "For Bigger Joyrides", user: "@StreamFlix", likes: "2.1K" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", title: "For Bigger Meltdowns", user: "@StreamFlix", likes: "5.4K" },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', background: 'black', margin: 0, padding: 0 }}>
      {videos.map((v, i) => (
        <div key={i} style={{ height: '100vh', width: '100vw', position: 'relative', scrollSnapAlign: 'start' }}>
          <video 
            ref={(el) => { videoRefs.current[i] = el; }}
            src={v.src} 
            loop 
            playsInline 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: 80, left: 15, color: 'white', zIndex: 10 }}>
            <h2 style={{ fontSize: 18, margin: 0 }}>{v.user}</h2>
            <p style={{ fontSize: 14, margin: '5px 0 0 0' }}>{v.title}</p>
          </div>
          <div style={{ position: 'absolute', right: 10, bottom: 100, color: 'white', textAlign: 'center', fontSize: 28, zIndex: 10 }}>
            <div>❤️<br/><span style={{ fontSize: 12 }}>{v.likes}</span></div><br/>
            <div>💬<br/><span style={{ fontSize: 12 }}>88</span></div><br/>
            <div>↗️</div>
          </div>
        </div>
      ))}
    </div>
  )
}
