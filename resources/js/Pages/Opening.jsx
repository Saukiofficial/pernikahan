import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

// Temporary: gunakan URL placeholder dulu
import preweddingImage from '@/../images/prewedding.jpg';

// Halaman ini otomatis menggunakan MainLayout
export default function Opening() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [sheerOpen, setSheerOpen] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(false);

  useEffect(() => {
    // Trigger sheer curtain first
    const sheerTimer = setTimeout(() => {
      setSheerOpen(true);
    }, 500);

    // Trigger velvet curtain
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 1500);

    // Trigger spotlight
    const spotlightTimer = setTimeout(() => {
      setSpotlightActive(true);
    }, 2500);

    // Trigger content animation setelah tirai buka
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => {
      clearTimeout(sheerTimer);
      clearTimeout(curtainTimer);
      clearTimeout(spotlightTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Generate realistic fabric folds
  const generateFolds = (count) => {
    return Array.from({ length: count }, (_, i) => i);
  };

  return (
    <>
      <Head title="Selamat Datang" />

      {/* Background dengan overlay */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image dengan overlay */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-transparent to-blue-100/40"></div>
        </div>

        {/* Spotlight Effect */}
        <div
          className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-1000 ${
            spotlightActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/40 via-yellow-100/20 to-transparent rounded-full blur-3xl animate-spotlight-pulse"></div>
        </div>

        {/* Curtain Container */}
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
          {/* Curtain Rod - Enhanced */}
          <div className="absolute top-0 left-0 right-0 h-12 z-50">
            {/* Main rod body */}
            <div className="absolute inset-x-0 top-2 h-3 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-800 shadow-2xl"></div>
            {/* Rod highlight */}
            <div className="absolute inset-x-0 top-2 h-1 bg-gradient-to-b from-yellow-200 to-transparent opacity-60"></div>
            {/* Rod rings/brackets every 100px */}
            <div className="absolute inset-x-0 top-0 flex justify-around items-center h-8">
              {generateFolds(15).map((i) => (
                <div key={i} className="w-3 h-6 bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-700 rounded-full shadow-lg"></div>
              ))}
            </div>
            {/* Decorative rod finials (ends) */}
            <div className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 rounded-full shadow-2xl border-2 border-yellow-300"></div>
            <div className="absolute -right-4 top-0 w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 rounded-full shadow-2xl border-2 border-yellow-300"></div>
          </div>

          {/* LAYER 1: SHEER/TRANSPARENT CURTAIN (Opens First) */}
          {/* Left Sheer Curtain */}
          <div
            className={`absolute top-12 left-0 w-1/2 h-full transition-all duration-[2000ms] ease-in-out z-45 ${
              sheerOpen ? '-translate-x-full opacity-20' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Sheer fabric with lace pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-pink-50/70 to-white/80 backdrop-blur-sm">
                {/* Lace pattern overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle, pink 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                {/* Delicate folds */}
                {generateFolds(8).map((i) => (
                  <div key={i} className="absolute inset-y-0 w-1/8" style={{ left: `${i * 12.5}%` }}>
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                ))}
              </div>
              {/* Light shadow on edge */}
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-pink-200/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Sheer Curtain */}
          <div
            className={`absolute top-12 right-0 w-1/2 h-full transition-all duration-[2000ms] ease-in-out z-45 ${
              sheerOpen ? 'translate-x-full opacity-20' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Sheer fabric with lace pattern */}
              <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-pink-50/70 to-white/80 backdrop-blur-sm">
                {/* Lace pattern overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle, pink 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                {/* Delicate folds */}
                {generateFolds(8).map((i) => (
                  <div key={i} className="absolute inset-y-0 w-1/8" style={{ left: `${i * 12.5}%` }}>
                    <div className="h-full w-full bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
                  </div>
                ))}
              </div>
              {/* Light shadow on edge */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-pink-200/30 to-transparent"></div>
            </div>
          </div>

          {/* LAYER 2: VELVET CURTAIN (Opens Second) */}
          {/* Left Curtain Panel with Realistic Folds */}
          <div
            className={`absolute top-12 left-0 w-1/2 h-full transition-all duration-[2500ms] ease-in-out z-44 ${
              curtainOpen ? '-translate-x-full opacity-30' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative w-full h-full flex">
              {/* Multiple fabric folds for realistic draping */}
              {generateFolds(12).map((i) => (
                <div key={i} className="flex-1 relative">
                  {/* Fold peak (lighter) */}
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400">
                    {/* Highlight on peak */}
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  {/* Fold valley (darker) */}
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600">
                    {/* Shadow in valley */}
                    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-black/30"></div>
                  </div>
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-black to-transparent"
                       style={{
                         backgroundSize: '100% 20px',
                         backgroundRepeat: 'repeat-y'
                       }}></div>
                </div>
              ))}

              {/* Overall shadow on right edge */}
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/40 via-black/20 to-transparent pointer-events-none"></div>

              {/* Velvet sheen effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

              {/* Tassel with rope - Enhanced */}
              <div className="absolute right-4 top-1/3 transform z-10">
                {/* Decorative tassel holder */}
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full shadow-xl mb-2"></div>
                {/* Braided rope */}
                <div className="relative w-5 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 rounded-full shadow-lg"></div>
                  {/* Rope twist effect */}
                  {generateFolds(8).map((i) => (
                    <div key={i}
                         className="absolute left-0 right-0 h-4 bg-gradient-to-r from-yellow-800/40 to-transparent rounded-full"
                         style={{ top: `${i * 18}px` }}></div>
                  ))}
                </div>
                {/* Tassel head */}
                <div className="w-8 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full mx-auto shadow-lg"></div>
                {/* Tassel fringe - more realistic */}
                <div className="flex justify-center gap-px mt-1">
                  {generateFolds(12).map((i) => (
                    <div key={i}
                         className="w-1 bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-800 rounded-full shadow"
                         style={{ height: `${40 + Math.random() * 20}px` }}></div>
                  ))}
                </div>
              </div>

              {/* Gold trim */}
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-700 shadow-lg"></div>
            </div>
          </div>

          {/* Right Curtain Panel with Realistic Folds */}
          <div
            className={`absolute top-12 right-0 w-1/2 h-full transition-all duration-[2500ms] ease-in-out ${
              curtainOpen ? 'translate-x-full opacity-30' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative w-full h-full flex">
              {/* Multiple fabric folds for realistic draping */}
              {generateFolds(12).map((i) => (
                <div key={i} className="flex-1 relative">
                  {/* Fold valley (darker) - reversed for right side */}
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-rose-400 via-rose-500 to-rose-600">
                    {/* Shadow in valley */}
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-black/30"></div>
                  </div>
                  {/* Fold peak (lighter) */}
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-rose-200 via-rose-300 to-rose-400">
                    {/* Highlight on peak */}
                    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/20 to-transparent"></div>
                  </div>
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-black to-transparent"
                       style={{
                         backgroundSize: '100% 20px',
                         backgroundRepeat: 'repeat-y'
                       }}></div>
                </div>
              ))}

              {/* Overall shadow on left edge */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/40 via-black/20 to-transparent pointer-events-none"></div>

              {/* Velvet sheen effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none"></div>

              {/* Tassel with rope - Enhanced */}
              <div className="absolute left-4 top-1/3 transform z-10">
                {/* Decorative tassel holder */}
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full shadow-xl mb-2"></div>
                {/* Braided rope */}
                <div className="relative w-5 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 rounded-full shadow-lg"></div>
                  {/* Rope twist effect */}
                  {generateFolds(8).map((i) => (
                    <div key={i}
                         className="absolute left-0 right-0 h-4 bg-gradient-to-r from-yellow-800/40 to-transparent rounded-full"
                         style={{ top: `${i * 18}px` }}></div>
                  ))}
                </div>
                {/* Tassel head */}
                <div className="w-8 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full mx-auto shadow-lg"></div>
                {/* Tassel fringe - more realistic */}
                <div className="flex justify-center gap-px mt-1">
                  {generateFolds(12).map((i) => (
                    <div key={i}
                         className="w-1 bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-800 rounded-full shadow"
                         style={{ height: `${40 + Math.random() * 20}px` }}></div>
                  ))}
                </div>
              </div>

              {/* Gold trim */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-700 shadow-lg"></div>
            </div>
          </div>
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
          <div className="text-4xl text-red-300 opacity-30">💝</div>
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
          <div className="text-6xl text-pink-400 opacity-30">💓</div>
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
              <span className="text-pink-400">❤</span>
              <span className="text-red-400">❤</span>
              <span className="text-pink-400">❤</span>
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

          @keyframes spotlight-pulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.8;
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

          .animate-spotlight-pulse {
            animation: spotlight-pulse 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}
