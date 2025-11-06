import React, { useState, useEffect } from 'react';

export default function Salam() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-stone-100 to-neutral-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-delay-2"></div>
      </div>

      {/* Ornamental Lines */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 delay-300 ${isVisible ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

      {/* Main Content Card */}
      <div className={`relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Decorative Top Border */}
        <div className={`flex justify-center mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-600"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-600"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rotate-45 bg-amber-500"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-600"></div>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
        </div>

        {/* Card */}
        <div className={`bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-stone-200/50 overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-rose-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-b border-stone-200/50">
            <div className="text-center">
              {/* Decorative Element */}
              <div className={`flex justify-center mb-4 sm:mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`}>
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 8.5L3 9.5L7.5 14L6.5 20.5L12 17L17.5 20.5L16.5 14L21 9.5L14.5 8.5L12 2Z" />
                </svg>
              </div>

              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-2 tracking-wide transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Assalamu'alaikum
              </h1>
              <p className={`text-lg sm:text-xl text-stone-600 font-light tracking-widest transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wr. Wb.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">

            {/* Quote Mark */}
            <div className={`flex justify-center mb-4 sm:mb-6 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* First Paragraph */}
            <div className={`mb-6 sm:mb-8 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-center font-light" style={{ fontFamily: "'Crimson Text', serif" }}>
                Semoga dengan rahmat dan karunia Allah SWT, kita semua selalu dalam lindungan-Nya serta diberikan kesehatan dan kebahagiaan.
              </p>
            </div>

            {/* Divider */}
            <div className={`flex justify-center my-6 sm:my-8 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
              </div>
            </div>

            {/* Second Paragraph */}
            <div className={`transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed text-center font-light" style={{ fontFamily: "'Crimson Text', serif" }}>
                Kami mengundang Bapak/Ibu/Saudara/i untuk memberikan doa restu kepada kami dalam menjalani kehidupan rumah tangga yang <span className="italic text-amber-700 font-medium">sakinah, mawaddah, warahmah</span>.
              </p>
            </div>

            {/* Quote Mark Bottom */}
            <div className={`flex justify-center mt-4 sm:mt-6 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 opacity-50 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

          </div>

          {/* Bottom Decorative Bar */}
          <div className={`h-2 bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        {/* Decorative Bottom Border */}
        <div className={`flex justify-center mt-6 sm:mt-8 transition-all duration-700 delay-1400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-600"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-600"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rotate-45 bg-amber-500"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-amber-600"></div>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
        </div>

      </div>

      {/* Floating Decorative Elements */}
      <div className={`absolute top-1/4 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 border-2 border-amber-400 rotate-45 animate-float-1 transition-opacity duration-1000 delay-1500 ${isVisible ? 'opacity-40' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-1/3 right-8 sm:right-16 w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-rose-400 rotate-45 animate-float-2 transition-opacity duration-1000 delay-1600 ${isVisible ? 'opacity-40' : 'opacity-0'}`}></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }

        .animate-pulse-delay-1 {
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 0.7s;
        }

        .animate-pulse-delay-2 {
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 1.4s;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
