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
    id: 'cloud-101-workshop',
    title: 'Cloud 101 Workshop',
    date: '28 Mar 2026',
    time: '10:00 AM - 1:00 PM',
    location: 'Main Auditorium, GCOEK',
    desc: 'Introduction to AWS core services (EC2, S3, RDS). Learn how to navigate the AWS console and launch your first resources in this hands-on session.',
    type: 'Workshop',
    status: 'upcoming',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSedvS9aXI3kVrDr2Hh5pK0-KLu3LYAO6MhUDsoyEuEvRq8v2g/viewform',
    schedule: [
      { time: '10:00 AM', title: 'Introduction to AWS Cloud Club', desc: 'Welcome address and overview of the club\'s vision and upcoming activities.' },
      { time: '10:30 AM', title: 'AWS Core Services Overview', desc: 'Deep dive into foundational services: EC2 (Compute), S3 (Storage), and RDS (Database).' },
      { time: '11:30 AM', title: 'Hands-on: Launching EC2', desc: 'Guided lab session where you will launch and connect to your first virtual server in the cloud.' },
      { time: '12:30 PM', title: 'Q&A and Networking', desc: 'Ask questions, meet fellow cloud enthusiasts, and discuss future project ideas.' }
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
