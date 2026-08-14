'use client';
import { useState } from 'react';

const videos = [
  { id: 1, title: 'Spider-Man: No Way Home', youtubeId: 'JfVOs4VSpmA', thumb: 'https://img.youtube.com/vi/JfVOs4VSpmA/hqdefault.jpg' },
  { id: 2, title: 'Avengers: Endgame', youtubeId: 'TcMBFSGVi1c', thumb: 'https://img.youtube.com/vi/TcMBFSGVi1c/hqdefault.jpg' },
  { id: 3, title: 'The Batman', youtubeId: 'mqqft2x_Aa4', thumb: 'https://img.youtube.com/vi/mqqft2x_Aa4/hqdefault.jpg' },
  { id: 4, title: 'Dune Part 2', youtubeId: 'U2Qp5pL3ovA', thumb: 'https://img.youtube.com/vi/U2Qp5pL3ovA/hqdefault.jpg' },
  { id: 5, title: 'Oppenheimer', youtubeId: 'uYPbbksJxIg', thumb: 'https://img.youtube.com/vi/uYPbbksJxIg/hqdefault.jpg' },
];

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>StreamFlix</h1>
      
      {/* PLAYER VIDEO */}
      {selectedVideo && (
        <div style={{ margin: '20px 0' }}>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <h2>Judul Video Unggulan: {selectedVideo.title}</h2>
      <button 
        onClick={() => setSelectedVideo(videos[0])}
        style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        ▶ Putar Ulang
      </button>

      <h2 style={{ marginTop: '40px' }}>Trending Minggu Ini</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {videos.map((video) => (
          <div key={video.id} onClick={() => setSelectedVideo(video)} style={{ cursor: 'pointer' }}>
            <img src={video.thumb} alt={video.title} style={{ width: '100%', borderRadius: '8px' }} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
