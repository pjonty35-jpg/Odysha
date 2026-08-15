import React from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, ShieldCheck, Check } from 'lucide-react';
import { FEATURE_CARDS } from '../data/landingData';
import { SectionFlourish } from './OdishaMotifs';

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="pt-2 pb-4 md:pt-3 md:pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container Box with Warm Sand Background */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#fcfaf4] border border-[#ece4d6] rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 shadow-2xs"
      >
        {/* Section Heading with Temple Flourish */}
        <div className="text-center mb-5 sm:mb-6 md:mb-8">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-[#14202e] tracking-tight">
            Don’t just visit Odisha. Discover it.
          </h2>
          <SectionFlourish icon="temple" className="mt-2" />
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {FEATURE_CARDS.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white/80 border border-[#eee6d9] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
              >
                {/* Header: Badge & Text */}
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-xs ${card.iconBadgeBg}`}
                  >
                    {card.iconType === 'intelligence' && <Users className="w-5 h-5" />}
                    {card.iconType === 'personalized' && <MapPin className="w-5 h-5" />}
                    {card.iconType === 'trusted' && <ShieldCheck className="w-5 h-5" />}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl text-[#182638] mt-4 sm:mt-5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Illustration Container */}
                <div className="relative mt-4 sm:mt-6 pt-2 rounded-xl overflow-hidden min-h-[140px] sm:min-h-[160px] flex items-end justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-36 sm:h-44 object-cover object-center rounded-xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating Green Verified Checkmark Badge for Trusted Information */}
                  {card.badge && (
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#38764a] text-white p-1.5 sm:p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center animate-bounce-gentle">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
