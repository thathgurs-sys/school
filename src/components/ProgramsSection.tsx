import React, { useState } from 'react';
import { PROGRAMS_DATA, ProgramInfo } from '../data/preschoolData.ts';
import { ArrowRight, Sparkles, Check, Calendar, Clock, Calculator, HelpCircle } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramInfo) => void;
  onOpenEnquiry: (programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ 
  onSelectProgram, 
  onOpenEnquiry 
}) => {
  // Age Eligibility calculator state
  const [childAgeYears, setChildAgeYears] = useState<number>(2);
  const [childAgeMonths, setChildAgeMonths] = useState<number>(6);

  // Compute calculated program
  const totalMonths = childAgeYears * 12 + childAgeMonths;
  let recommendedProgramId = 'playgroup';
  if (totalMonths < 18) {
    recommendedProgramId = 'daycare';
  } else if (totalMonths >= 18 && totalMonths < 30) {
    recommendedProgramId = 'playgroup';
  } else if (totalMonths >= 30 && totalMonths < 42) {
    recommendedProgramId = 'nursery';
  } else if (totalMonths >= 42 && totalMonths <= 70) {
    recommendedProgramId = 'kindergarten';
  } else {
    recommendedProgramId = 'daycare';
  }

  const recommendedProgram = PROGRAMS_DATA.find(p => p.id === recommendedProgramId) || PROGRAMS_DATA[0];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#15803D] uppercase tracking-wider mb-2">
            <span>✨ Early Learning Journeys</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4 font-heading">
            <span>Our Programs </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl">🌿</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Age-appropriate programs designed to build a strong foundation for lifelong learning.
          </p>
        </div>

        {/* Program Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROGRAMS_DATA.map((program) => {
            return (
              <div
                key={program.id}
                className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-stone-100"
                style={{ backgroundColor: program.badgeBg }}
              >
                <div>
                  {/* Top Header: Custom Icon Block matching reference design */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-xs border border-white"
                      style={{ backgroundColor: program.iconBg }}
                    >
                      {program.id === 'playgroup' && (
                        <div className="flex flex-col items-center leading-none font-bold text-[#059669]">
                          <span className="text-xs">A</span>
                          <span className="text-[10px] tracking-wider">B C</span>
                        </div>
                      )}
                      {program.id === 'nursery' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-2xl">🧸</span>
                        </div>
                      )}
                      {program.id === 'kindergarten' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-2xl">📖</span>
                        </div>
                      )}
                      {program.id === 'daycare' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-2xl">🏡</span>
                        </div>
                      )}
                    </div>

                    {/* Age Badge */}
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full shadow-2xs border border-white/60"
                      style={{ 
                        backgroundColor: 'white',
                        color: program.badgeColor 
                      }}
                    >
                      {program.age}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl font-bold text-stone-900 mb-2 font-heading">
                    {program.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-stone-600 mb-5 leading-relaxed font-normal min-h-[42px]">
                    {program.shortDesc}
                  </p>

                  {/* Highlights Mini List */}
                  <div className="space-y-1.5 mb-6 pt-2 border-t border-stone-200/50 text-xs text-stone-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{program.timings}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Ratio {program.teacherRatio}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions: Know More button */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-200/60 mt-auto">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-2.5 cursor-pointer py-1"
                    style={{ color: program.accentColor }}
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(program.id)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-stone-700 hover:text-stone-900 border border-stone-200 shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Parent Tool: Age Eligibility & Program Calculator */}
        <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-emerald-50 rounded-3xl p-6 sm:p-10 border border-amber-200/60 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B91C1C] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4 text-[#B91C1C]" />
                <span>Admission Age Finder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 font-heading">
                Not sure which program suits your child?
              </h3>
              <p className="text-sm sm:text-base text-stone-600 mb-6">
                Slide to select your little one&apos;s current age to instantly calculate the recommended classroom program, daily schedule, and readiness focus.
              </p>

              {/* Controls */}
              <div className="space-y-4 bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-stone-200/80 shadow-xs">
                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Child Age:</span>
                    <span className="text-[#B91C1C] text-sm">
                      {childAgeYears} Year{childAgeYears !== 1 ? 's' : ''} & {childAgeMonths} Month{childAgeMonths !== 1 ? 's' : ''}
                      <span className="text-stone-400 font-normal ml-1">({totalMonths} months)</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-500 uppercase">Years</label>
                      <input
                        type="range"
                        min="1"
                        max="6"
                        step="1"
                        value={childAgeYears}
                        onChange={(e) => setChildAgeYears(Number(e.target.value))}
                        className="w-full accent-[#B91C1C] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400">
                        <span>1 yr</span>
                        <span>3 yrs</span>
                        <span>6 yrs</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-stone-500 uppercase">Additional Months</label>
                      <input
                        type="range"
                        min="0"
                        max="11"
                        step="1"
                        value={childAgeMonths}
                        onChange={(e) => setChildAgeMonths(Number(e.target.value))}
                        className="w-full accent-[#15803D] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400">
                        <span>0 mo</span>
                        <span>6 mo</span>
                        <span>11 mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-lg">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Recommended Class
                  </span>
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: recommendedProgram.accentColor }}
                  >
                    Best Fit for {childAgeYears}y {childAgeMonths}m
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xs"
                    style={{ backgroundColor: recommendedProgram.iconBg }}
                  >
                    ⭐
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-stone-900 font-heading">
                      {recommendedProgram.title}
                    </h4>
                    <p className="text-xs font-medium text-stone-500">
                      Standard Age Bracket: {recommendedProgram.age}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {recommendedProgram.overview}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {recommendedProgram.keySkills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md font-medium">
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProgram(recommendedProgram)}
                    className="flex-1 py-3 px-4 rounded-xl text-stone-800 bg-stone-100 hover:bg-stone-200 font-bold text-xs sm:text-sm text-center transition-colors cursor-pointer"
                  >
                    View Curriculum &amp; Routine
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(recommendedProgram.id)}
                    className="flex-1 py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
                    style={{ backgroundColor: recommendedProgram.accentColor }}
                  >
                    Apply for this Batch &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
