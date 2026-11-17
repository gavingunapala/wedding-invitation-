// ============================================================
//  EDIT YOUR WEDDING DETAILS HERE
// ============================================================

export const wedding = {
  groom: 'Gavin',
  bride: 'Oshadi',
  monogram: 'G & O',

  date: '2027-06-20T14:00:00+05:30',
  displayDate: 'June 20, 2027',
  displayTime: 'Sunday · 2:00 PM',

  venue: {
    name: 'Ariyana Reach Hotel - Maharagama',
    address: 'RWWJ+928, Maharagama 10280, Sri Lanka',
    mapsUrl: 'https://www.google.com/maps/dir/Ariyana+Reach+Hotel+-+Maharagama,+RWWJ%2B928,+Maharagama+10280//@6.9074944,79.8457856,14z/data=!4m8!4m7!1m5!1m1!1s0x3ae251220b370eb7:0x1906fc0f16d49db5!2m2!1d79.930091!2d6.8459208!1m0?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
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
    { time: '2:00 PM', label: 'Ceremony', note: 'Ariyana Reach Hotel - Maharagama' },
    { time: '3:30 PM', label: 'Cocktail Hour', note: 'Ariyana Reach Hotel - Maharagama' },
    { time: '6:00 PM', label: 'Reception & Dinner', note: 'Ariyana Reach Hotel - Maharagama' },
    { time: '8:00 PM', label: 'First Dance', note: 'Dance Floor Opens' },
  ],

  // Placeholder SVG art until real photos are added.
  // Replace these files (keeping names) with real couple photos:
  //   photo-1.svg, photo-2.svg, photo-3.svg  ->  photo-1.jpg, photo-2.jpg, photo-3.jpg
  photos: ['/images/photo-1.svg', '/images/photo-2.svg', '/images/photo-3.svg'],

  rsvpEmail: 'rsvp@example.com',
  rsvpDate: 'November 15, 2026',
}
