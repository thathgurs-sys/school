import React, { useState } from 'react';
import { PILLARS_DATA } from '../data/preschoolData.ts';
import { Heart, Sprout, Star, Blocks, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const Pillars: React.FC = () => {
  const [activeModalPillar, setActiveModalPillar] = useState<typeof PILLARS_DATA[0] | null>(null);

  const getIcon = (type: string, accent: string) => {
    switch (type) {
      case 'heart':
        return <Heart className="w-7 h-7" style={{ color: accent, fill: `${accent}20` }} />;
      case 'sprout':
        return <Sprout className="w-7 h-7" style={{ color: accent }} />;
      case 'star':
        return <Star className="w-7 h-7" style={{ color: accent, fill: `${accent}30` }} />;
      case 'blocks':
        return <Blocks className="w-7 h-7" style={{ color: accent }} />;
      default:
        return <Heart className="w-7 h-7" style={{ color: accent }} />;
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid with 4 Pillars matching reference exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setActiveModalPillar(pillar)}
              className="group relative rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col items-center justify-between border"
              style={{
                backgroundColor: pillar.bg,
                borderColor: pillar.border,
              }}
            >
              {/* Top Accent line */}
              <div 
                className="w-10 h-1 rounded-full mb-4 opacity-70 group-hover:w-16 transition-all duration-300"
                style={{ backgroundColor: pillar.accent }}
              />

              {/* Icon Container with subtle ring */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-xs transition-transform duration-300 group-hover:scale-110 bg-white"
                style={{ borderColor: pillar.border, borderWidth: '1px' }}
              >
                {getIcon(pillar.iconType, pillar.accent)}
              </div>

              {/* Title matching reference */}
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 font-heading leading-snug">
                {pillar.title}
              </h3>

              {/* Body Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {pillar.desc}
              </p>

              {/* Bottom Interactive Trigger */}
              <div 
                className="inline-flex items-center gap-1 text-xs font-bold transition-all duration-200 mt-auto pt-2"
                style={{ color: pillar.accent }}
              >
                <span>Read Details</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pillar Details Modal */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border relative animate-in zoom-in-95 duration-200"
            style={{ borderColor: activeModalPillar.border }}
          >
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-stone-50"
                style={{ borderColor: activeModalPillar.border, borderWidth: 1 }}
              >
                {getIcon(activeModalPillar.iconType, activeModalPillar.accent)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-heading">
                  {activeModalPillar.title}
                </h3>
                <p className="text-xs font-semibold" style={{ color: activeModalPillar.accent }}>
                  Maatri Chhaya Core Pillar
                </p>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-5">
              {activeModalPillar.details}
            </p>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 mb-6 space-y-2 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Strict hygiene checklist executed every 3 hours with non-toxic sanitizers.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Transparent parent communication with daily activity logs.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero harsh disciplinary actions — positive reinforcement only.</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalPillar(null)}
              className="w-full py-3 rounded-xl text-white font-bold text-sm shadow cursor-pointer transition-opacity hover:opacity-95"
              style={{ backgroundColor: activeModalPillar.accent }}
            >
              Got It, Thanks!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
