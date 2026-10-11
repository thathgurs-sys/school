import React from 'react';
import { Logo } from './Logo.tsx';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F0] border-t border-[#EFE8DA] text-stone-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-200">
          
          {/* Col 1: About Us (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-stone-900 mb-4 font-heading">
              About Us
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
              Maatri Chhaya Preschool &amp; Day Care is a nurturing space where children learn through play, explore their potential, and grow with love and care.
            </p>

            {/* Social Links matching reference icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#hero" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-[#B91C1C] hover:text-white flex items-center justify-center text-stone-700 transition-colors text-xs font-bold"
              >
                f
              </a>
              <a 
                href="#hero" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-[#B91C1C] hover:text-white flex items-center justify-center text-stone-700 transition-colors text-xs font-bold"
              >
                ig
              </a>
              <a 
                href="#hero" 
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-[#B91C1C] hover:text-white flex items-center justify-center text-stone-700 transition-colors text-xs font-bold"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-stone-900 mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-stone-600">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Parent Corner (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-stone-900 mb-4 font-heading">
              Parent Corner
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-stone-600">
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('parent-corner')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Daily Schedule
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Nutrition
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('parent-corner')} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-[#B91C1C] transition-colors cursor-pointer">
                  Fee Structure
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Brand Lockup matching reference (span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-stone-900 mb-4 font-heading">
                Contact Us
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                  <span>123, Green Park, New Delhi, India - 110016</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#B91C1C] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <a href="mailto:info@maatrichhaya.com" className="hover:text-[#B91C1C] transition-colors">
                    info@maatrichhaya.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Brand Logo in the footer matching reference layout */}
            <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-start">
              <Logo />
            </div>
          </div>

        </div>

        {/* Bottom Bar matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© 2025–2026 Maatri Chhaya Preschool &amp; Day Care. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-stone-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B91C1C] fill-[#B91C1C]" />
            <span>for little explorers and happy families</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
