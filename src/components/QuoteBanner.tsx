import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quote Container matching reference */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#FFF8EE] via-[#FFFDF9] to-[#FFF5ED] border border-[#F5E6D3] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Cute Teddy Bear & ABC blocks motif matching reference */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative flex items-center justify-center p-4">
                {/* SVG Teddy Bear with Blocks and Little Flowers */}
                <div className="w-40 sm:w-48 h-40 sm:h-48 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Soft glowing sun aura */}
                    <circle cx="100" cy="100" r="85" fill="#FEF3C7" opacity="0.6" />
                    
                    {/* Little decorative plant leaves on sides */}
                    <path d="M25 150C35 130 45 135 50 145C45 155 35 155 25 150Z" fill="#15803D" opacity="0.8" />
                    <path d="M175 150C165 130 155 135 150 145C155 155 165 155 175 150Z" fill="#15803D" opacity="0.8" />

                    {/* Teddy Bear Body */}
                    <circle cx="100" cy="118" r="44" fill="#D97706" />
                    <circle cx="100" cy="120" r="30" fill="#FDE68A" />
                    
                    {/* Teddy Bear Head */}
                    <circle cx="100" cy="68" r="34" fill="#D97706" />
                    
                    {/* Teddy Bear Ears */}
                    <circle cx="72" cy="46" r="14" fill="#D97706" />
                    <circle cx="72" cy="46" r="8" fill="#FDE68A" />
                    <circle cx="128" cy="46" r="14" fill="#D97706" />
                    <circle cx="128" cy="46" r="8" fill="#FDE68A" />

                    {/* Teddy Muzzle & Nose */}
                    <ellipse cx="100" cy="74" rx="16" ry="12" fill="#FEF3C7" />
                    <ellipse cx="100" cy="69" rx="6" ry="4" fill="#78350F" />
                    <path d="M100 73V79M96 79C98 81 102 81 104 79" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />

                    {/* Eyes with cheerful spark */}
                    <circle cx="89" cy="62" r="3.5" fill="#451A03" />
                    <circle cx="88" cy="61" r="1.2" fill="#FFFFFF" />
                    <circle cx="111" cy="62" r="3.5" fill="#451A03" />
                    <circle cx="110" cy="61" r="1.2" fill="#FFFFFF" />

                    {/* Cheeks */}
                    <circle cx="82" cy="71" r="4.5" fill="#FCA5A5" opacity="0.6" />
                    <circle cx="118" cy="71" r="4.5" fill="#FCA5A5" opacity="0.6" />

                    {/* Cute Red Heart Bowtie */}
                    <path d="M100 95L90 89C86 86 86 92 90 95L100 95L110 95C114 92 114 86 110 89L100 95Z" fill="#B91C1C" />
                    <circle cx="100" cy="94" r="3" fill="#991B1B" />

                    {/* Toy Blocks in Front */}
                    {/* Left Block */}
                    <rect x="42" y="142" width="28" height="28" rx="5" fill="#EF4444" />
                    <text x="56" y="162" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">A</text>

                    {/* Center Block */}
                    <rect x="76" y="144" width="28" height="28" rx="5" fill="#10B981" />
                    <text x="90" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">B</text>

                    {/* Right Block */}
                    <rect x="110" y="140" width="28" height="28" rx="5" fill="#3B82F6" />
                    <text x="124" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">C</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center Column: The Inspirational Quote matching reference */}
            <div className="md:col-span-6 text-center px-2 sm:px-4">
              <span className="text-4xl sm:text-5xl font-serif text-amber-500/60 leading-none select-none block mb-1">
                “
              </span>
              
              <blockquote className="text-xl sm:text-2xl md:text-[1.65rem] font-medium text-stone-800 tracking-tight leading-snug font-heading italic">
                Every Child is a Different Kind of Flower, And All Together, Make This World a Beautiful Garden.
              </blockquote>

              {/* Red Heart Accent Motif below Quote */}
              <div className="flex items-center justify-center gap-2 mt-4 text-[#B91C1C]">
                <div className="h-0.5 w-8 bg-[#B91C1C]/30" />
                <Heart className="w-5 h-5 fill-[#B91C1C]" />
                <div className="h-0.5 w-8 bg-[#B91C1C]/30" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-2">
                Maatri Chhaya Core Belief
              </p>
            </div>

            {/* Right Column: Kid with Colorful Painted Palms matching reference */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 bg-amber-200/50 rounded-full blur-md transform scale-95 group-hover:scale-105 transition-transform" />
                
                {/* Circular Photo matching reference badge */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl bg-amber-50">
                  <img
                    src="/src/assets/images/kid_handprint_art_1791689503843.jpg"
                    alt="Happy preschool kid with colorful painted hands smiling"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Little Floating Star Tag */}
                <div className="absolute bottom-1 -left-2 bg-white px-2.5 py-1 rounded-full shadow-md border border-stone-200 text-[11px] font-bold text-[#B91C1C] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Joy of Art</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
