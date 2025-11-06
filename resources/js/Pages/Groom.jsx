import React, { useEffect, useState } from 'react';
import groomImage from '../../images/groom.jpg';

export default function Groom() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700 rounded-full blur-3xl"></div>
      </div>

      {/* Ornamental Corner Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0,0 Q50,50 0,100 Q50,50 100,0 Z" fill="#78350f" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 transform rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0,0 Q50,50 0,100 Q50,50 100,0 Z" fill="#78350f" />
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
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-800"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-amber-800"></div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-800"></div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className={`relative bg-white/80 backdrop-blur-md p-12 rounded-sm shadow-2xl max-w-2xl w-full border border-amber-100 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {/* Corner Ornaments */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-800/30"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-800/30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-800/30"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-800/30"></div>

          {/* Title */}
          <div
            className={`text-center mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2
              className="text-2xl tracking-widest text-amber-900 uppercase mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Groom
            </h2>
            <div className="flex justify-center items-center gap-3 mt-4">
              <div className="w-16 h-px bg-amber-800"></div>
              <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-amber-800"></div>
            </div>
          </div>

          {/* Photo Container */}
          <div
            className={`mb-8 relative group transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Outer Frame */}
            <div className="relative mx-auto w-64 h-64 p-3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-sm shadow-xl">
              {/* Inner Frame */}
              <div className="w-full h-full p-2 bg-gradient-to-br from-slate-700 to-slate-600 rounded-sm">
                {/* Photo */}
                <div className="w-full h-full overflow-hidden rounded-sm relative">
                  <img
                    src={groomImage}
                    alt="Mempelai Pria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x400/8B7355/FFFFFF?text=AAB";
                    }}
                  />
                  {/* Photo Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Decorative Corners on Frame */}
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="w-full h-px bg-amber-800 absolute top-0"></div>
                <div className="w-px h-full bg-amber-800 absolute left-0"></div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6">
                <div className="w-full h-px bg-amber-800 absolute top-0"></div>
                <div className="w-px h-full bg-amber-800 absolute right-0"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6">
                <div className="w-full h-px bg-amber-800 absolute bottom-0"></div>
                <div className="w-px h-full bg-amber-800 absolute left-0"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <div className="w-full h-px bg-amber-800 absolute bottom-0"></div>
                <div className="w-px h-full bg-amber-800 absolute right-0"></div>
              </div>
            </div>

            {/* Floating Ornament */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-amber-200 animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div
            className={`text-center mt-12 mb-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1
              className="text-6xl text-slate-800 mb-3 tracking-wide"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Abbas
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-800 to-transparent mx-auto mb-4"></div>
            <p
              className="text-xl text-slate-600 tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Abd. Basith
            </p>
          </div>

          {/* Divider Ornament */}
          <div
            className={`flex justify-center my-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg width="200" height="20" viewBox="0 0 200 20" className="fill-amber-800/30">
              <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="10" r="3" fill="currentColor"/>
            </svg>
          </div>

          {/* Parents Info */}
          <div
            className={`text-center space-y-2 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p
              className="text-sm tracking-widest text-amber-900 uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Son of
            </p>
            <p className="text-slate-700 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bpk. Subaidi
            </p>
            <p className="text-amber-800 text-2xl my-2">&</p>
            <p className="text-slate-700 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ibu Kutsiyah
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
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-800"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-amber-800"></div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-800"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-600/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Great+Vibes&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
