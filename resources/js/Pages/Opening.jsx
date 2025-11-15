import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

// Temporary: gunakan URL placeholder dulu
import preweddingImage from '@/../images/prewedding.jpg';

// Halaman ini otomatis menggunakan MainLayout
export default function Opening() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [revealActive, setRevealActive] = useState(false);
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    // Trigger cinematic reveal
    const revealTimer = setTimeout(() => {
      setRevealActive(true);
    }, 300);

    // Trigger glow effect
    const glowTimer = setTimeout(() => {
      setGlowActive(true);
    }, 800);

    // Trigger content animation
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(glowTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Generate particles for animation
  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => i);
  };

  return (
    <>
      <Head title="Selamat Datang" />

      {/* Background dengan overlay */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image dengan cinematic reveal */}
        <div className="absolute inset-0 z-0">
          <img
            src={preweddingImage}
            alt="Background"
            className={`w-full h-full object-cover transition-all duration-2000 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/1920x1080/ffc0cb/ffffff?text=Background";
            }}
          />
          {/* Overlay gradient untuk keterbacaan */}
          <div className={`absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black transition-opacity duration-2000 ${
            revealActive ? 'opacity-0' : 'opacity-100'
          }`}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-transparent to-blue-100/40"></div>
        </div>

        {/* Cinematic Light Rays */}
        <div
          className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-2000 ${
            glowActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/30 via-pink-100/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

          {/* Rotating light rays */}
          <div className="absolute inset-0 animate-rotate-slow">
            {generateParticles(8).map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-full origin-bottom"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-50%)`,
                }}
              >
                <div className="w-full h-1/2 bg-gradient-to-t from-yellow-200/20 via-pink-200/10 to-transparent blur-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Light Particles */}
        <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden">
          {generateParticles(20).map((i) => (
            <div
              key={i}
              className="absolute animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <div
                className="w-2 h-2 bg-white rounded-full blur-sm opacity-60"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-10"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 z-10"></div>

        {/* Floating Hearts - Left Side */}
        <div className="absolute left-4 top-1/4 z-10 animate-float-slow">
          <div className="text-6xl text-pink-300 opacity-40">💕</div>
        </div>
        <div className="absolute left-12 top-1/3 z-10 animate-float-delayed">
          <div className="text-4xl text-red-300 opacity-30">💓</div>
        </div>
        <div className="absolute left-8 top-2/3 z-10 animate-float-slow-reverse">
          <div className="text-5xl text-pink-400 opacity-35">💖</div>
        </div>

        {/* Floating Hearts - Right Side */}
        <div className="absolute right-4 top-1/4 z-10 animate-float-delayed">
          <div className="text-5xl text-red-300 opacity-40">❤️</div>
        </div>
        <div className="absolute right-12 top-1/2 z-10 animate-float-slow">
          <div className="text-4xl text-pink-300 opacity-35">💗</div>
        </div>
        <div className="absolute right-6 top-3/4 z-10 animate-float-slow-reverse">
          <div className="text-6xl text-pink-400 opacity-30">💝</div>
        </div>

        {/* Sparkles */}
        <div className="absolute left-1/4 top-20 z-10 animate-sparkle">
          <div className="text-3xl text-yellow-300 opacity-60">✨</div>
        </div>
        <div className="absolute right-1/4 top-32 z-10 animate-sparkle-delayed">
          <div className="text-2xl text-yellow-400 opacity-50">⭐</div>
        </div>
        <div className="absolute left-1/3 bottom-32 z-10 animate-sparkle">
          <div className="text-4xl text-yellow-300 opacity-60">✨</div>
        </div>
        <div className="absolute right-1/3 bottom-20 z-10 animate-sparkle-delayed">
          <div className="text-3xl text-yellow-400 opacity-50">⭐</div>
        </div>

        {/* Romantic Flowers - Corners */}
        <div className="absolute top-0 left-0 z-10 opacity-20">
          <div className="text-8xl text-pink-400 rotate-12">🌸</div>
        </div>
        <div className="absolute top-0 right-0 z-10 opacity-20">
          <div className="text-8xl text-pink-400 -rotate-12">🌸</div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 opacity-20">
          <div className="text-7xl text-pink-300 -rotate-12">🌺</div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 opacity-20">
          <div className="text-7xl text-pink-300 rotate-12">🌺</div>
        </div>

        {/* Floating Petals */}
        <div className="absolute left-1/4 top-10 animate-petal-fall z-10">
          <div className="text-2xl text-pink-300 opacity-40">🌸</div>
        </div>
        <div className="absolute left-2/3 top-5 animate-petal-fall-delayed z-10">
          <div className="text-xl text-pink-400 opacity-35">🌸</div>
        </div>
        <div className="absolute right-1/4 top-16 animate-petal-fall-slow z-10">
          <div className="text-2xl text-pink-300 opacity-40">🌺</div>
        </div>

        {/* Love Birds */}
        <div className="absolute left-16 top-12 z-10 animate-bird-fly opacity-30">
          <div className="text-3xl">🕊️</div>
        </div>
        <div className="absolute right-16 top-16 z-10 animate-bird-fly-reverse opacity-30">
          <div className="text-3xl">🕊️</div>
        </div>

        {/* Konten Halaman Opening */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12">

          {/* Foto Prewedding dengan animasi */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Border decorative */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Container foto */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                  <img
                    src={preweddingImage}
                    alt="Prewedding Photo"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    } group-hover:scale-110`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x400/ffc0cb/ffffff?text=Prewedding";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card informasi dengan animasi */}
          <div
            className={`bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* The Wedding Of */}
            <h3
              className="text-2xl font-semibold text-gray-500 mb-6 animate-fade-in text-center"
              style={{
                fontFamily: "'Tangerine', cursive",
                animationDelay: '400ms'
              }}
            >
              The Wedding Of
            </h3>

            {/* Nama Mempelai Pria */}
            <h1
              className="text-5xl sm:text-6xl font-bold text-gray-800 mb-2 animate-slide-up text-center"
              style={{
                fontFamily: "'Great Vibes', cursive",
                animationDelay: '600ms'
              }}
            >
              Abbas
            </h1>

            {/* Simbol & */}
            <div className="flex items-center justify-center my-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span
                className="text-4xl font-light text-gray-600 mx-4 animate-pulse"
                style={{ animationDelay: '800ms' }}
              >
                &
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Nama Mempelai Wanita */}
            <h1
              className="text-5xl sm:text-6xl font-bold text-gray-800 mb-8 animate-slide-up text-center"
              style={{
                fontFamily: "'Great Vibes', cursive",
                animationDelay: '1000ms'
              }}
            >
              Nabila
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mx-auto mb-6 rounded-full"></div>

            {/* Informasi Tanggal */}
            <p
              className="text-gray-600 mb-3 animate-fade-in text-center"
              style={{ animationDelay: '1200ms' }}
            >
              Kami akan segera melangsungkan pernikahan
            </p>
            <p
              className="text-xl sm:text-2xl font-semibold text-gray-800 animate-fade-in text-center"
              style={{ animationDelay: '1400ms' }}
            >
              08 Desember 2025
            </p>

            {/* Decorative hearts */}
            <div className="flex justify-center gap-2 mt-6 animate-bounce" style={{ animationDelay: '1600ms' }}>
              <span className="text-pink-400">♥</span>
              <span className="text-red-400">♥</span>
              <span className="text-pink-400">♥</span>
            </div>
          </div>

        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes tilt {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(1deg); }
            75% { transform: rotate(-1deg); }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(5deg); }
          }

          @keyframes float-slow-reverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(30px) rotate(-5deg); }
          }

          @keyframes sparkle {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.3) rotate(180deg);
              opacity: 0.9;
            }
          }

          @keyframes petal-fall {
            0% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.4;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes bird-fly {
            0%, 100% {
              transform: translateX(0px) translateY(0px);
            }
            25% {
              transform: translateX(20px) translateY(-10px);
            }
            50% {
              transform: translateX(40px) translateY(0px);
            }
            75% {
              transform: translateX(20px) translateY(10px);
            }
          }

          @keyframes pulse-slow {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0.5;
            }
          }

          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float-particle {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-100vh) translateX(50px);
              opacity: 0;
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          .animate-tilt {
            animation: tilt 10s infinite linear;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
            opacity: 0;
          }

          .animate-slide-up {
            animation: slide-up 1s ease-out forwards;
            opacity: 0;
          }

          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-slow 6s ease-in-out infinite;
            animation-delay: 2s;
          }

          .animate-float-slow-reverse {
            animation: float-slow-reverse 7s ease-in-out infinite;
          }

          .animate-sparkle {
            animation: sparkle 3s ease-in-out infinite;
          }

          .animate-sparkle-delayed {
            animation: sparkle 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          .animate-petal-fall {
            animation: petal-fall 12s linear infinite;
          }

          .animate-petal-fall-delayed {
            animation: petal-fall 15s linear infinite;
            animation-delay: 3s;
          }

          .animate-petal-fall-slow {
            animation: petal-fall 18s linear infinite;
            animation-delay: 6s;
          }

          .animate-bird-fly {
            animation: bird-fly 8s ease-in-out infinite;
          }

          .animate-bird-fly-reverse {
            animation: bird-fly 8s ease-in-out infinite reverse;
            animation-delay: 2s;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          .animate-rotate-slow {
            animation: rotate-slow 40s linear infinite;
          }

          .animate-float-particle {
            animation: float-particle 10s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
