/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ExploreOdishaPage } from './components/ExploreOdishaPage';
import { FooterBanner } from './components/FooterBanner';
import { DestinationModal, CategoryModal, PlanJourneyModal, ExplorePlaceModal } from './components/Modals';
import { PattachitraGrainBackground } from './components/OdishaMotifs';
import { POPULAR_DESTINATIONS } from './data/landingData';
import { EXPLORE_PLACES, ExplorePlaceItem } from './data/exploreData';
import { DestinationItem, CategoryItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'explore'>('home');
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [selectedExplorePlace, setSelectedExplorePlace] = useState<ExplorePlaceItem | null>(null);
  const [planJourneyOpen, setPlanJourneyOpen] = useState(false);
  const [planInitialDest, setPlanInitialDest] = useState('');
  const [savedPlaceIds, setSavedPlaceIds] = useState<string[]>(['raghurajpur-craft-village', 'gulmi-waterfall']);

  // Handle URL hash changes or direct routing
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#explore') {
        setCurrentPage('explore');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'explore') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (placeId: string) => {
    setSavedPlaceIds((prev) =>
      prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]
    );
  };

  const handleOpenPlanWithDest = (destName: string) => {
    setPlanInitialDest(destName);
    setPlanJourneyOpen(true);
  };

  const handleSelectDestById = (id: string) => {
    const found = POPULAR_DESTINATIONS.find((d) => d.id === id);
    if (found) {
      setSelectedDestination(found);
    } else {
      setPlanInitialDest(id);
      setPlanJourneyOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f4] flex flex-col selection:bg-[#b84a2d]/20 selection:text-[#b84a2d]">
      {/* Subtle Pattachitra art & canvas grain background overlay */}
      <PattachitraGrainBackground />

      {/* 1. Header / Navbar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPlan={() => {
          setPlanInitialDest('');
          setPlanJourneyOpen(true);
        }}
        savedCount={savedPlaceIds.length}
        onOpenSaved={() => {
          if (savedPlaceIds.length > 0) {
            const firstSaved = EXPLORE_PLACES.find((p) => p.id === savedPlaceIds[0]);
            if (firstSaved) setSelectedExplorePlace(firstSaved);
          } else {
            alert('You have no saved places yet! Click the bookmark icon on any card to save it.');
          }
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* 2. Hero Section with Floating Search and Temple Frieze Divider */}
            <Hero
              onOpenPlan={() => {
                setPlanInitialDest('');
                setPlanJourneyOpen(true);
              }}
              onSelectDestination={handleSelectDestById}
              onExplore={() => handleNavigate('explore')}
            />

            {/* 3. Categories ("What kind of Odisha are you looking for?") */}
            <CategoriesSection onSelectCategory={setSelectedCategory} />

            {/* 4. Value Proposition ("Don't just visit Odisha. Discover it.") */}
            <ValuePropositionSection />

            {/* 5. Popular Destinations */}
            <DestinationsSection
              onSelectDestination={setSelectedDestination}
              onViewAll={() => handleNavigate('explore')}
            />
          </>
        ) : (
          /* Explore Odisha Dedicated Page */
          <ExploreOdishaPage
            onSelectPlace={(place) => setSelectedExplorePlace(place)}
            onPlanJourney={handleOpenPlanWithDest}
            savedPlaceIds={savedPlaceIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* 6. Footer Banner with Authentic Pattachitra Banner & Apple Translucent Card */}
      <FooterBanner />

      {/* Interactive Modals */}
      <ExplorePlaceModal
        place={selectedExplorePlace}
        onClose={() => setSelectedExplorePlace(null)}
        onPlanTrip={handleOpenPlanWithDest}
        isSaved={selectedExplorePlace ? savedPlaceIds.includes(selectedExplorePlace.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTrip={handleOpenPlanWithDest}
      />

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onPlanTrip={handleOpenPlanWithDest}
      />

      <PlanJourneyModal
        isOpen={planJourneyOpen}
        initialDestination={planInitialDest}
        onClose={() => setPlanJourneyOpen(false)}
      />
    </div>
  );
}

