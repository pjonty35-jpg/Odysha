import { CategoryItem, DestinationItem, FeatureCardItem } from '../types';

import heroImg from '../assets/images/hero_odisha_beach_temple_1786711724286.jpg';
import heroMobileImg from '../assets/images/hero_mobile_odisha_1786715792725.jpg';
import heroTabletImg from '../assets/images/hero_tablet_odisha_1786715806849.jpg';
import localIntelImg from '../assets/images/local_intelligence_art_1786711740898.jpg';
import personalizedJourneyImg from '../assets/images/personalized_journey_art_1786711755175.jpg';
import trustedInfoImg from '../assets/images/trusted_info_temple_1786711771361.jpg';
import puriImg from '../assets/images/dest_puri_temple_1786711790818.jpg';
import chilikaImg from '../assets/images/dest_chilika_lake_1786711807615.jpg';
import simlipalImg from '../assets/images/dest_simlipal_1786711823322.jpg';
import koraputImg from '../assets/images/dest_koraput_1786711840664.jpg';
import pipiliImg from '../assets/images/dest_pipili_1786711866111.jpg';
import footerPattachitraImg from '../assets/images/footer_banner_art.png';
import footerPattachitraWebp from '../assets/images/footer_banner_art.webp';
import dividerMandalaImg from '../assets/images/odisha_divider_mandala.png';
import dividerTempleImg from '../assets/images/odisha_divider_temple.png';
import dividerAllImg from '../assets/images/odisha_divider_all.png';
import userAvatarImg from '../assets/images/user_avatar_jonty.jpg';
import templeSketchImg from '../assets/images/explore_temple_sketch.jpg';
import bottomLeftSketchImg from '../assets/images/explore_bottom_left_sketch.jpg';
import cornerPattachitraImg from '../assets/images/explore_corner_pattachitra.jpg';
import headerLaceImg from '../assets/images/header_lace_border.png';

import catBeachesImg from '../assets/images/category_beaches.png';
import catNatureImg from '../assets/images/category_nature.png';
import catHeritageImg from '../assets/images/category_heritage.png';
import catSpiritualImg from '../assets/images/category_spiritual.png';
import catFoodImg from '../assets/images/category_food.png';
import catCraftsImg from '../assets/images/category_crafts.png';
import catWildlifeImg from '../assets/images/category_wildlife.png';
import catHiddenImg from '../assets/images/category_hidden.png';

export const ASSET_IMAGES = {
  hero: heroImg,
  heroMobile: heroMobileImg,
  heroTablet: heroTabletImg,
  localIntel: localIntelImg,
  personalizedJourney: personalizedJourneyImg,
  trustedInfo: trustedInfoImg,
  puri: puriImg,
  chilika: chilikaImg,
  simlipal: simlipalImg,
  koraput: koraputImg,
  pipili: pipiliImg,
  footerPattachitra: footerPattachitraImg,
  footerPattachitraWebp: footerPattachitraWebp,
  dividerMandala: dividerMandalaImg,
  dividerTemple: dividerTempleImg,
  dividerAll: dividerAllImg,
  userAvatar: userAvatarImg,
  templeSketch: templeSketchImg,
  bottomLeftSketch: bottomLeftSketchImg,
  cornerPattachitra: cornerPattachitraImg,
  headerLace: headerLaceImg,
  catBeaches: catBeachesImg,
  catNature: catNatureImg,
  catHeritage: catHeritageImg,
  catSpiritual: catSpiritualImg,
  catFood: catFoodImg,
  catCrafts: catCraftsImg,
  catWildlife: catWildlifeImg,
  catHidden: catHiddenImg,
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'beaches',
    name: 'Beaches',
    iconType: 'beaches',
    image: catBeachesImg,
    accentColor: '#2563eb', // Blue underline
    description: 'Golden sands along the Bay of Bengal, serene surfs, and blue flag beaches like Golden Beach Puri & Chandrabhaga.',
    tagline: '500km of tranquil coastline',
    popularSpots: ['Golden Beach Puri', 'Chandrabhaga Beach', 'Gopalpur-on-Sea', 'Astaranga Sunset Beach'],
  },
  {
    id: 'nature',
    name: 'Nature',
    iconType: 'nature',
    image: catNatureImg,
    accentColor: '#16a34a', // Green underline
    description: 'Asia’s largest brackish water lagoon, mangrove biospheres, cascading gorges, and mist-laden hills.',
    tagline: 'Lush biodiversity & serene waters',
    popularSpots: ['Chilika Lake Lagoon', 'Bhitarkanika Mangroves', 'Satkosia Tiger Reserve & Gorge', 'Daringbadi Valley'],
  },
  {
    id: 'heritage',
    name: 'Heritage',
    iconType: 'heritage',
    image: catHeritageImg,
    accentColor: '#c2410c', // Copper underline
    description: 'Ancient rock-cut caves, UNESCO World Heritage monuments, and millennium-old sandstone Kalinga architecture.',
    tagline: '2,000+ years of living architectural history',
    popularSpots: ['Konark Sun Temple', 'Lingaraj Temple complex', 'Udayagiri & Khandagiri Caves', 'Ratnagiri Buddhist Complex'],
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    iconType: 'spiritual',
    image: catSpiritualImg,
    accentColor: '#d97706', // Amber/gold underline
    description: 'Sacred Dhams, revered pilgrimage sanctums, traditional evening aartis, and ancient spiritual sanctuaries.',
    tagline: 'Abode of Lord Jagannath & the sacred Char Dham',
    popularSpots: ['Sri Jagannath Temple Puri', 'Chausath Yogini Temple Hirapur', 'Biraja Temple Jajpur', 'Gupteswar Cave Temple'],
  },
  {
    id: 'food',
    name: 'Food',
    iconType: 'food',
    image: catFoodImg,
    accentColor: '#dc2626', // Orange-red underline
    description: 'Iconic authentic delicacies from slow-cooked Dalma, Chhena Poda, Rasagola, to fresh coastal seafood and Pakhala Bhata.',
    tagline: 'Centuries of temple cuisine & coastal flavors',
    popularSpots: ['Puri Mahaprasad Ananda Bazar', 'Pahal Rasagola Corridor', 'Cuttack Dahi Bara Aloodum', 'Odisha Thali Trail'],
  },
  {
    id: 'arts-crafts',
    name: 'Arts & Crafts',
    iconType: 'arts',
    image: catCraftsImg,
    accentColor: '#b91c1c', // Maroon/terracotta underline
    description: 'Handmade Pattachitra palm leaf paintings, vibrant Pipili applique works, Dhokra metal casting, and Silver Filigree (Tarakasi).',
    tagline: 'Living artisan heritage villages',
    popularSpots: ['Raghurajpur Heritage Crafts Village', 'Pipili Applique Village', 'Cuttack Silver Filigree Quarter', 'Sambalpuri Weavers Guild'],
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    iconType: 'wildlife',
    image: catWildlifeImg,
    accentColor: '#4d7c0f', // Olive green underline
    description: 'Majestic Royal Bengal Tigers, Olive Ridley Sea Turtle nesting beaches, migratory flamingos, and Irrawaddy dolphins.',
    tagline: 'Home to rare wildlife & tranquil sanctuaries',
    popularSpots: ['Simlipal Biosphere Reserve', 'Gahirmatha Turtle Sanctuary', 'Nandankanan Zoological Park', 'Chilika Dolphin Sanctuary'],
  },
  {
    id: 'hidden-gems',
    name: 'Hidden Gems',
    iconType: 'hiddenGems',
    image: catHiddenImg,
    accentColor: '#ea580c', // Warm orange underline
    description: 'Untouched hill stations, hidden waterfalls, tribal weekly haats, and secluded valleys away from commercial crowds.',
    tagline: 'Secret retreats off the beaten track',
    popularSpots: ['Deomali Mountain Peak', 'Gudguda Waterfall', 'Khandadhar Falls', 'Mandarmani River Estuary'],
  },
];

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'local-intelligence',
    title: 'Local Intelligence',
    description: 'Practical knowledge from people who know the place.',
    iconBadgeBg: 'bg-[#1a2638]',
    iconType: 'intelligence',
    image: localIntelImg,
  },
  {
    id: 'personalized-journeys',
    title: 'Personalized Journeys',
    description: 'Plans built around time, budget, interests and traveller needs.',
    iconBadgeBg: 'bg-[#3e563d]',
    iconType: 'personalized',
    image: personalizedJourneyImg,
  },
  {
    id: 'trusted-information',
    title: 'Trusted Information',
    description: 'Source, verification and freshness indicators.',
    iconBadgeBg: 'bg-[#a3442f]',
    iconType: 'trusted',
    image: trustedInfoImg,
    badge: {
      icon: 'check',
    },
  },
];

export const POPULAR_DESTINATIONS: DestinationItem[] = [
  {
    id: 'puri',
    name: 'Puri',
    category: 'Spiritual',
    rating: 4.8,
    image: puriImg,
    description: 'One of India’s four holy Char Dham pilgrimage sites, home to the 12th-century Shree Jagannath Temple, magnificent Golden Beach with blue flag certification, and vibrant coastal culture.',
    highlights: ['Shree Jagannath Temple Darshan', 'Golden Beach & Light House', 'Ananda Bazar Mahaprasad Experience', 'Puri Sand Art & Coastal Promenade'],
    bestTimeToVisit: 'October to March (and during Rath Yatra festival)',
    nearestHub: 'Bhubaneswar Airport (BBI) - 60 km',
    localTip: 'Visit the Golden Beach early at sunrise for a peaceful atmosphere and head to Ananda Bazar around 1:00 PM for freshly prepared traditional Abadha.',
  },
  {
    id: 'chilika-lake',
    name: 'Chilika Lake',
    category: 'Nature',
    rating: 4.7,
    image: chilikaImg,
    description: 'Asia’s largest brackish water lagoon spanning over 1,100 sq km. A haven for over a million migratory birds, endangered Irrawaddy dolphins, and floating island villages.',
    highlights: ['Irrawaddy Dolphin Boat Tour at Satapada', 'Nalabana Bird Sanctuary', 'Kalijai Temple on the Island', 'Mangalajodi Bird Eco-Tourism'],
    bestTimeToVisit: 'November to February (peak migratory bird season)',
    nearestHub: 'Balugaon Railway Station / Bhubaneswar (100 km)',
    localTip: 'Hire a silent electric/country boat at Mangalajodi at 6:00 AM to glide silently within feet of migratory flamingos and pelicans.',
  },
  {
    id: 'simlipal',
    name: 'Simlipal',
    category: 'Wildlife',
    rating: 4.6,
    image: simlipalImg,
    description: 'A sprawling UNESCO World Biosphere Reserve featuring dense Sal forests, misty hilltops, dramatic roaring waterfalls like Barehipani and Joranda, and elusive tigers, elephants and leopards.',
    highlights: ['Barehipani Two-Tier Waterfall (399m)', 'Joranda Waterfall (150m)', 'Jungle Safari through Dense Sal Canopies', 'Tribal Eco-Camps at Ramtirtha'],
    bestTimeToVisit: 'November to April (sanctuary open season)',
    nearestHub: 'Baripada / Balasore Railway Station (70 km)',
    localTip: 'Book official forest safari permits in advance from the Baripada entry gate and stay overnight in the eco-cottages for stargazing.',
  },
  {
    id: 'koraput',
    name: 'Koraput',
    category: 'Hidden Gem',
    rating: 4.7,
    image: koraputImg,
    description: 'The scenic highlands of the Eastern Ghats known for Deomali peak (Odisha’s highest point), misty valleys, organic coffee plantations, and vibrant weekly tribal haats.',
    highlights: ['Deomali Peak Sunrise & Clouds', 'Kolab River Reservoir & Botanical Garden', 'Duduma Waterfall', 'Koraput Tribal Museum & Coffee Cafes'],
    bestTimeToVisit: 'September to March',
    nearestHub: 'Visakhapatnam Airport (190 km) / Koraput Junction',
    localTip: 'Wake up before dawn to summit Deomali peak where you stand above the rolling sea of clouds bathed in golden sunrise rays.',
  },
  {
    id: 'pipili',
    name: 'Pipili',
    category: 'Arts & Crafts',
    rating: 4.6,
    image: pipiliImg,
    description: 'A world-renowned artisan town famous for centuries-old appliqué patchwork craft used in royal temple festivities, featuring vibrant tapestries, umbrellas, and ceremonial canopies.',
    highlights: ['Applique Craft Master Workshops', 'Lord Jagannath Embroidered Wall Hangings', 'Artisanal Street Bazaar', 'Handmade Festive Lanterns (Chhatri & Tarasa)'],
    bestTimeToVisit: 'All year round (especially during temple festival seasons)',
    nearestHub: 'Bhubaneswar (20 km) on the highway to Puri',
    localTip: 'Walk into the master artisan workshops behind the main road to watch generational craftsmen hand-stitching intricate motifs.',
  },
];
