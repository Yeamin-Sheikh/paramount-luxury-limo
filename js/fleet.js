/**
 * Fleet Specifications & Luxury Vehicles
 * Real Service: Paramount Limousine Service, 7115 W Manchester Ave, Los Angeles, CA 90045
 */
export const fleetData = [
  {
    id: 'rolls-phantom',
    name: 'Rolls-Royce Phantom VIII',
    category: 'Ultra Luxury Chauffeur',
    hourlyRate: 350,
    minHours: 3,
    passengers: 3,
    luggage: 3,
    badge: 'Pinnacle Luxury',
    image: 'interior.jpg',
    features: [
      'Starlight fiber optic headliner with shooting stars',
      'Hand-stitched leather with lambswool floor mats',
      'Dual rear privacy curtains and champagne chiller',
      'Discrete chauffeur partition and quiet cabin tech'
    ],
    description: 'The definitive statement in bespoke luxury travel. Ideal for red carpets, galas, and VIP corporate arrivals in Beverly Hills and Bel Air.'
  },
  {
    id: 'maybach-s580',
    name: 'Mercedes-Maybach S580 4MATIC',
    category: 'Executive Sedan',
    hourlyRate: 220,
    minHours: 2,
    passengers: 3,
    luggage: 3,
    badge: 'Executive Choice',
    image: 'hero.jpg',
    features: [
      'Executive rear seating with calf rests and hot stone massage',
      'Burmester high-end 4D surround sound system',
      'Silver-plated champagne flutes and refrigerated console',
      'High-speed 5G Wi-Fi with HDMI workstation inputs'
    ],
    description: 'First-class aviation comfort on the road. Preferred by studio heads, international dignitaries, and executive travelers.'
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade ESV Platinum',
    category: 'Luxury SUV',
    hourlyRate: 165,
    minHours: 2,
    passengers: 6,
    luggage: 6,
    badge: 'Spacious Comfort',
    image: 'hero.jpg',
    features: [
      'Extended wheelbase with exceptional rear legroom',
      'AKG Studio Reference 36-speaker acoustic audio',
      'Tri-zone automatic climate with rear air filtration',
      'Limo-tint privacy glass and power deployable steps'
    ],
    description: 'The standard of luxury SUV transport. Ample capacity for executive delegations, family airport transfers to LAX, and group outings.'
  },
  {
    id: 'sprinter-exec',
    name: 'Mercedes-Benz Executive Jet Sprinter',
    category: 'Mobile Boardroom',
    hourlyRate: 195,
    minHours: 4,
    passengers: 14,
    luggage: 10,
    badge: 'Group Executive',
    image: 'interior.jpg',
    features: [
      'Custom captain leather chairs with 360-degree swivel',
      '43-inch 4K Smart TV with Apple TV and HDMI inputs',
      'Built-in granite service bar and beverage coolers',
      'Full stand-up 6-foot-4-inch interior ceiling height'
    ],
    description: 'A private jet on wheels. Perfect for wine tours in Santa Ynez, corporate offsites, and concert tours.'
  },
  {
    id: 'hummer-stretch',
    name: 'Hummer H2 Mega Stretch Limousine',
    category: 'Super Stretch Limousine',
    hourlyRate: 240,
    minHours: 3,
    passengers: 18,
    luggage: 8,
    badge: 'Celebration Master',
    image: 'interior.jpg',
    features: [
      'Multi-color mood fiber optic ceiling and laser strobes',
      'Dual illuminated cocktail bars with crystal glassware',
      'Custom 2,000-watt sound system with Bluetooth control',
      'J-lounge two-tone custom leather perimeter seating'
    ],
    description: 'Built for unforgettable celebrations. The premier choice for weddings, birthdays, bachelor parties, and prom nights.'
  }
];

export const clientReviews = [
  {
    id: 1,
    client: 'Jonathan Sterling',
    role: 'Managing Partner, Century City Capital',
    rating: 5,
    date: 'August 2026',
    comment: 'Paramount Limousine has managed our corporate executive transfers to LAX and Burbank for 5 years. Always 15 minutes early, impeccably dressed chauffeurs, and pristine vehicles.'
  },
  {
    id: 2,
    client: 'Victoria & Julian Howard',
    role: 'Beverly Hills Wedding Client',
    rating: 5,
    date: 'July 2026',
    comment: 'We booked the Rolls-Royce Phantom VIII for our wedding reception at The Beverly Hills Hotel. The starlight ceiling was magical, and the red carpet service was truly five-star.'
  },
  {
    id: 3,
    client: 'Derrick Miller',
    role: 'Entertainment Director, Hollywood',
    rating: 5,
    date: 'June 2026',
    comment: 'Transparent pricing with zero hidden charges at midnight. The Executive Sprinter handled our production crew flawlessly between studio locations.'
  }
];
