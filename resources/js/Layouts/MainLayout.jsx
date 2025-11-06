import React from 'react';
import MobileHeader from '@/Components/MobileHeader';
import BottomNavbar from '@/Components/BottomNavbar';
import MusicController from '@/Components/MusicController';

export default function MainLayout({ children }) {
  const musicSrc = "/assets/music/song3.mp3";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <div className="relative flex-grow pb-20">
        <MobileHeader title="Undangan Pernikahan" />
        <main className="p-4">
          {children}
        </main>
      </div>
      <MusicController src={musicSrc} />

      <BottomNavbar />
    </div>
  );
}
