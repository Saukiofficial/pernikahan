import React, { useState, useEffect } from 'react';
import { Diamond, MapPin, Clock, Calendar, Navigation, Sparkles } from 'lucide-react';

export default function Resepsi() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100 overflow-hidden">

      {/* Decorative Background Elements - European Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-amber-800 rounded-full"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-amber-800 rounded-full"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>

      {/* Ornamental Border Top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />

      <div className="relative w-full max-w-4xl mx-auto px-6 py-16 pb-32">

        {/* Header Section with European Typography */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>

          {/* Decorative Line Top */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <Diamond className="mx-4 text-amber-700" size={20} fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>

          {/* Main Title - European Serif Style */}
          <h1 className="font-serif text-6xl md:text-7xl text-slate-800 mb-4 tracking-wide">
            Resépsi
          </h1>

          {/* Subtitle in French Style */}
          <p className="font-serif italic text-amber-800 text-xl mb-2 tracking-widest">
            LA RÉCEPTION
          </p>

          {/* Decorative Line Bottom */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-24 bg-amber-700" />
            <Sparkles className="mx-3 text-amber-600 animate-pulse" size={16} />
            <div className="h-px w-24 bg-amber-700" />
          </div>
        </div>

        {/* Introduction Text - European Style */}
        <div className={`text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-serif text-slate-600 text-lg leading-relaxed italic">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara resepsi pernikahan kami.
          </p>
          <p className="font-sans text-slate-500 text-sm mt-4 tracking-wide">
            Kami dengan hormat mengundang Anda untuk merayakan kebahagiaan kami
          </p>
        </div>

        {/* Main Event Card - Luxury European Design */}
        <div className={`relative max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

          {/* Decorative Corner Ornaments */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-700 opacity-30" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-700 opacity-30" />

          {/* Main Card */}
          <div className="relative bg-white shadow-2xl rounded-none border border-slate-200 overflow-hidden">

            {/* Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />

            {/* Card Content */}
            <div className="p-10 md:p-12">

              {/* Date Section - Featured */}
              <div className="text-center mb-10 pb-8 border-b border-slate-200">
                <div className="inline-flex items-center justify-center mb-4">
                  <Calendar className="text-amber-700 mr-3" size={32} />
                  <h2 className="font-serif text-4xl text-slate-800 tracking-wide">
                        Monday
                  </h2>
                </div>
                <p className="font-serif text-5xl text-amber-800 mb-2">
                  08
                </p>
                <p className="font-sans text-slate-600 text-xl tracking-[0.3em] uppercase">
                  December 2025
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* Time Card */}
                <div
                  className={`group relative bg-gradient-to-br from-slate-50 to-stone-50 p-6 rounded-sm border border-slate-200
                             transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer
                             ${activeCard === 'time' ? 'ring-2 ring-amber-700 shadow-xl' : ''}`}
                  onMouseEnter={() => setActiveCard('time')}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Icon with European Style Circle */}
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-20" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-serif text-slate-800 text-xl tracking-wide">Time</h3>
                      <p className="font-sans text-amber-700 text-xs uppercase tracking-widest">Horaire</p>
                    </div>
                  </div>

                  {/* Time Details */}
                  <div className="pl-2 border-l-2 border-amber-700 ml-7">
                    <p className="font-serif text-3xl text-slate-800 mb-1">09:00</p>
                    <p className="font-sans text-slate-500 text-sm mb-2">Until</p>
                    <p className="font-serif text-3xl text-slate-800 mb-1">Selesai</p>
                    <p className="font-sans text-slate-400 text-xs uppercase tracking-wide mt-2">Western Indonesia Time</p>
                  </div>

                  {/* Hover Effect Decoration */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="text-amber-300" size={20} />
                  </div>
                </div>

                {/* Location Card */}
                <div
                  className={`group relative bg-gradient-to-br from-slate-50 to-stone-50 p-6 rounded-sm border border-slate-200
                             transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer
                             ${activeCard === 'location' ? 'ring-2 ring-amber-700 shadow-xl' : ''}`}
                  onMouseEnter={() => setActiveCard('location')}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Icon with European Style Circle */}
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-20" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-serif text-slate-800 text-xl tracking-wide">Venue</h3>
                      <p className="font-sans text-amber-700 text-xs uppercase tracking-widest">Lieu</p>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="pl-2 border-l-2 border-amber-700 ml-7">
                    <p className="font-serif text-xl text-slate-800 mb-2 leading-snug">
                     Rumah Kami
                    </p>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed">
                      Jl. Moris Rt 05 Rw 03, Kemulan Turen Malang, Jawa Timur
                    </p>

                  </div>

                  {/* Hover Effect Decoration */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="text-amber-300" size={20} />
                  </div>
                </div>

              </div>

              {/* Decorative Quote */}
              <div className="mt-10 pt-8 border-t border-slate-200 text-center">
                <p className="font-serif italic text-slate-500 text-sm">
                  "Où l'amour et le bonheur se rencontrent"
                </p>
                <p className="font-sans text-slate-400 text-xs mt-1">
                  Where love and happiness meet
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Button - European Luxury Style */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#/"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900
                     text-white font-sans font-medium px-10 py-4 rounded-sm shadow-xl
                     hover:shadow-2xl hover:scale-105 transition-all duration-300
                     border border-amber-900 relative overflow-hidden"
            onClick={(e) => e.preventDefault()}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20
                          transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000" />

            <Navigation className="relative z-10 group-hover:rotate-12 transition-transform duration-300" size={20} />
            <span className="relative z-10 tracking-wide uppercase text-sm">View Location Map</span>
          </a>

          <p className="font-sans text-slate-400 text-xs mt-4 tracking-wide">
            Navigate to venue • Naviguer vers le lieu
          </p>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center mt-16 opacity-30">
          <div className="h-px w-32 bg-amber-700" />
          <Diamond className="mx-4 text-amber-700" size={12} fill="currentColor" />
          <Diamond className="mx-2 text-amber-700" size={8} fill="currentColor" />
          <Diamond className="mx-4 text-amber-700" size={12} fill="currentColor" />
          <div className="h-px w-32 bg-amber-700" />
        </div>

      </div>

      {/* Ornamental Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />

      {/* Custom Styles for European Elegance */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
