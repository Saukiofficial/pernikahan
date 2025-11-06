import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Import semua gambar dari folder resources/images/Gallery
import gallery1 from '../../images/Gallery/1.jpg';
import gallery2 from '../../images/Gallery/2.jpg';
import gallery3 from '../../images/Gallery/3.jpg';
import gallery4 from '../../images/Gallery/4.jpg';
import gallery5 from '../../images/Gallery/5.jpg';
import gallery6 from '../../images/Gallery/6.jpg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  const galleryImages = [
    { src: gallery1, alt: 'Gallery Photo 1' },
    { src: gallery2, alt: 'Gallery Photo 2' },
    { src: gallery3, alt: 'Gallery Photo 3' },
    { src: gallery4, alt: 'Gallery Photo 4' },
    { src: gallery5, alt: 'Gallery Photo 5' },
    { src: gallery6, alt: 'Gallery Photo 6' },
  ];

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen p-4 sm:p-8 pt-20 pb-32 relative">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>

      {/* Ornamental corners */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
          <path d="M0,0 Q50,50 0,100 L0,0 M0,0 Q50,50 100,0 L0,0" fill="currentColor"/>
        </svg>
      </div>
      <div className="fixed top-0 right-0 w-32 h-32 opacity-10 pointer-events-none rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
          <path d="M0,0 Q50,50 0,100 L0,0 M0,0 Q50,50 100,0 L0,0" fill="currentColor"/>
        </svg>
      </div>

      <div className="text-center mb-16 relative">
        {/* Decorative line top */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="mx-4">
            <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L15,8.5L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L9,8.5L12,2Z"/>
            </svg>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>

        <h2
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-amber-900 mb-4 tracking-wide"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 4px rgba(180,83,9,0.1)'
          }}
        >
          Our Gallery
        </h2>

        <p className="text-amber-800 italic text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto">
          "Momen-momen indah yang abadi dalam kenangan"
        </p>

        {/* Decorative line bottom */}
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      {/* Gallery Grid with Staggered Animation */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
            }}
            onClick={() => openLightbox(index)}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded[index] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/400x400/ffc0cb/ffffff?text=Foto+${index + 1}`;
              }}
            />

            {/* Ornamental Frame Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-2 border-2 border-amber-200/50"></div>
              <div className="absolute inset-4 border border-amber-100/30"></div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <div className="flex items-center gap-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <ZoomIn className="w-5 h-5" />
                <span className="text-sm font-light tracking-widest">VIEW</span>
              </div>
            </div>

            {/* Loading Skeleton */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
            isLightboxOpen ? 'bg-opacity-95' : 'bg-opacity-0'
          }`}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white font-light tracking-wider">
              {selectedImage + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Ornamental Frame */}
              <div className="absolute -inset-4 border-2 border-amber-400/30 pointer-events-none"></div>
              <div className="absolute -inset-8 border border-amber-300/20 pointer-events-none"></div>

              {/* Main Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl animate-fadeIn"
                style={{
                  animation: 'scaleIn 0.4s ease-out'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x800/ffc0cb/ffffff?text=Foto+${selectedImage + 1}`;
                }}
              />
            </div>

            {/* Image Caption */}
            <div className="mt-6 text-center">
              <p className="text-white/80 italic font-light tracking-wide">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm max-w-full overflow-x-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-16 h-16 rounded overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  selectedImage === index
                    ? 'ring-2 ring-amber-400 scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/100x100/ffc0cb/ffffff?text=${index + 1}`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
