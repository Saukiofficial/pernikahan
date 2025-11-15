import React, { useState, useEffect } from 'react';
import { Map, MapPin, Navigation, Clock, Calendar } from 'lucide-react';

export default function Maps() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('map');

  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.8193406707546!2d112.65163647500948!3d-8.220915691811642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTMnMTUuMyJTIDExMsKwMzknMTUuMiJF!5e0!3m2!1sen!2sid!4v1762267018188!5m2!1sen!2sid";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const venueDetails = [
    { icon: MapPin, label: 'Alamat', value: '8°13\'15.3"S 112°39\'15.2"E', color: 'text-rose-600' },
    { icon: Clock, label: 'Waktu', value: '08:00 WIB - Selesai', color: 'text-amber-600' },
    { icon: Calendar, label: 'Tanggal', value: '08 Desember 2025', color: 'text-emerald-600' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 blur-2xl opacity-30 animate-pulse"></div>
            <h1 className="relative font-serif text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700 bg-clip-text text-transparent mb-2">
              Lokasi Acara
            </h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              Kami dengan penuh sukacita mengundang Anda untuk berbagi kebahagiaan di hari istimewa kami
            </p>
            <div className="flex items-center justify-center gap-2 text-rose-600">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <MapPin className="w-5 h-5" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Venue Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {venueDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`${detail.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  {detail.label}
                </h3>
                <p className="text-slate-700 font-medium">
                  {detail.value}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-amber-500/0 group-hover:from-rose-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/70 backdrop-blur-xl rounded-full p-1.5 shadow-lg border border-white/50">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'map'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Peta
            </button>
            <button
              onClick={() => setActiveTab('directions')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'directions'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Panduan
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-amber-400 rounded-3xl blur-2xl opacity-20 -z-10"></div>

          {activeTab === 'map' ? (
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform transition-all duration-500 hover:shadow-rose-200/50">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-rose-400 rounded-tl-3xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-400 rounded-br-3xl opacity-50"></div>

              <div className="p-2 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden shadow-inner" style={{ height: '500px' }}>
                  <iframe
                    src={embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Pernikahan"
                    className="transition-all duration-500 hover:scale-105"
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Navigation className="w-6 h-6 text-rose-600" />
                Cara Menuju Lokasi
              </h3>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  📍 Gunakan Google Maps untuk navigasi tercepat dan termudah
                </p>
                <p className="leading-relaxed">
                  🚗 Area parkir tersedia untuk tamu undangan
                </p>
                <p className="leading-relaxed">
                  🏛️ Lokasi mudah diakses dari jalan utama
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://maps.app.goo.gl/97WPsYrTSpPptVAbA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-rose-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Map className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Buka di Google Maps</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
          </a>
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-16 gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .font-serif {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
