import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function ThanksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [heartsAnimated, setHeartsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const heartsTimer = setTimeout(() => setHeartsAnimated(true), 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(heartsTimer);
    };
  }, []);

  const floatingHearts = [
    { delay: '0s', x: '10%', duration: '6s' },
    { delay: '1s', x: '25%', duration: '7s' },
    { delay: '2s', x: '50%', duration: '8s' },
    { delay: '0.5s', x: '75%', duration: '6.5s' },
    { delay: '1.5s', x: '90%', duration: '7.5s' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      {/* Ambient Background Blobs */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Hearts Animation */}
      {heartsAnimated && floatingHearts.map((heart, index) => (
        <div
          key={index}
          className="absolute bottom-0 opacity-20"
          style={{
            left: heart.x,
            animation: `floatUp ${heart.duration} ease-in infinite`,
            animationDelay: heart.delay
          }}
        >
          <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
        </div>
      ))}

      {/* Decorative Sparkles */}
      <div className="absolute top-20 left-20 opacity-20 animate-pulse">
        <Sparkles className="w-8 h-8 text-pink-400" />
      </div>
      <div className="absolute top-32 right-24 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-rose-400" />
      </div>
      <div className="absolute bottom-32 left-24 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Star className="w-6 h-6 text-purple-400" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-8 h-8 text-pink-400" />
      </div>

      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

        {/* Main Content Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>

          <div className="relative bg-white bg-opacity-80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white border-opacity-50 overflow-hidden">
            {/* Top Decorative Border */}
            <div className="h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-rose-300 rounded-tl-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-300 rounded-br-3xl opacity-30"></div>

            <div className="p-8 sm:p-12 lg:p-16 text-center">
              {/* Heart Icon with Animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-full p-5 shadow-xl animate-pulse">
                    <Heart className="w-10 h-10 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-8">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
                  Terima Kasih
                </h1>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  <Heart className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" />
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                </div>
              </div>

              {/* Message */}
              <div className="max-w-2xl mx-auto space-y-6 mb-10">
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light">
                  Merupakan suatu <span className="font-semibold text-slate-800">kehormatan dan kebahagiaan</span> bagi kami atas kehadiran dan doa restu Bapak/Ibu/Saudara/i.
                </p>
              </div>

              {/* Divider with Ornament */}
              <div className="flex items-center justify-center gap-3 my-10">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                </div>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              </div>

              {/* Closing Message */}
              <p className="text-lg sm:text-xl text-slate-600 mb-8 italic">
                Kami yang berbahagia,
              </p>

              {/* Names Signature */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl px-10 py-6 shadow-lg border border-rose-200 border-opacity-50">
                  <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-800 via-pink-700 to-purple-800 bg-clip-text text-transparent">
                    Abbas & Nabila
                  </h2>
                  <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Hearts */}
              <div className="flex justify-center gap-4 mt-12">
                <Heart className="w-4 h-4 text-rose-400 animate-pulse" fill="currentColor" />
                <Heart className="w-5 h-5 text-pink-400 animate-pulse" fill="currentColor" style={{ animationDelay: '0.3s' }} />
                <Heart className="w-4 h-4 text-purple-400 animate-pulse" fill="currentColor" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>

            {/* Bottom Decorative Border */}
            <div className="h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white bg-opacity-60 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg border border-white border-opacity-50">
            <p className="text-slate-600 italic text-sm sm:text-base">
              "Cinta sejati adalah ketika dua hati bersatu dalam ikatan yang diberkati"
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
