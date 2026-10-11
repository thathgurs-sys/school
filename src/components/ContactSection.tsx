import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '2',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      childAge: '2',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#B91C1C] uppercase tracking-wider mb-2">
            <span>📍 Visit Our Campus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4 font-heading">
            Connect With Us
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            We would love to show you around our vibrant, loving campus. Book a scheduled walkthrough or drop by during visiting hours!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Campus Details & Map Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-stone-900 font-heading border-b border-stone-100 pb-3">
                Campus Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-100 text-[#B91C1C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">Address</h4>
                  <p className="text-sm font-semibold text-stone-800">
                    123, Green Park, New Delhi, India - 110016
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Near Green Park Metro Station (Exit 2)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#15803D] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">Phone & WhatsApp</h4>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-stone-800 hover:text-[#B91C1C] transition-colors block">
                    +91 98765 43210
                  </a>
                  <a 
                    href="https://wa.me/919876543210?text=Hello%20Maatri%20Chhaya%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold mt-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">Email Inquiries</h4>
                  <a href="mailto:info@maatrichhaya.com" className="text-sm font-semibold text-stone-800 hover:text-[#B91C1C] transition-colors">
                    info@maatrichhaya.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">Visiting Hours</h4>
                  <p className="text-sm font-semibold text-stone-800">
                    Mon - Sat: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Campus walkthroughs: 9:30 AM – 4:30 PM</p>
                </div>
              </div>
            </div>

            {/* Simulated Campus Location Card with visual map preview */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-stone-700">
                <span className="flex items-center gap-1.5 text-stone-800">
                  <MapPin className="w-4 h-4 text-[#B91C1C]" />
                  Green Park Campus Location
                </span>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Easy Parking Available</span>
              </div>
              <div className="h-44 rounded-2xl bg-stone-100 border border-stone-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center p-4 bg-white/95 rounded-2xl shadow-md border border-stone-200 max-w-xs">
                  <div className="text-xs font-bold text-[#B91C1C]">Maatri Chhaya Campus</div>
                  <div className="text-[11px] text-stone-600 mt-0.5">Plot 123, Block C, Green Park Main</div>
                  <a 
                    href="https://maps.google.com/?q=Green+Park+New+Delhi" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-2 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Campus Tour & Admissions Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-lg">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">Direct Admission Desk</span>
                <h3 className="text-2xl font-bold text-stone-900 font-heading mt-1">
                  Schedule a Guided Campus Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Meet our center head, experience the classrooms, and discuss your child&apos;s early learning journey.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 font-heading mb-2">
                    Tour Request Received!
                  </h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-stone-800">{formData.parentName || 'Parent'}</strong>! Our admissions counselor will call you within 2 working hours to confirm your personalized campus walkthrough.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shalini Roy"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. shalini@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Child&apos;s Age / Current Program
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50 cursor-pointer"
                      >
                        <option value="1.5">Play Group (1.5 – 2.5 Years)</option>
                        <option value="2.5">Nursery (2.5 – 3.5 Years)</option>
                        <option value="4">LKG / UKG (3.5 – 5.5 Years)</option>
                        <option value="daycare">Day Care &amp; After School</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Date for Campus Tour
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Any Special Notes or Questions?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your child's favorite activities, food preferences, or specific queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/20 focus:border-[#B91C1C] text-sm text-stone-800 bg-stone-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl text-white font-bold text-base bg-[#B91C1C] hover:bg-[#991B1B] active:bg-[#7F1D1D] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {submitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Book Guided Campus Tour</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-stone-400 mt-2">
                      🔒 Your phone and details are 100% private. No spam, ever.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
