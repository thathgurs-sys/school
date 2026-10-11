export interface ProgramInfo {
  id: string;
  title: string;
  age: string;
  accentColor: string;
  badgeBg: string;
  badgeColor: string;
  iconBg: string;
  tagline: string;
  shortDesc: string;
  timings: string;
  teacherRatio: string;
  overview: string;
  keySkills: string[];
  dailyActivities: string[];
  inclusions: string[];
  monthlyFeeEstimate: string;
}

export const PROGRAMS_DATA: ProgramInfo[] = [
  {
    id: 'playgroup',
    title: 'Play Group',
    age: '1.5 – 2.5 Years',
    accentColor: '#059669', // Emerald
    badgeBg: '#ECFDF5',
    badgeColor: '#065F46',
    iconBg: '#D1FAE5',
    tagline: 'First Step into Joyful Wonder',
    shortDesc: 'Fun activities to explore, play and learn.',
    timings: '9:00 AM – 11:30 AM (Mon - Fri)',
    teacherRatio: '1 : 6 (With dedicated loving nanny support)',
    overview: 'Our Play Group provides a smooth, gentle transition from home to school. We emphasize sensory stimulation, free motor movement, basic linguistic songs, and social comfort in a safe, affectionate nest.',
    keySkills: [
      'Sensory tactile exploration',
      'Basic social smiling & parallel play',
      'Gross motor balance & tumbling',
      'Musical rhythms & action nursery rhymes',
      'Gentle toilet & hygiene readiness'
    ],
    dailyActivities: [
      'Circle time & morning greeting songs',
      'Kinetic sand, water play & soft clay molding',
      'Picture storybook puppet theater',
      'Organic finger painting & color splashing',
      'Healthy fruit-time snack table'
    ],
    inclusions: [
      'Mid-morning fresh fruit snack & milk',
      'Sanitized diaper-changing pod assistance',
      'Daily mobile app photo diary for parents',
      'Montessori tactile play kit'
    ],
    monthlyFeeEstimate: '₹4,500 / month'
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: '2.5 – 3.5 Years',
    accentColor: '#D97706', // Amber
    badgeBg: '#FFFBEB',
    badgeColor: '#92400E',
    iconBg: '#FEF3C7',
    tagline: 'Fostering Curiosity & Self-Expression',
    shortDesc: 'Building communication, creativity and skills.',
    timings: '8:45 AM – 12:15 PM (Mon - Fri)',
    teacherRatio: '1 : 8 (Teacher + Assistant)',
    overview: 'In Nursery, children discover their voice, make their first best friends, and build pre-academic foundations through joyous play-way and Montessori apparatus.',
    keySkills: [
      'Verbal storytelling & vocabulary boost',
      'Pre-math counting, shapes & color sorting',
      'Fine motor pincer grip development',
      'Empathy, sharing & collaborative group play',
      'Independent shoe wearing & lunchbox habits'
    ],
    dailyActivities: [
      'Phonics listening & rhythm games',
      'Montessori cylinder blocks & sensory puzzles',
      'Outdoor nature scavenger walks',
      'Role-play pretend kitchen & doctor corner',
      'Show-and-tell audio self-expression'
    ],
    inclusions: [
      'Nutritious cooked snack & juice',
      'Complete art and sensory stationery materials',
      'Monthly developmental milestone scorecard',
      'Quarterly doctor & dentist checkup'
    ],
    monthlyFeeEstimate: '₹5,200 / month'
  },
  {
    id: 'kindergarten',
    title: 'LKG / UKG',
    age: '3.5 – 5.5 Years',
    accentColor: '#7C3AED', // Purple
    badgeBg: '#FAF5FF',
    badgeColor: '#5B21B6',
    iconBg: '#EDE9FE',
    tagline: 'Ready for the Big World with Confidence',
    shortDesc: 'Preparing for school with confidence.',
    timings: '8:30 AM – 1:00 PM (Mon - Fri)',
    teacherRatio: '1 : 10 (Subject specialist educators)',
    overview: 'Our Kindergarten program builds solid literacy, numeracy, critical inquiry, and emotional resilience so children excel in formal primary school admissions.',
    keySkills: [
      'Jolly Phonics, sight words & early reading',
      'Mental math, number bonds & pattern logic',
      'Hands-on mini science experiments',
      'Public speaking & recitation eloquence',
      'Hindi / Regional language conversational warmth'
    ],
    dailyActivities: [
      'Interactive phonics reading lab',
      'Stem building blocks & simple robotics gears',
      'Yoga, physical agility & mini sports games',
      'Stage drama & cultural festival showcases',
      'Self-directed inquiry project journals'
    ],
    inclusions: [
      'Nutritious mid-day warm meal',
      'Pre-primary formal school admission interview prep',
      'Full graduation kit and memory yearbook',
      'Continuous parent-teacher portfolio reviews'
    ],
    monthlyFeeEstimate: '₹5,800 / month'
  },
  {
    id: 'daycare',
    title: 'Day Care & After-School',
    age: '1.0 – 8.0 Years',
    accentColor: '#0284C7', // Sky Blue
    badgeBg: '#F0F9FF',
    badgeColor: '#075985',
    iconBg: '#E0F2FE',
    tagline: 'Warm, Loving Second Home for Busy Parents',
    shortDesc: 'Safe after-school haven with warm meals & rest.',
    timings: '8:00 AM – 6:30 PM (Flexible Half & Full Day)',
    teacherRatio: '1 : 5 (Caregivers & homework tutors)',
    overview: 'Designed for working parents who want unconditional peace of mind. We provide sanitized sleeping pods, warm homestyle food, homework assistance, and enriching hobby classes.',
    keySkills: [
      'Routine adherence & disciplined rest cycles',
      'Homework completion & reading habits',
      'Creative hobby exploration (dance, chess, art)',
      'Social emotional security & warm companionship',
      'Table manners & healthy nutrition habits'
    ],
    dailyActivities: [
      'Warm freshly prepared organic lunch & evening snacks',
      'Cozy nap time in air-purified quiet room',
      'Homework tutor supervision',
      'Evening music, classical dance or yoga workshop',
      'Free lawn play in fenced green garden'
    ],
    inclusions: [
      'All meals: Breakfast, Hot Lunch, Evening Snack & Milk',
      'Real-time CCTV app streaming for registered parents',
      'Individual sanitized crib/bedding set with laundry',
      'Emergency pediatric tie-up on call'
    ],
    monthlyFeeEstimate: '₹6,500 – ₹9,000 / month'
  }
];

export const PILLARS_DATA = [
  {
    id: 'safety',
    title: 'Safe & Secure Environment',
    desc: 'Child safety and hygiene are our top priorities.',
    iconType: 'heart',
    accent: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FEE2E2',
    details: 'Equipped with live CCTV cameras in all rooms, biometric access controls, rounded corner furniture, anti-skid flooring, and certified pediatric first aid.'
  },
  {
    id: 'holistic',
    title: 'Holistic Development',
    desc: 'Focus on cognitive, social, emotional & physical growth.',
    iconType: 'sprout',
    accent: '#15803D',
    bg: '#F0FDF4',
    border: '#DCFCE7',
    details: 'A multi-sensory curriculum blending cognitive reasoning, gross and fine motor coordination, artistic flair, and emotional self-regulation.'
  },
  {
    id: 'educators',
    title: 'Experienced Educators',
    desc: 'Trained and caring teachers who nurture with love.',
    iconType: 'star',
    accent: '#D97706',
    bg: '#FFFBEB',
    border: '#FEF3C7',
    details: 'Every teacher holds ECCE (Early Childhood Care and Education) credentials, backed by continuous workshops in positive behavior management and loving empathy.'
  },
  {
    id: 'play',
    title: 'Play-Based Learning',
    desc: 'Learning through play, exploration & creativity.',
    iconType: 'blocks',
    accent: '#2563EB',
    bg: '#EFF6FF',
    border: '#DBEAFE',
    details: 'Montessori-inspired wooden manipulation toys, pretend play corners, and sensory bins ensure learning happens naturally through laughter and wonder.'
  }
];

export const DAILY_ROUTINE = [
  { time: '08:30 AM', title: 'Warm Welcome & Circle Time', desc: 'Greeting hugs, morning prayer, weather wheel check, and energizing rhymes.' },
  { time: '09:30 AM', title: 'Montessori & Sensory Exploration', desc: 'Wooden puzzles, sorting trays, language cards, and kinetic play.' },
  { time: '10:30 AM', title: 'Nutritious Fruit & Snack Break', desc: 'Fresh organic seasonal fruits, milk, handwashing and table etiquette.' },
  { time: '11:15 AM', title: 'Creative Arts, Music & Storytelling', desc: 'Finger painting, puppet shows, storytelling, and rhythm instruments.' },
  { time: '12:00 PM', title: 'Outdoor Gross Motor Play', desc: 'Lawn games, mini cycles, sandbox castles, and balance beams.' },
  { time: '12:45 PM', title: 'Wrap-Up & Half-Day Dismissal', desc: 'Reflections, star stickers, goodbyes, and safe handoff to parents.' },
  { time: '01:15 PM', title: 'Daycare Warm Lunch & Nap Time', desc: 'Home-cooked wholesome hot meal followed by restful sleep in cozy quiet pods.' },
  { time: '04:00 PM', title: 'Evening Milk, Hobby & Homework Club', desc: 'Fresh evening snack, tutor-assisted homework, and dance/craft activities.' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priyanka & Rahul Sharma',
    child: 'Parents of Aarav (Age 3.5, Nursery)',
    text: 'Enrolling Aarav at Maatri Chhaya was the best decision we made. Within 3 months, his speech vocabulary and social confidence blossomed. The teachers treat every child like their own family.',
    rating: 5,
    location: 'Green Park, New Delhi'
  },
  {
    id: 2,
    name: 'Dr. Megha Kapoor',
    child: 'Mother of Ananya (Age 2, Play Group & Day Care)',
    text: 'As a working doctor, leaving my toddler was tough. But the clean hygienic environment, real-time updates, and loving caregivers gave me 100% peace of mind. Ananya runs inside happily every single morning!',
    rating: 5,
    location: 'Hauz Khas, New Delhi'
  },
  {
    id: 3,
    name: 'Vikramaditya Sengupta',
    child: 'Father of Kabir (Age 5, Kindergarten)',
    text: 'Kabir got selected into Delhi’s top primary school on his very first attempt! His phonics foundation and logic skills built here at Maatri Chhaya made all the difference. Highly recommended!',
    rating: 5,
    location: 'Safdarjung Enclave, New Delhi'
  }
];

export const FAQS = [
  {
    q: 'What is the age criteria for admission at Maatri Chhaya?',
    a: 'We welcome children from 1.5 to 2.5 years for Play Group, 2.5 to 3.5 years for Nursery, 3.5 to 5.5 years for Kindergarten (LKG & UKG), and 1 to 8 years for our Day Care and After-School facility.'
  },
  {
    q: 'Can parents monitor their children through CCTV cameras?',
    a: 'Yes, absolutely! We provide secure, real-time CCTV mobile app access to registered parents so you can check in on your little one anytime during school and day care hours.'
  },
  {
    q: 'What is the teacher-to-child ratio in classrooms?',
    a: 'We maintain an intimate ratio of 1:6 in Play Group, 1:8 in Nursery, and 1:10 in Kindergarten. In addition, every room has a trained full-time nanny assistant for diapering, hygiene, and feeding.'
  },
  {
    q: 'Are meals and snacks provided by the school?',
    a: 'Yes! We serve freshly prepared, organic, kid-friendly vegetarian snacks, seasonal fruits, warm nutritious lunches, and evening milk prepared in our licensed hygienic in-house kitchen.'
  },
  {
    q: 'What are the safety and medical emergency arrangements?',
    a: 'Our campus is 100% child-proofed with soft corners, fire-safety compliance, sanitization every 3 hours, and biometric gates. All staff are certified in Pediatric CPR & First Aid, and we have an on-call pediatrician tie-up.'
  },
  {
    q: 'How can we schedule a campus visit and meet the principal?',
    a: 'You can easily click the "Enquire Now" or "Book a Tour" button on this website, or call us directly at +91 98765 43210. Campus walk-throughs are arranged Monday through Saturday between 9:00 AM and 5:00 PM.'
  }
];
