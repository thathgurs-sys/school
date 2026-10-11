import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-14", 
  showTagline = true,
  variant = 'light' 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Brand Icon Mark matching reference */}
      <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle warm glow background */}
          <circle cx="50" cy="50" r="46" fill="#FFF5EB" stroke="#FED7AA" strokeWidth="1.5" />
          
          {/* Mother & Child Heart Outline in Rich Crimson */}
          <path 
            d="M50 82C50 82 20 62 20 40C20 28 29 20 40 20C45 20 48 23 50 26C52 23 55 20 60 20C71 20 80 28 80 40C80 62 50 82 50 82Z" 
            fill="#B91C1C" 
            opacity="0.12"
          />
          <path 
            d="M50 80C50 80 22 60 22 40C22 29 30 22 40 22C45.5 22 48.5 25 50 27.5C51.5 25 54.5 22 60 22C70 22 78 29 78 40C78 60 50 80 50 80Z" 
            stroke="#B91C1C" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Mother Silhouette Profile (Embracing) */}
          <path 
            d="M38 34C41 34 43 31.8 43 29C43 26.2 41 24 38 24C35 24 33 26.2 33 29C33 31.8 35 34 38 34Z" 
            fill="#B91C1C" 
          />
          <path 
            d="M34 40C37 38 41 38 44 41C48 45 49 52 46 62C44 68 40 70 38 70C36 70 34 65 34 58C34 51 32 46 30 44C29 43 31 42 34 40Z" 
            fill="#B91C1C" 
          />

          {/* Child Silhouette Profile (Being Nurtured) */}
          <path 
            d="M56 46C58.5 46 60.5 44 60.5 41.5C60.5 39 58.5 37 56 37C53.5 37 51.5 39 51.5 41.5C51.5 44 53.5 46 56 46Z" 
            fill="#B91C1C" 
          />
          <path 
            d="M53 50C56 49 59 50 61 53C63 56 63 62 61 66C59 69 57 70 55 69C54 68 53 64 53 60C53 56 51 52 49 51C50 50.5 51.5 50.2 53 50Z" 
            fill="#B91C1C" 
          />

          {/* Green Sprouting Leaves (Bottom Left & Right) */}
          <path 
            d="M20 72C24 68 30 68 33 71C30 74 25 75 20 72Z" 
            fill="#15803D" 
          />
          <path 
            d="M80 72C76 68 70 68 67 71C70 74 75 75 80 72Z" 
            fill="#15803D" 
          />
          <circle cx="21" cy="71" r="2" fill="#15803D" />
          <circle cx="79" cy="71" r="2" fill="#15803D" />
        </svg>
      </div>

      {/* Typography Brand Block */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl sm:text-2xl font-bold tracking-tight font-brand ${
            variant === 'footer' ? 'text-white' : 'text-[#991B1B]'
          }`}>
            MAATRI CHHAYÂ
          </span>
          <span className="text-[#15803D] text-sm transform -rotate-12 select-none">🌱</span>
        </div>
        
        {/* Subtitle Line */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="h-[1px] w-3 bg-[#B91C1C]/40"></div>
          <span className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase ${
            variant === 'footer' ? 'text-amber-200/90' : 'text-[#475569]'
          }`}>
            Preschool & Day Care
          </span>
          <div className="h-[1px] w-3 bg-[#B91C1C]/40"></div>
        </div>

        {showTagline && (
          <div className={`text-[9px] sm:text-[10px] font-medium tracking-tight mt-0.5 flex items-center gap-1 ${
            variant === 'footer' ? 'text-amber-100/70' : 'text-[#991B1B]/80'
          }`}>
            <span>♥</span>
            <span>Nurturing Little Hearts, Shaping Bright Futures</span>
            <span>♥</span>
          </div>
        )}
      </div>
    </div>
  );
};
