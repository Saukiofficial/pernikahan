import React, { useRef, useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import {
  Home,         // Opening
  MessageSquare, // Salam
  User,         // Groom
  Heart,        // Bride
  Calendar,     // Akad
  Diamond,      // Resepsi
  MapPin,       // Maps
  CalendarCheck,// Rsvp
  Gift,         // Gift
  BookOpen,     // LoveStory
  Quote,        // Quotes
  Image,        // Gallery
  ThumbsUp      // Tanks
} from 'lucide-react';

/**
 * NavLink (Internal Component) dengan Animasi
 */
const NavLink = ({ href, active, icon: Icon, label, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);

    // Trigger haptic feedback di mobile (jika didukung)
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }

    // Smooth scroll to top sebelum navigasi
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate setelah animasi
    setTimeout(() => {
      router.visit(href, {
        preserveScroll: false,
        preserveState: true,
      });
      setIsClicked(false);
    }, 200);

    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex flex-col items-center justify-center p-3 text-center
        min-w-[70px] flex-shrink-0 transition-all duration-300 ease-out
        ${active
          ? 'text-blue-600'
          : 'text-gray-500 hover:text-gray-800'
        }
        ${isClicked ? 'scale-90' : 'scale-100'}
      `}
    >
      {/* Background indicator untuk active state */}
      <div
        className={`
          absolute inset-0 rounded-2xl transition-all duration-300
          ${active
            ? 'bg-blue-50 scale-100 opacity-100'
            : 'bg-transparent scale-95 opacity-0'
          }
        `}
      />

      {/* Icon dengan animasi */}
      <div className="relative z-10">
        <div
          className={`
            transition-all duration-300 transform
            ${active ? 'scale-110' : 'scale-100'}
            ${isClicked ? 'scale-75' : ''}
          `}
        >
          <Icon
            size={24}
            className={`
              mb-1 transition-all duration-300
              ${active ? 'stroke-[2.5]' : 'stroke-2'}
            `}
          />
        </div>

        {/* Ripple effect saat diklik */}
        {isClicked && (
          <div className="absolute inset-0 -m-2">
            <div className="w-full h-full rounded-full bg-blue-400 animate-ping opacity-30" />
          </div>
        )}
      </div>

      {/* Label dengan animasi */}
      <span
        className={`
          relative z-10 text-[10px] font-medium transition-all duration-300
          ${active ? 'font-semibold' : 'font-normal'}
        `}
      >
        {label}
      </span>

      {/* Active indicator dot */}
      {active && (
        <div className="absolute bottom-1 w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
      )}
    </button>
  );
};

/**
 * Komponen Utama BottomNavbar dengan Animasi
 */
export default function BottomNavbar() {
  const { url } = usePage();
  const scrollContainerRef = useRef(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  // Navigation items
  const navItems = [
    { href: '/opening', icon: Home, label: 'Opening' },
    { href: '/salam', icon: MessageSquare, label: 'Salam' },
    { href: '/groom', icon: User, label: 'Groom' },
    { href: '/bride', icon: Heart, label: 'Bride' },
    { href: '/akad', icon: Calendar, label: 'Akad' },
    { href: '/resepsi', icon: Diamond, label: 'Resepsi' },
    { href: '/maps', icon: MapPin, label: 'Maps' },
    { href: '/rsvp', icon: CalendarCheck, label: 'Rsvp' },
    { href: '/gift', icon: Gift, label: 'Gift' },
    { href: '/lovestory', icon: BookOpen, label: 'Story' },
    { href: '/quotes', icon: Quote, label: 'Quotes' },
    { href: '/gallery', icon: Image, label: 'Gallery' },
    { href: '/tanks', icon: ThumbsUp, label: 'Tanks' },
  ];

  // Handle scroll untuk gradient indicators
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setShowLeftGradient(scrollLeft > 10);
    setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Auto-scroll ke item aktif saat pertama load
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.href === url);
    if (activeIndex !== -1 && scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[0].children[activeIndex];
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [url]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg shadow-[0_-2px_20px_rgba(0,0,0,0.08)] border-t border-gray-200/50">
      {/* Container dengan gradient indicators */}
      <div className="relative max-w-lg mx-auto">

        {/* Left gradient indicator */}
        <div
          className={`
            absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none
            bg-gradient-to-r from-white/80 to-transparent
            transition-opacity duration-300
            ${showLeftGradient ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Right gradient indicator */}
        <div
          className={`
            absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none
            bg-gradient-to-l from-white/80 to-transparent
            transition-opacity duration-300
            ${showRightGradient ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Navigation items */}
          <div className="flex flex-nowrap min-w-max px-2 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={url === item.href}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent line untuk active state */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50" />
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
