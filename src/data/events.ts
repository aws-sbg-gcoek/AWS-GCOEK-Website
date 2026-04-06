export interface EventScheduleItem {
  time: string;
  title: string;
  desc: string;
}

export interface AppEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  type: string;
  status: 'upcoming' | 'past';
  link?: string;
  image?: string;
  isFeatured?: boolean;
  highlights?: string[];
  schedule?: EventScheduleItem[];
}

export const eventsData: AppEvent[] = [
  {
    id: 'expert-lecture-cloud-aws',
    title: 'Expert Lecture on Cloud Computing & AWS',
    date: '27 Mar 2026',
    time: '11:00 AM',
    location: 'Seminar Hall, GCOE Kolhapur',
    desc: 'The Amazon Web Services (AWS) Cloud Club, Government College of Engineering Kolhapur (GCOEK) is pleased to present an expert session on Cloud Computing and Amazon Web Services (AWS). This session provides students with practical insights into cloud technologies and real-world industry applications.',
    type: 'Expert Lecture',
    status: 'past',
    image: 'https://i.ibb.co/tM6WTD8D/Green-White-Minimalis-Webinar-Digital-Marketing-Expert-Instagram-Post-3.png',
    link: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/events/313939623/',
    highlights: [
      'Introduction to Cloud Computing fundamentals',
      'Overview of Amazon Web Services (AWS)',
      'Insights into real-world cloud applications',
      'Career opportunities in Cloud & DevOps',
      'Guidance from an experienced industry professional'
    ],
    schedule: [
      { time: '11:00 AM', title: 'Speaker: Aditya Bhosale', desc: 'Senior Software Developer – AWS & DevOps. With over 10 years of industry experience, the speaker will share valuable knowledge, real-world use cases, and career guidance in cloud computing.' }
    ]
  },
  {
    id: 'intro-meetup',
    title: 'AWS Cloud Club GCOEK: Intro Meetup',
    date: '19 Jan 2026',
    time: '3:00 PM',
    location: 'Seminar Hall (Old Building)',
    desc: 'Our first in-person introductory meetup at the Seminar Hall (Old Building) to launch a student community focused on AWS Cloud, DevOps, and hands-on tech learning for all branches. Open to all curious students—no prior AWS experience required.',
    type: 'Meetup',
    status: 'past',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Introduction to the club’s vision and goals',
      'Core team selection through interactive group activities',
      'Opportunity to learn, lead, and build your resume through leadership roles'
    ]
  }
];
