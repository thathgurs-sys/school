import React from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Video, Users, Apple } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (programId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#FFFDF9]">
      {/* Subtle organic decorative backdrop elements */}
      <div className="absolute top-10 left-[-40px] w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[-60px] w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline Kicker matching reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F2] border border-[#FECDD3] text-[#9F1239] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="text-[#E11D48] text-sm">♥</span>
              <span>Where Learning Begins with Love</span>
              <span className="text-[#E11D48] text-sm">♥</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#1F2937] leading-[1.18] mb-5 font-heading">
              <span className="text-[#B91C1C]">Nurturing Little Hearts,</span>
              <br className="hidden sm:inline" />
              <span className="text-stone-900"> Shaping Bright Futures</span>
              <span className="inline-block ml-2 text-2xl sm:text-3xl animate-bounce">🌿</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              A safe, joyful, and nurturing environment where children learn, grow, and shine every day through play-way Montessori discovery.
            </p>

            {/* Action Buttons matching reference */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-[#B91C1C] hover:bg-[#991B1B] active:bg-[#7F1D1D] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-stone-700 hover:text-[#991B1B] bg-white hover:bg-stone-50 border border-stone-300 rounded-full shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <span className="text-[#15803D]">🌿</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-6 border-t border-stone-200/80 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-stone-600 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>100% Child-Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 shrink-0">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <span>Live CCTV App</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span>1:8 Teacher Ratio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Apple className="w-3.5 h-3.5" />
                  </div>
                  <span>Fresh Hot Meals</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo matching reference */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Decorative gentle frame backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200/50 via-rose-100/50 to-emerald-100/50 rounded-[2.5rem] transform -rotate-1 scale-102 filter blur-xs" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/src/assets/images/hero_preschool_girl_1791689477807.jpg"
                  alt="Little girl joyfully learning with Montessori wooden blocks at Maatri Chhaya Preschool"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Photo Gradient for contrast & badge */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between">
                  <div className="text-white">
                    <p className="text-xs font-medium tracking-wide uppercase text-amber-200">Play-Way Learning</p>
                    <p className="text-sm sm:text-base font-bold">Joyful Stacking & Discovery</p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm text-stone-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Ages 1.5 – 6 Yrs</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white rounded-2xl p-3 shadow-xl border border-stone-100 flex items-center gap-3 animate-pulse duration-1000 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#B91C1C] shrink-0">
                  <Heart className="w-5 h-5 fill-[#B91C1C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Nurtured with Love</div>
                  <div className="text-[11px] text-stone-500">Every Single Child</div>
                </div>
              </div>

              {/* Floating Badge (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl p-3 shadow-xl border border-stone-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">4.9 / 5 Rating</div>
                  <div className="text-[11px] text-stone-500">Loved by 200+ Parents</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
