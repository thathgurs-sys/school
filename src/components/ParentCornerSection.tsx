import React, { useState } from 'react';
import { DAILY_ROUTINE, TESTIMONIALS, FAQS } from '../data/preschoolData.ts';
import { 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Quote, 
  Download, 
  CheckCircle, 
  CalendarDays,
  FileText
} from 'lucide-react';

interface ParentCornerProps {
  onOpenEnquiry: () => void;
}

export const ParentCornerSection: React.FC<ParentCornerProps> = ({ onOpenEnquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    // Create and trigger brochure text file download
    const prospectusText = `===================================================
MAATRI CHHAYA PRESCHOOL & DAY CARE
"Nurturing Little Hearts, Shaping Bright Futures"
Address: 123, Green Park, New Delhi, India - 110016
Phone: +91 98765 43210 | Email: info@maatrichhaya.com
===================================================

ACADEMIC YEAR ADMISSION PROSPECTUS 2025-2026

1. PROGRAMS OFFERED:
- Play Group: 1.5 to 2.5 Years (Ratio 1:6)
- Nursery: 2.5 to 3.5 Years (Ratio 1:8)
- LKG & UKG: 3.5 to 5.5 Years (Ratio 1:10)
- Day Care & After School: 1.0 to 8.0 Years (Flexible hours 8am - 6:30pm)

2. CORE HIGHLIGHTS:
- 100% CCTV surveillance accessible on Parents Mobile App
- Nutritious warm vegetarian in-house cooked meals & snacks
- Certified Pediatric First-Aid trained educators
- Soft-edge Montessori sensory play furniture
- Daily digital photo diary & milestone tracking

3. ADMISSION CHECKLIST:
- Child's Birth Certificate copy
- 4 passport size photos of Child + 2 of each Parent/Guardian
- Immunization & medical record copy
- Residence address proof

For campus walkthroughs or principal consultations, please contact:
Admissions Desk: +91 98765 43210
===================================================`;

    const blob = new Blob([prospectusText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Maatri_Chhaya_Preschool_Prospectus.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section id="parent-corner" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#B91C1C] uppercase tracking-wider mb-2">
            <span>👨‍👩‍👧 Parent Corner &amp; Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4 font-heading">
            Everything Parents Love to Know
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
            From our joyful daily schedule to genuine parent reviews and answers to your most important questions.
          </p>
        </div>

        {/* Part 1: A Day in the Life (Daily Routine Timeline) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 font-heading flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#B91C1C]" />
                <span>A Typical Day at Maatri Chhaya</span>
              </h3>
              <p className="text-sm text-stone-500">
                Predictable routines foster emotional security and joyful participation.
              </p>
            </div>

            <button
              onClick={handleDownloadBrochure}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#B91C1C] bg-[#FFF1F2] hover:bg-[#FFE4E6] border border-[#FECDD3] transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Downloaded Prospectus! ✓' : 'Download Complete Prospectus'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DAILY_ROUTINE.slice(0, 4).map((item, index) => (
              <div 
                key={index}
                className="bg-stone-50/80 hover:bg-stone-50 p-5 rounded-2xl border border-stone-200/80 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white text-[#B91C1C] shadow-2xs border border-stone-200">
                    {item.time}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">Slot 0{index + 1}</span>
                </div>
                <h4 className="font-bold text-sm text-stone-900 mb-1.5 font-heading">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {DAILY_ROUTINE.slice(4, 8).map((item, index) => (
              <div 
                key={index + 4}
                className="bg-[#FFFDF9] p-5 rounded-2xl border border-stone-200/70 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white text-[#15803D] shadow-2xs border border-stone-200">
                    {item.time}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">Slot 0{index + 5}</span>
                </div>
                <h4 className="font-bold text-sm text-stone-900 mb-1.5 font-heading">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Parent Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-900 font-heading">
              What Our Families Say
            </h3>
            <p className="text-sm text-stone-500">
              Trusted by 150+ happy families in Green Park, Hauz Khas and South Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-stone-900">{t.name}</h5>
                    <p className="text-xs text-stone-500 font-medium">{t.child}</p>
                  </div>
                  <span className="text-[11px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                    {t.location.split(',')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Frequently Asked Questions */}
        <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                Clear Answers for Parents
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading mt-1">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base hover:text-[#B91C1C] transition-colors cursor-pointer"
                    >
                      <span className="font-heading">{faq.q}</span>
                      <span className="shrink-0 text-stone-400">
                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#B91C1C]" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center bg-white rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-stone-600 font-medium">
                Have a question not listed here? Talk to our friendly team directly.
              </span>
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 rounded-full bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#991B1B] transition-colors cursor-pointer shrink-0"
              >
                Ask Admissions Team &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
