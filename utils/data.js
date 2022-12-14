// hospitals
// timeBlock: { startTime, endTime }
// timing: [{ startTime, endTime }]

// doctors
// availability: { mon: false, tue: [...timing], wed: false, thurs, fri, sat, sun }

// bookings
// archived: { completed: true, date: null, timing: {} }
// upcoming: { completed: false, date: null, timing: {} }

export const results = [
  {
    id: 0,
    title: 'UPHC Ghatikia',
    slug: 'uphc-ghatikia',
    subtitle: 'New hospital in town',
    image: 'https://picsum.photos/255/355',
    minCharge: 0,
    timing: '8:00 AM to 11:00 PM',
    location: 'Ghatikia, Khandagiri, Bhubaneswar',
    stars: 4, // We'll decide later
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
    dailyPatients: 100,
    doctors: [
      {
        id: 1,
        name: 'Dr. Yannam Deepak',
        delegation: 'Medical Officer In-Charge',
        available: {
          mon: false,
          // tue: { ... }
        },
        timing: [
          { startTime: '08:00:00 AM', endTime: '11:00:00 AM' },
          { startTime: '05:00:00 PM', endTime: '08:00:00 PM' },
        ],
      },
      {
        id: 2,
        name: 'Dr. Basanti Mohapatra',
        delegation: 'Obstetrics & Gynaecology Specialist',
        available: false,
        timing: [
          { startTime: '08:00:00 AM', endTime: '11:00:00 AM' },
          { startTime: '05:00:00 PM', endTime: '08:00:00 PM' },
        ],
      },
      {
        id: 3,
        name: 'Dr. Seetaram Behera',
        delegation: 'Pediatric Specialist',
        available: false,
      },
      {
        id: 4,
        name: 'Dr. Ankita Rath',
        delegation: 'Dental Specialist',
        available: true,
      },
      {
        id: 5,
        name: 'Dr. Dusmanta Kumar Pradhan',
        delegation: 'Physiotherapist',
        available: true,
      },
      {
        id: 6,
        name: 'Sarita Panda',
        delegation: 'Dietician & Nutritionist',
        available: true,
      },
    ],
    departments: [
      'Cardiology',
      'Medicine',
      'Neurology',
      'Pediatric',
      'Oncology',
      'Physiotherapy',
    ],
  },
  {
    id: 4,
    title: 'Sunshine Hospital',
    slug: 'sunshine-hospital',
    subtitle: null,
    image: 'https://picsum.photos/204/304',
    minCharge: 1500,
    timing: '9:00 AM to 10:00 PM',
    location: 'Kanyakumari, Tamil Nadu',
    stars: 4.5,
    dailyPatients: 100,
    maxStars: 5,
    available: true,
    currencyCode: 'EUR',
  },
  {
    id: 5,
    title: 'AIIMS Bhubaneswar',
    slug: 'aiims-bhubaneswar',
    subtitle: 'Cutting edge cancer therapy',
    image: 'https://picsum.photos/205/305',
    minCharge: 150,
    timing: '9:00 AM to 10:00 PM',
    location: 'Near AIIMS, Bhubaneswar',
    dailyPatients: 100,
    stars: 4.5,
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
  },
  {
    id: 6,
    title: 'Keeva Hospital',
    slug: 'keeva-hospital',
    subtitle: 'Cutting edge cancer therapy',
    image: 'https://picsum.photos/207/305',
    minCharge: 150,
    timing: '9:00 AM to 10:00 PM',
    location: 'Khandigiri, Bhubaneswar',
    dailyPatients: 100,
    stars: 4.5,
    maxStars: 5,
    available: true,
    currencyCode: 'INR',
  },
]

export const hospitaltext =
  'Loreto is a city on Mexico???s Baja California Peninsula, on the Gulf of California. Its colonial buildings include the Misi??n de Nuestra Se??ora de Loreto, a 17th-century church. Off the coast, the islands and waters of Bah??a de Loreto National Park are home to dolphins, whales and pelicans. The city is backed by the Sierra de la Giganta mountain range, where trails lead to prehistoric cave paintings.'

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
    hospitalName: 'UPHC Ghatikia',
    queueNum: 19,
    timingSlot: '9:00 AM - 9:20 AM',
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    hospitalName: 'UPHC Ghatikia',
    queueNum: 21,
    timingSlot: '9:00 AM - 9:20 AM',
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    hospitalName: 'UPHC Ghatikia',
    queueNum: 46,
    timingSlot: '9:00 AM - 9:20 AM',
  },
]
