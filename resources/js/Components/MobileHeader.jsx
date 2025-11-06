import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Heart, Sparkles, Menu, X } from 'lucide-react';

/**
 * Komponen header modern dengan animasi untuk tampilan mobile
 */
export default function MobileHeader({ title = "Undangan Pernikahan" }) {
  const { url } = usePage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  // Mapping route ke title
  const routeTitles = {
    '/opening': 'Opening',
    '/salam': 'Salam',
    '/groom': 'Mempelai Pria',
    '/bride': 'Mempelai Wanita',
    '/akad': 'Akad Nikah',
    '/resepsi': 'Resepsi',
    '/maps': 'Lokasi',
    '/rsvp': 'RSVP',
    '/gift': 'Hadiah',
    '/lovestory': 'Love Story',
    '/quotes': 'Quotes',
    '/gallery': 'Gallery',
    '/tanks': 'Terima Kasih',
  };

  // Detect scroll untuk efek glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update page title berdasarkan route
  useEffect(() => {
    setPageTitle(routeTitles[url] || 'Undangan Pernikahan');
  }, [url]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg'
            : 'bg-white/60 backdrop-blur-sm shadow-sm'
          }
        `}
      >
        {/* Gradient accent line di atas */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-x" />

        {/* Container utama */}
        <div className="relative max-w-lg mx-auto">
          <div className="flex items-center justify-between h-16 px-6">

            {/* Left decoration */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart
                  className={`
                    w-6 h-6 transition-all duration-500
                    ${isScrolled ? 'text-pink-500 scale-100' : 'text-pink-400 scale-90'}
                  `}
                  fill={isScrolled ? 'currentColor' : 'none'}
                />
                {!isScrolled && (
                  <Sparkles
                    className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse"
                  />
                )}
              </div>
            </div>

            {/* Center title dengan animasi */}
            <div className="flex-1 flex justify-center overflow-hidden">
              <h1
                key={pageTitle}
                className="
                  text-lg font-semibold text-gray-800
                  animate-slideDown
                "
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {pageTitle}
              </h1>
            </div>

            {/* Right menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`
                relative p-2 rounded-full transition-all duration-300
                ${showMenu
                  ? 'bg-pink-100 text-pink-600 rotate-90'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
                }
              `}
              aria-label="Menu"
            >
              {showMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>

          {/* Decorative dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1 pb-1">
            <div className={`w-1 h-1 rounded-full bg-pink-400 transition-all duration-300 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`} />
            <div className={`w-1 h-1 rounded-full bg-purple-400 transition-all duration-300 delay-75 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`} />
            <div className={`w-1 h-1 rounded-full bg-blue-400 transition-all duration-300 delay-150 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`} />
          </div>
        </div>

        {/* Animated wave decoration di bawah */}
        <svg
          className="absolute bottom-0 left-0 w-full h-2 opacity-20"
          viewBox="0 0 1200 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,5 Q300,0 600,5 T1200,5 L1200,10 L0,10 Z"
            fill="url(#wave-gradient)"
            className="animate-wave"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      {/* Dropdown Menu dengan animasi */}
      <div
        className={`
          fixed top-16 right-4 z-40
          bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl
          overflow-hidden
          transition-all duration-500 ease-out
          ${showMenu
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }
        `}
      >
        <div className="p-4 space-y-3 min-w-[200px]">
          {/* Menu items */}
          <div className="space-y-2">
            {Object.entries(routeTitles).map(([route, name], index) => (
              <a
                key={route}
                href={route}
                className={`
                  block px-4 py-2 rounded-lg text-sm
                  transition-all duration-300
                  ${url === route
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                  animate-slideRight
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setShowMenu(false)}
              >
                {name}
              </a>
            ))}
          </div>

          {/* Decorative element */}
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-1">
              <Heart className="w-3 h-3 text-pink-400 animate-pulse" fill="currentColor" />
              <span className="text-xs text-gray-500">Undangan Pernikahan</span>
              <Heart className="w-3 h-3 text-pink-400 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay saat menu terbuka */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 animate-fadeIn"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5px);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-slideRight {
          animation: slideRight 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
