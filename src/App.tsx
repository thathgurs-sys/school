/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Pillars } from './components/Pillars.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { QuoteBanner } from './components/QuoteBanner.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ParentCornerSection } from './components/ParentCornerSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';
import { ProgramModal } from './components/ProgramModal.tsx';
import { ProgramInfo } from './data/preschoolData.ts';
import { MessageCircle, PhoneCall, ArrowUp } from 'lucide-react';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedEnquiryProgramId, setSelectedEnquiryProgramId] = useState<string | undefined>(undefined);
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramInfo | null>(null);

  const handleOpenEnquiry = (programId?: string) => {
    setSelectedEnquiryProgramId(programId);
    setIsEnquiryOpen(true);
  };

  const handleSelectProgram = (program: ProgramInfo) => {
    setSelectedProgramModal(program);
  };

  const handleEnrollFromModal = (programId: string) => {
    setSelectedProgramModal(null);
    handleOpenEnquiry(programId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-stone-800 font-sans selection:bg-[#B91C1C]/15 selection:text-[#991B1B]">
      {/* Main Header */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section matching reference */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Four Core Pillars matching reference cards */}
        <Pillars />

        {/* 3. Welcome to Maatri Chhaya / About Section */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 4. Our Programs Section & Interactive Age Calculator */}
        <ProgramsSection 
          onSelectProgram={handleSelectProgram}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 5. Inspirational Quote & Art Banner matching reference */}
        <QuoteBanner />

        {/* 6. Campus Moments Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 7. Parent Corner: Daily Routine, Testimonials & FAQs */}
        <ParentCornerSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 8. Contact & Campus Walkthrough Booking */}
        <ContactSection />
      </main>

      {/* Main Footer matching reference */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProgramId={selectedEnquiryProgramId}
      />

      <ProgramModal
        program={selectedProgramModal}
        onClose={() => setSelectedProgramModal(null)}
        onEnroll={handleEnrollFromModal}
      />

      {/* Floating Quick Action Dial (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Quick Chat */}
        <a
          href="https://wa.me/919876543210?text=Hello%20Maatri%20Chhaya%20Preschool%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          title="Chat with Admissions on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Direct Call Quick Dial */}
        <a
          href="tel:+919876543210"
          aria-label="Call Admissions Desk"
          className="w-12 h-12 rounded-full bg-[#B91C1C] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          title="Call Us Directly"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-stone-600 hover:text-stone-900 border border-stone-200 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
