import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/preschoolData.ts';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultProgramId 
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('2.5 Years');
  const [programId, setProgramId] = useState(defaultProgramId || 'nursery');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedProgram = PROGRAMS_DATA.find(p => p.id === programId) || PROGRAMS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[2rem] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FFF5F5] via-[#FFFDF9] to-[#F0FDF4] border-b border-stone-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-[#B91C1C] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open 2025–2026</span>
          </div>
          <h3 className="text-2xl font-bold text-stone-900 font-heading">
            Begin Your Child&apos;s Journey
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Fill this quick form to schedule a personalized walkthrough and meet our principal at Maatri Chhaya.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 font-heading mb-2">
                Thank You, {parentName || 'Parent'}!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
                We have registered your inquiry for <strong className="text-stone-800">{selectedProgram.title}</strong>. Our admissions counselor will connect with you via phone ({phone}) shortly.
              </p>
              <div className="bg-stone-50 rounded-2xl p-4 text-xs text-stone-600 max-w-md mx-auto mb-6 text-left border border-stone-200">
                <div className="font-bold text-stone-800 mb-1">Campus Visit Preparation:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Visit Timing: Monday to Saturday, 9:30 AM to 4:30 PM</li>
                  <li>Location: 123, Green Park, New Delhi - 110016</li>
                  <li>Child interaction &amp; play corner will be arranged during tour.</li>
                </ul>
              </div>
              <button
                onClick={handleReset}
                className="px-7 py-3 rounded-full bg-[#B91C1C] text-white text-sm font-bold shadow hover:bg-[#991B1B] transition-colors cursor-pointer"
              >
                Done, Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Parent&apos;s Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shalini Roy"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C]"
                  />
                </div>
              </div>

              {/* Email & Child Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. shalini@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Child&apos;s Name &amp; Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aarav, 2.5 yrs"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C]"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Interested Program
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PROGRAMS_DATA.map((prog) => (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => setProgramId(prog.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        programId === prog.id
                          ? 'border-[#B91C1C] bg-[#FFF5F5] ring-2 ring-[#B91C1C]/10 font-bold text-[#B91C1C]'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 text-xs font-medium'
                      }`}
                    >
                      <div className="text-xs truncate">{prog.title}</div>
                      <div className="text-[10px] text-stone-400 truncate">{prog.age}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Tour Date */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] cursor-pointer"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Additional Queries (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Questions about daycare hours, school bus transport, or meals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Tour &amp; Enquire Now</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% confidential. No spam calls.</span>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
