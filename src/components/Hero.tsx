import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { ASSET_IMAGES, POPULAR_DESTINATIONS, CATEGORIES } from '../data/landingData';

interface HeroProps {
  onOpenPlan: () => void;
  onSelectDestination: (id: string) => void;
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlan, onSelectDestination, onExplore }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSuggestions = searchQuery.trim()
    ? [
        ...POPULAR_DESTINATIONS.filter((d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.category.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        ...CATEGORIES.filter((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((c) => ({
          id: c.id,
          name: c.name,
          category: 'Category',
          rating: 4.9,
          image: '',
          description: c.description,
          highlights: c.popularSpots,
          bestTimeToVisit: 'All season',
          nearestHub: 'Odisha',
          localTip: c.tagline,
        })),
      ]
    : [];

  return (
    <section className="relative w-full">
      {/* Hero Backdrop with background image - full viewport height under header */}
      <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] w-full flex flex-col justify-center overflow-hidden">
        {/* Background Image with Responsive Picture Sources */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            {/* Mobile portrait aspect ratio */}
            <source media="(max-width: 639px)" srcSet={ASSET_IMAGES.heroMobile} />
            {/* Tablet aspect ratio */}
            <source media="(max-width: 1023px)" srcSet={ASSET_IMAGES.heroTablet} />
            {/* Desktop default */}
            <img
              src={ASSET_IMAGES.hero}
              alt="Odisha coast, golden beaches and ancient heritage temple"
              className="w-full h-full object-cover object-top lg:object-[85%_top]"
              referrerPolicy="no-referrer"
            />
          </picture>
          
          {/* Crisp, natural lighting overlays for optimal contrast and zero fog */}
          {/* Subtle bottom fade to merge smoothly into the category section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f4] via-transparent to-transparent opacity-90 sm:opacity-75" />
          {/* Desktop & Tablet soft left-side text backing */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#faf8f4]/90 via-[#faf8f4]/45 to-transparent w-full md:w-3/5" />
          <div className="absolute inset-0 bg-black/10 sm:bg-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 w-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl bg-[#faf7f2]/88 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-5 xs:p-6 sm:p-0 rounded-3xl sm:rounded-none border border-white/60 sm:border-0 shadow-lg sm:shadow-none transition-all"
          >
            
            {/* Main Headline matching reference typography */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-[#142232] leading-[1.1] sm:leading-[1.08]">
              Discover{' '}
              <span className="text-[#b84a2d] inline-block font-serif">
                Odisha
              </span>
              ,<br />
              your way.
            </h1>

            {/* Sub-paragraph */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-800 sm:text-gray-700 font-normal leading-relaxed max-w-xl">
              Explore hidden places, local knowledge and verified travel
              information — then turn them into a journey made for you.
            </p>

            {/* Action Buttons - Compact and placed side by side */}
            <div className="mt-5 sm:mt-6 flex flex-row items-center gap-2.5 sm:gap-3.5 flex-wrap">
              {/* Primary CTA */}
              <button
                onClick={onOpenPlan}
                className="group bg-[#162436] hover:bg-[#0f1a27] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-lg shadow-sm inline-flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer w-auto"
              >
                <span>Plan My Journey</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  if (onExplore) {
                    onExplore();
                  } else {
                    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#f7eedf]/90 hover:bg-[#fae7cb] text-[#292218] border border-[#d6c2a4] text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-colors shadow-2xs backdrop-blur-xs text-center cursor-pointer inline-flex items-center justify-center w-auto"
              >
                Explore Odisha
              </button>
            </div>
          </motion.div>

          {/* Centered Search Bar with refined subtle rounded-xl border radius directly below the hero CTA area */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6 sm:mt-7 max-w-2xl mx-auto w-full"
          >
            <div className="relative bg-white/98 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md border border-[#e5ded4] px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 transition-shadow focus-within:shadow-lg focus-within:border-[#b84a2d]/50">
              
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-700 shrink-0" />
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search places, food, hidden gems..."
                className="w-full bg-transparent border-none text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setFilterOpen(!filterOpen)}
                className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors shrink-0 cursor-pointer"
                title="Filter preferences"
              >
                <SlidersHorizontal className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>

            {/* Search suggestions dropdown */}
            {searchQuery.trim() && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-30 p-2">
                <div className="p-2 text-xs font-semibold uppercase text-gray-600 tracking-wider">
                  Matching Destinations & Experiences
                </div>
                {filteredSuggestions.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto space-y-1">
                    {filteredSuggestions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectDestination(item.id);
                          setSearchQuery('');
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#fbf7f0] text-left transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[#b84a2d]" />
                          <div>
                            <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                            <span className="ml-2 text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-[#b84a2d] font-medium">Explore →</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-600">
                    No direct match found for "{searchQuery}". Try searching for Puri, Chilika, Temples, or Beaches.
                  </div>
                )}
              </div>
            )}

            {/* Filter Popover */}
            {filterOpen && (
              <div className="absolute top-full mt-2 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-30 animate-in fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#b84a2d]" /> Quick Filters
                  </span>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-xs text-gray-600 hover:text-gray-900"
                  >
                    Done
                  </button>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Experiences' },
                    { id: 'heritage', label: 'UNESCO & Heritage Sites' },
                    { id: 'beaches', label: 'Coastline & Beaches' },
                    { id: 'wildlife', label: 'Wildlife Sanctuaries' },
                    { id: 'spiritual', label: 'Temple & Pilgrimage' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setActiveFilter(f.id);
                        setFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        activeFilter === f.id
                          ? 'bg-[#182639] text-white'
                          : 'text-gray-700 hover:bg-[#faf6f0]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

    </section>
  );
};
