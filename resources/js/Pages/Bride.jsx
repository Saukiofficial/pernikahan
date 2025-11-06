import React, { useEffect, useState } from 'react';
import brideImage from '../../images/bride.jpg';

export default function Bride() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Ornamental Corner Decorations - Floral Style */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-8">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="#fce7f3" opacity="0.5"/>
          <circle cx="30" cy="70" r="20" fill="#fbcfe8" opacity="0.5"/>
          <circle cx="70" cy="70" r="20" fill="#f9a8d4" opacity="0.5"/>
          <path d="M50,20 Q30,40 50,60 Q70,40 50,20" fill="#ec4899" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-8 transform rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="#fce7f3" opacity="0.5"/>
          <circle cx="30" cy="70" r="20" fill="#fbcfe8" opacity="0.5"/>
          <circle cx="70" cy="70" r="20" fill="#f9a8d4" opacity="0.5"/>
          <path d="M50,20 Q30,40 50,60 Q70,40 50,20" fill="#ec4899" opacity="0.3"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">

        {/* Decorative Top Border */}
        <div
          className={`mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
            <svg width="16" height="16" viewBox="0 0 16 16" className="fill-rose-400">
              <path d="M8,2 L9,6 L13,6 L10,9 L11,13 L8,10 L5,13 L6,9 L3,6 L7,6 Z"/>
            </svg>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className={`relative bg-white/90 backdrop-blur-md p-12 rounded-lg shadow-2xl max-w-2xl w-full border-2 border-rose-100 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.15)',
          }}
        >
          {/* Corner Ornaments - Floral */}
          <div className="absolute -top-3 -left-3 w-12 h-12">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-rose-300">
              <circle cx="20" cy="20" r="8"/>
              <circle cx="10" cy="20" r="5"/>
              <circle cx="30" cy="20" r="5"/>
              <circle cx="20" cy="10" r="5"/>
              <circle cx="20" cy="30" r="5"/>
            </svg>
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-12 transform rotate-90">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-rose-300">
              <circle cx="20" cy="20" r="8"/>
              <circle cx="10" cy="20" r="5"/>
              <circle cx="30" cy="20" r="5"/>
              <circle cx="20" cy="10" r="5"/>
              <circle cx="20" cy="30" r="5"/>
            </svg>
          </div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 transform -rotate-90">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-rose-300">
              <circle cx="20" cy="20" r="8"/>
              <circle cx="10" cy="20" r="5"/>
              <circle cx="30" cy="20" r="5"/>
              <circle cx="20" cy="10" r="5"/>
              <circle cx="20" cy="30" r="5"/>
            </svg>
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 transform rotate-180">
            <svg viewBox="0 0 40 40" className="w-full h-full fill-rose-300">
              <circle cx="20" cy="20" r="8"/>
              <circle cx="10" cy="20" r="5"/>
              <circle cx="30" cy="20" r="5"/>
              <circle cx="20" cy="10" r="5"/>
              <circle cx="20" cy="30" r="5"/>
            </svg>
          </div>

          {/* Title */}
          <div
            className={`text-center mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2
              className="text-2xl tracking-widest text-rose-600 uppercase mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Bride
            </h2>
            <div className="flex justify-center items-center gap-3 mt-4">
              <div className="w-16 h-px bg-rose-400"></div>
              <svg width="12" height="12" viewBox="0 0 12 12" className="fill-rose-400 animate-pulse">
                <path d="M6,1 L7,5 L11,5 L8,7 L9,11 L6,8 L3,11 L4,7 L1,5 L5,5 Z"/>
              </svg>
              <div className="w-16 h-px bg-rose-400"></div>
            </div>
          </div>

          {/* Photo Container */}
          <div
            className={`mb-8 relative group transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Outer Decorative Ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700"></div>

            {/* Outer Frame */}
            <div className="relative mx-auto w-64 h-64 p-3 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-full shadow-2xl">
              {/* Middle Frame */}
              <div className="w-full h-full p-2 bg-gradient-to-br from-white to-rose-50 rounded-full">
                {/* Inner Frame */}
                <div className="w-full h-full p-1 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full">
                  {/* Photo */}
                  <div className="w-full h-full overflow-hidden rounded-full relative">
                    <img
                      src={brideImage}
                      alt="Mempelai Wanita"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x400/ffc0cb/000000?text=Bride";
                      }}
                    />
                    {/* Photo Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Sparkles */}
              <div className="absolute top-4 right-8 w-3 h-3 bg-rose-400 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-4 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-12 left-4 w-2 h-2 bg-rose-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Floating Crown */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg width="40" height="40" viewBox="0 0 40 40" className="fill-rose-400">
                <path d="M5,25 L8,15 L12,20 L20,10 L28,20 L32,15 L35,25 Z"/>
                <circle cx="8" cy="15" r="3" className="fill-yellow-400"/>
                <circle cx="20" cy="10" r="3" className="fill-yellow-400"/>
                <circle cx="32" cy="15" r="3" className="fill-yellow-400"/>
              </svg>
            </div>
          </div>

          {/* Name Section */}
          <div
            className={`text-center mt-12 mb-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1
              className="text-6xl text-rose-600 mb-3 tracking-wide"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Nabila
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-4"></div>
            <p
              className="text-xl text-purple-700 tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Nabila Anggun Kinanti
            </p>
          </div>

          {/* Divider Ornament */}
          <div
            className={`flex justify-center my-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg width="200" height="30" viewBox="0 0 200 30">
              <path d="M0,15 Q50,5 100,15 T200,15" stroke="#fb7185" strokeWidth="1.5" fill="none"/>
              <circle cx="100" cy="15" r="4" fill="#fb7185"/>
              <circle cx="50" cy="12" r="2" fill="#f9a8d4"/>
              <circle cx="150" cy="12" r="2" fill="#f9a8d4"/>
              <path d="M95,10 L100,5 L105,10 L100,15 Z" fill="#fda4af"/>
            </svg>
          </div>

          {/* Parents Info */}
          <div
            className={`text-center space-y-2 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p
              className="text-sm tracking-widest text-rose-600 uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Daughter of
            </p>
            <p className="text-purple-700 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bpk. Sumiadi
            </p>
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
              <p className="text-rose-400 text-xl">&</p>
              <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
            </div>
            <p className="text-purple-700 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ibu Novita Anggraeni
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div
          className={`mt-8 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
            <svg width="16" height="16" viewBox="0 0 16 16" className="fill-rose-400">
              <circle cx="8" cy="8" r="6"/>
              <circle cx="8" cy="8" r="3" className="fill-white"/>
            </svg>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        {/* Floating Rose Petals */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-rose-300/20 rounded-full"
              style={{
                width: `${8 + Math.random() * 8}px`,
                height: `${8 + Math.random() * 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-petal ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Great+Vibes&display=swap');

        @keyframes float-petal {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) translateX(20px) rotate(180deg);
          }
          100% {
            transform: translateY(-60px) translateX(-20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
