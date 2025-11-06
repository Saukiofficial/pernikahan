import React, { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';

const StoryItem = ({ year, title, description, alignment = 'left', index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = alignment === 'left';

  return (
    <div
      className="relative mb-24 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
        {/* Content Side */}
        <div className={`flex-1 ${isLeft ? 'pr-4' : 'pl-4'}`}>
          <div
            className={`relative bg-gradient-to-br from-amber-50 to-stone-100 p-8 rounded-none border-l-4 border-amber-700 shadow-lg transition-all duration-500 ${
              isHovered ? 'transform -translate-y-2 shadow-2xl' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)'
            }}
          >
            {/* Ornamental Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 0 0 Q 50 25, 100 0 L 100 100 Q 75 50, 100 0" fill="currentColor" className="text-amber-800"/>
              </svg>
            </div>

            {/* Year Badge */}
            <div className="inline-block mb-4">
              <div className="bg-amber-800 text-amber-50 px-4 py-1 text-sm font-serif tracking-widest">
                {year}
              </div>
            </div>

            {/* Title with decorative line */}
            <div className="mb-4">
              <h3 className="text-2xl font-serif text-stone-800 mb-2 tracking-wide">
                {title}
              </h3>
              <div className="h-px bg-gradient-to-r from-amber-700 to-transparent w-24"></div>
            </div>

            {/* Description */}
            <p className="text-stone-700 font-serif leading-relaxed text-justify">
              {description}
            </p>

            {/* Decorative Quote Mark */}
            <div className="absolute bottom-4 right-4 text-6xl text-amber-200 font-serif leading-none">
              "
            </div>
          </div>
        </div>

        {/* Center Timeline Dot */}
        <div className="relative flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full bg-amber-700 border-4 border-amber-100 shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-125 bg-amber-600' : ''
          }`}>
            <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-20"></div>
          </div>
          {index < 4 && (
            <div className="w-1 flex-grow bg-gradient-to-b from-amber-700 via-amber-500 to-amber-300 mt-2"
                 style={{ minHeight: '120px' }}>
            </div>
          )}
        </div>

        {/* Empty Space on Other Side */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default function LoveStory() {
  const stories = [
    {
      year: "2023",
      title: "Pertemuan Pertama",
      description: "Tidak ada yg kebetulan di dunia ini, semua sudah tersusun rapi oleh sang maha kuasa, kita tidak bisa memilih kepada siapa kita jatuh cinta, tepat pada bulan Desember 2023, kami saling mengenal satu sama lain melalui media sosial. Namun pada suatu hari kami lost contact, dan tidak tau kabar satu sama lain. Pada tahun 2024 tepatnya di bulan Januari, akhirnya kami di pertemukan kembali. Tidak ada yg pernah menyangka bahwa pertemuan itu membawa kami pada suatu ikatan cinta yang suci ini.",
      alignment: "left"
    },
    {
      year: "2024",
      title: "Awal Menjalin Kasih",
      description: "Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat lalu dengan komunikasi dan pertemuan yang cukup intens, kita menjalin komitmen bersama.",
      alignment: "right"
    },
    {
      year: "2024",
      title: "Jarak dan Waktu",
      description: "Jarak memang memisahkan kami, namun tak pernah memisahkan hati. Meski tak selalu mudah, kamu belajar bahwa cinta sejati adalah tentang kesetiaan untuk menunggu dan saling menguatkan'",
      alignment: "left"
    },
    {
      year: "2025",
      title: "Tunangan",
      description: "Kehendak tuhan yang menuntun kami pada sebuah pertemuan yang tak pernah di sangka hingga kami melangsungkan acara pertunangan di tanggal 04-04-2025",
      alignment: "right"
    },
    {
      year: "2025",
      title: "Menikah",
      description: "Percayalah, bukan karena kami bertemu kita berjodoh, tapi karena berjodohlah kami di pertemukan. Kami memutuskan untuk mengikrarkan janji suci pernikahan kami di bulan Desember ini insyaallah sebagai yang pernah dikatakan oleh *sayyidina ali bin abi thalib apa yang menjadi takdimu akan menentukan jalan menemukanmu*.",
      alignment: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 relative overflow-hidden">
      {/* Background Ornamental Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-amber-800 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-amber-800 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-amber-600 transform rotate-45"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-24">
          {/* Decorative Top Border */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent flex-1 max-w-xs"></div>
            <Heart size={24} className="text-amber-700" fill="currentColor" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent flex-1 max-w-xs"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl font-serif text-stone-800 mb-4 tracking-wide"
              style={{ fontFamily: 'Tangerine, cursive' }}>
            Our Love Story
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 font-serif italic text-lg tracking-widest">
            A Journey Through Time
          </p>

          {/* Decorative Flourish */}
          <div className="mt-8 flex justify-center">
            <svg width="120" height="20" viewBox="0 0 120 20" className="text-amber-700">
              <path d="M 0 10 Q 30 0, 60 10 T 120 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Timeline Stories */}
        <div className="relative">
          {stories.map((story, index) => (
            <StoryItem
              key={index}
              index={index}
              {...story}
            />
          ))}
        </div>

        {/* Footer Heart with Flourish */}
        <div className="text-center mt-16 pb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent flex-1 max-w-xs"></div>
            <div className="relative">
              <Heart size={48} className="text-amber-700 animate-pulse" fill="currentColor" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Heart size={48} className="text-amber-700" fill="currentColor" />
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent flex-1 max-w-xs"></div>
          </div>

          <p className="text-stone-600 font-serif italic text-sm tracking-widest">
            Et ils vécurent heureux pour toujours
          </p>
          <p className="text-stone-500 font-serif text-xs mt-2">
            (And they lived happily ever after)
          </p>
        </div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-amber-800 opacity-20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-amber-800 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-amber-800 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-800 opacity-20"></div>
    </div>
  );
}
