import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/landingData';
import { DestinationItem } from '../types';

interface DestinationsSectionProps {
  onSelectDestination: (destination: DestinationItem) => void;
  onViewAll: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onViewAll,
}) => {
  return (
    <section id="destinations" className="py-6 sm:py-8 md:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between mb-4 sm:mb-5"
      >
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-[#14202e] tracking-tight">
          Popular Destinations
        </h2>

        <button
          onClick={onViewAll}
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#b84a2d] hover:text-[#91351e] transition-colors p-1 cursor-pointer"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* Destination Cards Grid (2 cols on mobile, 3 on tablet, 5 on desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {POPULAR_DESTINATIONS.map((dest, index) => (
          <motion.div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-neutral-900 aspect-3/4 sm:aspect-4/5"
          >
            {/* Background Destination Photo */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Dark Gradient Overlay for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            {/* Card Content at Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex flex-col justify-end">
              {/* Destination Name */}
              <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg leading-tight drop-shadow-xs">
                {dest.name}
              </h3>

              {/* Sub-row: Category & Star Rating */}
              <div className="flex items-center justify-between mt-1 text-[11px] sm:text-xs text-white/85">
                <span className="font-medium truncate max-w-[90px] xs:max-w-[110px]">{dest.category}</span>
                <span className="flex items-center gap-1 text-amber-300 font-bold bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                  {dest.rating}
                </span>
              </div>
            </div>

            {/* Hover Badge */}
            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#182639] text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs hidden sm:block">
              Explore →
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
