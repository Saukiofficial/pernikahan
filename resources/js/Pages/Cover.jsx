import React, { useState, useEffect } from 'react';
import { Head, router } from '@inertiajs/react';
import { MailOpen, Heart } from 'lucide-react';

// Terima props guestName
export default function Cover({ guestName = 'Tamu Undangan' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);

    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 4 + Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  const handleBukaUndangan = () => {
    // Set flag di sessionStorage untuk memutar musik
    sessionStorage.setItem('playMusicOnLoad', 'true');

    // Navigasi ke halaman opening menggunakan Inertia router
    router.visit('/opening');
  };

  return (
    <>
      <Head title="Selamat Datang" />
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/prewedding.jpg')`,
            filter: 'brightness(0.6)',
            backgroundColor: '#1a1a1a'
          }}
        >
          {/* Fallback jika foto tidak muncul */}
          <img
            src="/images/prewedding.jpg"
            alt="Prewedding"
            className="w-full h-full object-cover opacity-0"
            onError={(e) => {
              console.error('Foto tidak ditemukan. Periksa path:', e.target.src);
              e.target.parentElement.style.backgroundImage = 'none';
              e.target.parentElement.style.backgroundColor = '#2d1b2e';
            }}
            onLoad={(e) => {
              console.log('Foto berhasil dimuat!');
            }}
          />
        </div>

        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-purple-500/10" />

        {/* Animated Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/30 animate-float"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              top: '-20px'
            }}
          />
        ))}

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <div
            className={`max-w-2xl w-full transition-all duration-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Decorative Heart Icon */}
            <div className="flex justify-center mb-8 animate-pulse-slow">
              <div className="relative">
                <Heart
                  className="text-rose-400 fill-rose-400"
                  size={48}
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 blur-xl bg-rose-400 opacity-50 animate-ping-slow" />
              </div>
            </div>

            {/* Card Container with Glass Effect */}
            <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-12 shadow-2xl border border-white/10">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Small Title with Fade-in */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-300 mb-4 font-light">
                    The Wedding Of
                  </p>
                </div>

                {/* Names with Staggered Animation */}
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <h1
                    className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    <span className="inline-block animate-fade-in-up">Abbas</span>
                    <span className="inline-block mx-4 text-rose-400 animate-pulse-slow">&</span>
                    <span className="inline-block animate-fade-in-up animation-delay-200">Nabila</span>
                  </h1>
                </div>

                {/* Decorative Line */}
                <div
                  className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400" />
                  <Heart size={16} className="text-rose-400 fill-rose-400" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400" />
                </div>

                {/* Description */}
                <div
                  className={`transition-all duration-1000 delay-900 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <p className="text-gray-200 text-lg mb-4 max-w-md mx-auto leading-relaxed font-light">
                    Kami mengundang Anda untuk berbagi kebahagiaan dalam momen istimewa kami
                  </p>

                  {/* TAMBAHAN UNTUK MENAMPILKAN NAMA TAMU */}
                  <div className="mt-6 mb-10 p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-wider text-rose-300 mb-1">Kepada Yth:</p>
                    {/* PERUBAHAN FONT DI SINI */}
                    <h3
                        className="text-4xl font-semibold text-white tracking-wide mt-2"
                        style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      {guestName}
                    </h3>
                  </div>
                  {/* AKHIR BAGIAN TAMBAHAN */}

                </div>

                {/* CTA Button with Magnetic Effect */}
                <div
                  className={`transition-all duration-1000 delay-1100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <button
                    onClick={handleBukaUndangan}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-rose-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-400/50"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <MailOpen size={22} className="relative z-10 animate-bounce-slow" />
                    <span className="relative z-10 tracking-wide">Buka Undangan</span>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 blur-xl bg-rose-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div
              className={`mt-8 text-center transition-all duration-1000 delay-1300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-white/40 text-sm tracking-wider">
                Scroll down to explore
              </p>
              <div className="mt-2 flex justify-center">
                <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-scroll-indicator" />
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(100vh) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-20px) translateX(30px);
              opacity: 0;
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scrollIndicator {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(20px);
              opacity: 0;
            }
          }

          @keyframes pingSlow {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 0.5;
            }
          }

          @keyframes pulseSlow {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }

          @keyframes bounceSlow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          .animate-float {
            animation: float linear infinite;
          }

          .animate-shimmer {
            animation: shimmer 3s infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animate-scroll-indicator {
            animation: scrollIndicator 2s ease-in-out infinite;
          }

          .animate-ping-slow {
            animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }

          .animate-bounce-slow {
            animation: bounceSlow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}
