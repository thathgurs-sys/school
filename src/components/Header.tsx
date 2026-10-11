import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, MapPin, Clock, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (programId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['hero', 'about', 'programs', 'why-us', 'gallery', 'parent-corner', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Parent Corner', href: '#parent-corner', id: 'parent-corner' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Announcement Strip */}
      <div className="bg-[#991B1B] text-amber-50 text-xs py-2 px-4 border-b border-[#7F1D1D] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-medium">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>+91 98765 43210</span>
            </a>
            <div className="flex items-center gap-1.5 text-amber-100/90">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>123, Green Park, New Delhi - 110016</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-amber-100/90">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Mon - Sat: 8:00 AM – 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-300/30">
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
              Admissions Open 2025-2026
            </span>
            <button 
              onClick={() => onOpenEnquiry()}
              className="hover:underline text-amber-200 hover:text-white transition-colors ml-1 cursor-pointer font-semibold"
            >
              Apply Online &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm border-b border-[#F1ECE1]' 
            : 'bg-[#FFFDF9] border-b border-[#F5EFE6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Logo */}
          <a href="#hero" className="shrink-0 group py-1" onClick={(e) => handleNavClick(e, '#hero')}>
            <Logo className="transition-transform group-hover:scale-[1.01]" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-150 ${
                    isActive 
                      ? 'text-[#B91C1C] font-bold' 
                      : 'text-stone-600 hover:text-[#991B1B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B91C1C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold text-white bg-[#B91C1C] hover:bg-[#991B1B] active:bg-[#7F1D1D] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FFFDF9] border-b border-stone-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 text-base font-semibold border-b border-stone-100 ${
                    activeSection === link.id ? 'text-[#B91C1C]' : 'text-stone-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full text-center py-3 bg-[#B91C1C] text-white font-bold rounded-xl shadow cursor-pointer"
                >
                  Book a Campus Tour
                </button>
                <div className="text-xs text-stone-500 text-center pt-2">
                  <span>📞 Call Us: +91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
