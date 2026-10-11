import React from 'react';
import { ProgramInfo } from '../data/preschoolData.ts';
import { X, Clock, Users, Check, Sparkles, Calendar, BookOpen, ShieldCheck } from 'lucide-react';

interface ProgramModalProps {
  program: ProgramInfo | null;
  onClose: () => void;
  onEnroll: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ 
  program, 
  onClose, 
  onEnroll 
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div 
          className="p-6 sm:p-8 border-b border-stone-100"
          style={{ backgroundColor: program.badgeBg }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span 
              className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-2xs"
              style={{ backgroundColor: program.accentColor }}
            >
              Age {program.age}
            </span>
            <span className="text-xs font-bold text-stone-600">
              {program.tagline}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
            {program.title} Program
          </h3>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-stone-700">
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200/50">
              <Clock className="w-4 h-4 text-stone-500" />
              <span>{program.timings}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200/50">
              <Users className="w-4 h-4 text-stone-500" />
              <span>{program.teacherRatio}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Curriculum Overview
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {program.overview}
            </p>
          </div>

          {/* Key Developmental Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Key Developmental Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.keySkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 text-xs sm:text-sm text-stone-800 border border-stone-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Routine Focus */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Sample Classroom Activities
            </h4>
            <div className="space-y-2">
              {program.dailyActivities.map((act, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-600">
                  <span className="text-[#B91C1C] font-bold shrink-0 mt-0.5">•</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              Package &amp; Care Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {program.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
            <div>
              <div className="text-[11px] text-stone-400 uppercase font-bold tracking-wider">Tuition Guideline</div>
              <div className="text-lg font-bold text-stone-900">{program.monthlyFeeEstimate}</div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnroll(program.id);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                style={{ backgroundColor: program.accentColor }}
              >
                Enroll in {program.title} &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
