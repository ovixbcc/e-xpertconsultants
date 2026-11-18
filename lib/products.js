export const PRODUCTS = [
  {
    slug: 'trustbee',
    name: 'TrustBee',
    logo: { src: '/images/trustbee-logo.png', width: 260, height: 70 },
    tag: 'FinTech · Escrow',
    tagline: 'Safe payments between buyers and sellers',
    short: 'Escrow and conditional payments for Bangladesh. Money is held safely until delivery is confirmed.',
    description:
      "TrustBee holds a buyer's payment until the seller delivers. Sellers send a conditional payment request, funds are held through a Bangladesh Bank licensed payment gateway, and money is released once delivery is confirmed. If something goes wrong, a neutral dispute process decides the outcome before any money moves.",
    features: [
      ['Conditional payment requests', 'Sellers send a request that sets out what will be delivered, the price and the terms.'],
      ['Verified buyers and sellers', 'Identity checks on both sides discourage fraud before money changes hands.'],
      ['Funds held in escrow', 'Payments are held through a licensed payment gateway, not by the seller.'],
      ['Release on confirmation', 'The seller is paid only after the buyer confirms delivery.'],
      ['Neutral dispute resolution', 'Funds stay locked while a mediator reviews evidence from both sides.'],
      ['Bank and wallet payouts', 'Sellers receive money in their bank account or mobile wallet.'],
    ],
    steps: ['Seller sends request', 'Buyer pays into escrow', 'Seller delivers', 'Buyer confirms, money released'],
    url: 'https://trustbee.com.bd/',
    cta: 'Visit trustbee.com.bd',
  },
  {
    slug: 'chaatro',
    page: '/chaatro/',
    name: 'Chaatro.com',
    logo: { src: '/images/chaatro-logo.png', width: 200, height: 43 },
    tag: 'EdTech · Mentoring marketplace',
    tagline: 'Find the right mentor for any goal',
    short: 'A mentoring marketplace that connects students with vetted mentors for live, online learning.',
    description:
      'Chaatro.com is a mentoring marketplace that connects students across Bangladesh with vetted mentors for admission tests, school subjects, skills and career guidance. Students compare mentors, book live sessions and learn from home, starting with its leading cadet college admission programme.',
    features: [
      ['Verified mentor profiles', 'Browse and compare mentors by subject, experience and teaching style.'],
      ['Book in a few taps', 'Choose a mentor and a time that fits the student’s schedule.'],
      ['One-to-one and group', 'One-to-one, small-group and subject batch sessions.'],
      ['Live, interactive classes', 'Students learn from home with real-time interaction.'],
      ['Bootcamps and bundles', 'Bootcamps, ebooks and course bundles for exam preparation.'],
      ['Cadet college admission', 'A leading programme with mentors who know the admission process.'],
    ],
    steps: ['Browse mentors', 'Book a session', 'Learn live', 'Track progress'],
    url: 'https://chaatro.com/',
    cta: 'Visit chaatro.com',
  },
  {
    slug: 'doctorsbook',
    name: 'DoctorsBook',
    logo: null,
    tag: 'HealthTech · Practice management',
    tagline: 'Everything a doctor needs to run a practice',
    short: 'Appointments, prescriptions, patient records, payments and a branded website, managed for doctors.',
    description:
      'DoctorsBook gives doctors and chambers one system for appointments, prescriptions, patient records and payments, plus a branded website on their own domain. e-Xpert sets it up and manages it end to end, so doctors can focus on patients.',
    features: [
      ['Online appointments', 'Patients choose a chamber, date and time, pay in advance and get a serial number.'],
      ['Digital prescriptions', 'Bangla or English, with medicine and test lists. Print or send as PDF.'],
      ['Patient records', 'Visit history, reports and past prescriptions in one profile.'],
      ['Chambers and schedules', 'Multiple chambers, fees, serial limits and leave days.'],
      ['Doctor’s own website', 'A branded site on the doctor’s own domain with degrees, fees and reviews.'],
      ['Online payments', 'bKash, Nagad, cards and bank, paid straight to the doctor’s account.'],
      ['SMS and reminders', 'Booking confirmations, visit reminders and follow-ups.'],
      ['Dashboard and reports', 'Income, patient flow and appointments at a glance.'],
    ],
    steps: ['Free demo', 'We set up site, domain and payments', 'We train your staff', 'We manage it for you'],
    url: null,
    isNew: true,
    cta: 'Request a free demo',
    ctaHref: '/?topic=DoctorsBook%20for%20doctors#contact',
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
