import React, { useState } from 'react';
import { Users, GraduationCap, Award, Heart, Check, Sparkles, BookOpen } from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'safety' | 'nutrition'>('philosophy');

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with two kids building together */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Background decorative blob */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-amber-100/60 rounded-[2.5rem] transform -rotate-2 scale-102 filter blur-xs -z-10" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-white group">
                <img
                  src="/src/assets/images/about_kids_playing_1791689493141.jpg"
                  alt="Two preschool kids happily collaborating on wooden Montessori blocks at Maatri Chhaya"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center transform transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Subtitle Bar Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Collaborative Play</div>
                    <div className="text-sm sm:text-base font-bold">Little Hands, Big Dreams</div>
                  </div>
                  <div className="bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Montessori Aligned
                  </div>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-[#B91C1C] flex items-center justify-center font-bold text-lg">
                  ❤️
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Affectionate Care</div>
                  <div className="text-[11px] text-stone-500">Every child treated like family</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Stats matching reference */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Header Lockup matching reference */}
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-stone-900 tracking-tight font-heading">
                <span>Welcome to </span>
                <span className="text-[#B91C1C]">Maatri Chhaya</span>
              </h2>
              {/* Heart and Leaf accent divider */}
              <div className="flex items-center gap-2 mt-2">
                <div className="h-0.5 w-8 bg-[#B91C1C]/40" />
                <span className="text-[#B91C1C] text-sm">♥</span>
                <span className="text-[#15803D] text-sm">🌿</span>
                <div className="h-0.5 w-16 bg-[#15803D]/40" />
              </div>
            </div>

            {/* Core Paragraph matching reference */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 font-normal">
              At <strong className="text-stone-800 font-semibold">Maatri Chhaya Preschool & Day Care</strong>, we believe every child is unique and capable of amazing things. Our preschool is designed to provide a warm, caring, and stimulating environment that encourages curiosity, creativity, and confidence.
            </p>

            {/* Stats Row matching reference exactly: Happy Kids (150+), Expert Teachers (15+), Years of Trust (10+) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full py-6 my-2 border-y border-stone-200/80">
              
              {/* Stat 1: Happy Kids */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center text-[#B91C1C] mb-2 shadow-xs">
                  <Users className="w-5 h-5 fill-[#B91C1C]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-600 mb-0.5">
                  Happy Kids
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B91C1C] tabular-nums font-heading">
                  150+
                </div>
              </div>

              {/* Stat 2: Expert Teachers */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-[#15803D] mb-2 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-[#15803D]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-600 mb-0.5">
                  Expert Teachers
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#15803D] tabular-nums font-heading">
                  15+
                </div>
              </div>

              {/* Stat 3: Years of Trust */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-[#D97706] mb-2 shadow-xs">
                  <Award className="w-5 h-5 text-[#D97706] fill-[#D97706]/30" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-600 mb-0.5">
                  Years of Trust
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D97706] tabular-nums font-heading">
                  10+
                </div>
              </div>

            </div>

            {/* Interactive Tab Switcher for deeper philosophy exploration */}
            <div className="w-full mt-6">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <button
                  onClick={() => setActiveTab('philosophy')}
                  className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'philosophy' ? 'text-[#B91C1C]' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Child-Centric Vision
                  {activeTab === 'philosophy' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B91C1C]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('safety')}
                  className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer ml-4 ${
                    activeTab === 'safety' ? 'text-[#B91C1C]' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Safety & Hygiene
                  {activeTab === 'safety' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B91C1C]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer ml-4 ${
                    activeTab === 'nutrition' ? 'text-[#B91C1C]' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Meals & Care
                  {activeTab === 'nutrition' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B91C1C]" />
                  )}
                </button>
              </div>

              <div className="pt-4 text-xs sm:text-sm text-stone-600 leading-relaxed min-h-[75px]">
                {activeTab === 'philosophy' && (
                  <p>
                    Rooted in Indian values with global early childhood frameworks. We do not rush children to memorize; instead, we spark innate joy, creative problem solving, and social empathy through tactile play.
                  </p>
                )}
                {activeTab === 'safety' && (
                  <p>
                    Round-the-clock secured premise, biometric entry, finger-pinch protection on doors, full CCTV coverage accessible to parents, and complete pediatric medical emergency protocols on site.
                  </p>
                )}
                {activeTab === 'nutrition' && (
                  <p>
                    Freshly cooked organic warm meals designed with child nutritionists. We accommodate dietary allergies, encourage independent eating habits, and cultivate healthy appreciation for food.
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full text-white bg-[#B91C1C] hover:bg-[#991B1B] text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Schedule a Campus Visit
              </button>
              <a
                href="#programs"
                className="px-5 py-3 rounded-full text-stone-700 hover:text-[#991B1B] bg-white border border-stone-200 text-sm font-semibold hover:bg-stone-50 transition-colors"
              >
                View Daily Schedule &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
