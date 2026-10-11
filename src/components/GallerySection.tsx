import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryImage } from '../data/galleryData.ts';
import { Eye, X, ZoomIn, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classroom', label: 'Learning Rooms' },
    { id: 'play', label: 'Play Zone' },
    { id: 'art', label: 'Art & Creativity' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#B91C1C] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Campus Moments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4 font-heading">
            Life at Maatri Chhaya
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Take a peek into our warm, colorful, and joyful world of hands-on learning, friendship, and discovery.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#B91C1C] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-stone-100 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#B91C1C]" />
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-stone-900 mb-1 group-hover:text-[#B91C1C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-[#B91C1C] flex items-center gap-1">
                  <span>View Larger</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-stone-900">
              <img
                src={selectedImage.imageSrc}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[65vh] mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                  {selectedImage.categoryLabel}
                </span>
                <span className="text-xs text-stone-400">Maatri Chhaya Campus</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2 font-heading">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
