import React, { useState, useEffect } from 'react';
import { Quote, Heart, Sparkles } from 'lucide-react';

export default function QuotesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50 flex items-center justify-center">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Floating Ornaments */}
      <div className="absolute top-1/4 left-10 opacity-10">
        <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10">
        <Sparkles className="w-8 h-8 text-rose-600 animate-pulse" />
      </div>

      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Main Quote Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-rose-400 to-amber-400 rounded-3xl blur-3xl opacity-20"></div>

          {/* Card Container */}
          <div className="relative bg-white bg-opacity-70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white border-opacity-50 overflow-hidden">
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500"></div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-purple-300 rounded-tl-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-300 rounded-br-3xl opacity-30"></div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-rose-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-purple-500 to-rose-500 rounded-full p-4 shadow-xl">
                    <Quote className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Opening Quote Mark */}
              <div className="relative mb-6">
                <span className="absolute -top-4 -left-2 text-8xl font-serif text-purple-200 opacity-50">"</span>
              </div>

              {/* Quote Text */}
              <blockquote className="relative text-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-700 leading-relaxed mb-6 italic">
                  Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-bold text-transparent bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text">
                      rasa kasih dan sayang
                    </span>
                    <Heart className="absolute -top-1 -right-6 w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" />
                  </span>
                  . Sesunggahnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
                </p>
              </blockquote>

              {/* Closing Quote Mark */}
              <div className="relative mb-6 flex justify-end">
                <span className="text-8xl font-serif text-rose-200 opacity-50">"</span>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 my-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-rose-500"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              </div>

              {/* Reference */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-br from-purple-100 to-rose-100 rounded-2xl px-8 py-4 shadow-lg border border-purple-200 border-opacity-50">
                  <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-700 to-rose-700 bg-clip-text text-transparent">
                    Q.S. Ar-Rum: 21
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="flex justify-center mt-8 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Bottom Decorative Border */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500"></div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="mt-12 flex justify-center gap-8 opacity-30">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
