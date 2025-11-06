import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Akad() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%),
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Decorative Light Beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-amber-300/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-amber-300/20 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-16">
        <div className="w-full max-w-4xl">

          {/* Header Section */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            {/* Decorative Top */}
            <div className="flex justify-center mb-6">
              <svg width="120" height="40" viewBox="0 0 120 40" className="fill-amber-400">
                <path d="M0,20 Q30,10 60,20 T120,20" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="60" cy="20" r="6"/>
                <circle cx="30" cy="17" r="3"/>
                <circle cx="90" cy="17" r="3"/>
              </svg>
            </div>

            <h2
              className="text-7xl font-bold text-amber-300 mb-4 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Akad Nikah
            </h2>

            <div className="flex justify-center items-center gap-4 my-6">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div className="w-3 h-3 rotate-45 border-2 border-amber-400"></div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent via-amber-400 to-transparent"></div>
            </div>

            <p
              className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto px-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan akad nikah yang insya Allah akan dilaksanakan pada:
            </p>
          </div>

          {/* Main Card */}
          <div
            className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-10 rounded-sm shadow-2xl border border-amber-600/30 relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/50"></div>

            <div className="space-y-8">
              {/* Date Card */}
              <div
                className={`relative group transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                onMouseEnter={() => setHoveredCard('date')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-sm border-l-4 border-amber-500 transition-all duration-300 ${
                  hoveredCard === 'date' ? 'border-l-8 shadow-lg shadow-amber-500/20 translate-x-2' : ''
                }`}>
                  <div className="flex items-start gap-6">
                    <div className={`bg-amber-500/20 p-4 rounded-sm transition-all duration-300 ${
                      hoveredCard === 'date' ? 'bg-amber-500/30 scale-110' : ''
                    }`}>
                      <Calendar className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-sm tracking-widest text-amber-400 uppercase mb-2"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Date
                      </h3>
                      <p className="text-2xl font-bold text-gray-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Senin, 08 Desember 2025
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Line */}
                <div className={`absolute -right-4 top-1/2 w-8 h-px bg-amber-500/30 transition-all duration-300 ${
                  hoveredCard === 'date' ? 'w-12 bg-amber-500/60' : ''
                }`}></div>
              </div>

              {/* Time Card */}
              <div
                className={`relative group transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                onMouseEnter={() => setHoveredCard('time')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-sm border-l-4 border-amber-500 transition-all duration-300 ${
                  hoveredCard === 'time' ? 'border-l-8 shadow-lg shadow-amber-500/20 translate-x-2' : ''
                }`}>
                  <div className="flex items-start gap-6">
                    <div className={`bg-amber-500/20 p-4 rounded-sm transition-all duration-300 ${
                      hoveredCard === 'time' ? 'bg-amber-500/30 scale-110' : ''
                    }`}>
                      <Clock className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-sm tracking-widest text-amber-400 uppercase mb-2"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Time
                      </h3>
                      <p className="text-2xl font-bold text-gray-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Pukul 08:00 - Selesai WIB
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Line */}
                <div className={`absolute -right-4 top-1/2 w-8 h-px bg-amber-500/30 transition-all duration-300 ${
                  hoveredCard === 'time' ? 'w-12 bg-amber-500/60' : ''
                }`}></div>
              </div>

              {/* Location Card */}
              <div
                className={`relative group transition-all duration-700 delay-900 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                onMouseEnter={() => setHoveredCard('location')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-sm border-l-4 border-amber-500 transition-all duration-300 ${
                  hoveredCard === 'location' ? 'border-l-8 shadow-lg shadow-amber-500/20 translate-x-2' : ''
                }`}>
                  <div className="flex items-start gap-6">
                    <div className={`bg-amber-500/20 p-4 rounded-sm transition-all duration-300 ${
                      hoveredCard === 'location' ? 'bg-amber-500/30 scale-110' : ''
                    }`}>
                      <MapPin className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-sm tracking-widest text-amber-400 uppercase mb-2"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Venue
                      </h3>
                      <p className="text-2xl font-bold text-gray-200 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Rumah Kami
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Jl. Moris Rt 05 Rw 03, Kemulan Turen Malang, Jawa Timur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Ornament */}
            <div className="flex justify-center my-10">
              <svg width="250" height="30" viewBox="0 0 250 30">
                <path d="M0,15 L60,15 M190,15 L250,15" stroke="#f59e0b" strokeWidth="1" opacity="0.3"/>
                <path d="M70,15 Q95,5 125,15 T180,15" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
                <circle cx="125" cy="15" r="5" fill="#f59e0b"/>
                <circle cx="95" cy="12" r="2" fill="#fbbf24"/>
                <circle cx="155" cy="12" r="2" fill="#fbbf24"/>
              </svg>
            </div>

            {/* Button */}
            <div
              className={`text-center transition-all duration-700 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-sm shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden border border-amber-500/50">
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative flex items-center gap-3" style={{ fontFamily: "'Cinzel', serif" }}>
                  <Calendar className="w-5 h-5" />
                  SIMPAN KE KALENDER
                </span>
              </button>

              <p className="text-gray-500 text-sm mt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Klik untuk menambahkan ke kalender pribadi Anda
              </p>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div
            className={`flex justify-center mt-12 transition-all duration-1000 delay-1300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-3 h-3 rotate-45 bg-amber-400"></div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-light ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@400;700;900&display=swap');

        @keyframes float-light {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-60px) translateX(30px) scale(1.5);
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
