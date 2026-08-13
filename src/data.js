// ============================================================
//  EDIT YOUR WEDDING DETAILS HERE
// ============================================================

export const wedding = {
  groom: 'Gavin',
  bride: 'Oshadi',
  monogram: 'G & O',

  date: '2026-12-12T14:00:00',
  displayDate: 'December 12, 2026',
  displayTime: 'Saturday · 2:00 PM',

  venue: {
    name: 'Hilton Colombo',
    address: 'Hilton Colombo Residences, Union Place, Colombo 02, Sri Lanka',
  },

  story: [
    {
      heading: 'The First Hello',
      text: 'We met on a rainy Tuesday at a tiny coffee shop downtown — two strangers reaching for the same umbrella. The umbrella stayed with her. I stayed for the conversation.',
    },
    {
      heading: 'The Years Between',
      text: 'From road trips with the windows down to quiet evenings watching the sunset, every ordinary day with you felt extraordinary.',
    },
    {
      heading: 'The Question',
      text: 'Under a sky full of stars, on the beach where we shared our first kiss, I asked you to be mine forever. You said yes.',
    },
  ],

  schedule: [
    { time: '2:00 PM', label: 'Ceremony', note: 'Grand Ballroom, Hilton Colombo' },
    { time: '3:30 PM', label: 'Cocktail Hour', note: 'Grand Ballroom, Hilton Colombo' },
    { time: '6:00 PM', label: 'Reception & Dinner', note: 'Grand Ballroom, Hilton Colombo' },
    { time: '8:00 PM', label: 'First Dance', note: 'Dance Floor Opens' },
  ],

  // Placeholder SVG art until real photos are added.
  // Replace these files (keeping names) with real couple photos:
  //   photo-1.svg, photo-2.svg, photo-3.svg  ->  photo-1.jpg, photo-2.jpg, photo-3.jpg
  photos: ['/images/photo-1.svg', '/images/photo-2.svg', '/images/photo-3.svg'],

  rsvpEmail: 'rsvp@example.com',
  rsvpDate: 'November 15, 2026',
}
