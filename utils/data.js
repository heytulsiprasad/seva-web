export const results = [
  {
    id: 0,
    type: 'hospital',
    title: 'UPHC Ghatikia',
    slug: 'uphc-ghatikia',
    subtitle: null,
    image: 'https://picsum.photos/255/355',
    minCharge: 0,
    timing: '8:00 AM to 11:00 PM',
    location: 'Ghatikia, Khandagiri, Bhubaneswar',
    stars: 4, // We'll decide later
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
    doctors: [
      {
        id: 1,
        name: 'Dr. Yannam Deepak',
        delegation: 'Medical Officer In-Charge',
      },
      {
        id: 2,
        name: 'Dr. Basanti Mohapatra',
        delegation: 'Obstetrics & Gynaecology Specialist',
      },
      {
        id: 3,
        name: 'Dr. Seetaram Behera',
        delegation: 'Pediatric Specialist',
      },
    ],
  },
  {
    id: 4,
    type: 'hospital',
    title: 'Sunshine Hospital',
    slug: 'sunshine-hospital',
    subtitle: null,
    image: 'https://picsum.photos/204/304',
    minCharge: 1500,
    timing: '9:00 AM to 10:00 PM',
    location: 'Kanyakumari, Tamil Nadu',
    stars: 4.5,
    maxStars: 5,
    available: true,
    currencyCode: 'EUR',
  },
  {
    id: 5,
    type: 'hospital',
    title: 'AIIMS Bhubaneswar',
    slug: 'aiims-bhubaneswar',
    subtitle: 'Cutting edge cancer therapy',
    image: 'https://picsum.photos/205/305',
    minCharge: 150,
    timing: '9:00 AM to 10:00 PM',
    location: 'Near AIIMS, Bhubaneswar',
    stars: 4.5,
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
  },
  {
    id: 6,
    type: 'hospital',
    title: 'Keeva Hospital',
    slug: 'keeva-hospital',
    subtitle: 'Cutting edge cancer therapy',
    image: 'https://picsum.photos/207/305',
    minCharge: 150,
    timing: '9:00 AM to 10:00 PM',
    location: 'Khandigiri, Bhubaneswar',
    stars: 4.5,
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
  },
]

export const hospitaltext =
  'Loreto is a city on Mexico’s Baja California Peninsula, on the Gulf of California. Its colonial buildings include the Misión de Nuestra Señora de Loreto, a 17th-century church. Off the coast, the islands and waters of Bahía de Loreto National Park are home to dolphins, whales and pelicans. The city is backed by the Sierra de la Giganta mountain range, where trails lead to prehistoric cave paintings.'

export const currentBooking = {
  image:
    'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
  hospitalName: 'Sikhadevi Hospital',
  queueNum: 25,
  timingSlot: '9:00 AM - 9:20 AM',
}

export const previousBookings = [
  {
    image:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    hospitalName: 'Sikhadevi Hospital',
    queueNum: 25,
    timingSlot: '9:00 AM - 9:20 AM',
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    hospitalName: 'Sikhadevi Hospital',
    queueNum: 25,
    timingSlot: '9:00 AM - 9:20 AM',
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    hospitalName: 'Sikhadevi Hospital',
    queueNum: 25,
    timingSlot: '9:00 AM - 9:20 AM',
  },
]
