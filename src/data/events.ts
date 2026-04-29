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
  meetLink?: string;
  whatsappLink?: string;
  image?: string;
  isFeatured?: boolean;
  highlights?: string[];
  schedule?: EventScheduleItem[];
}

export const eventsData: AppEvent[] = [
  {
    id: 'portfolio-website-workshop',
    title: 'AI-Powered Portfolio Website Development Workshop',
    date: '02 May 2026',
    time: '10:00 AM – 2:00 PM',
    location: 'E Computer Lab (GCOEK New Campus)',
    desc: 'A hands-on workshop designed to help you build a professional personal portfolio from scratch using core web development skills — HTML, CSS, and JavaScript — while also leveraging AI tools to speed up development. By the end of the session, you\'ll have your own live portfolio website ready to share.',
    type: 'Workshop',
    status: 'upcoming',
    isFeatured: true,
    link: 'https://forms.gle/VNaYij16gsK8fbjy7',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    highlights: [
      'Hands-on session — bring your laptop if possible ',
      'Build a complete portfolio website from scratch',
      'Learn HTML, CSS & JavaScript fundamentals',
      'AI tools for faster development',
      'GitHub setup & live deployment included',
      'No prior coding experience required',
      'Refreshments will be provided',
      'Certificates of participation will be provided'
    ],
    schedule: [
      { time: 'Part 1', title: 'Web Development Basics', desc: 'Introduction to HTML, CSS, and JavaScript — the building blocks of every website. Speaker: Vidula.' },
      { time: 'Part 2', title: 'UI/UX Design Importance', desc: 'UI/UX principles for clean, modern, and user-friendly design. Speaker: Aniket.' },
      { time: 'Part 3', title: 'Portfolio Structure Planning', desc: 'How to structure a professional portfolio — Hero, About, Skills, Projects, and Contact sections. Speaker: Shubham.' },
      { time: 'Part 4', title: 'Hands-on Build (Web Dev + AI)', desc: 'Live build session combining web development skills with AI tools to build your portfolio faster and smarter. Speakers: Shardul & Yash.' },
      { time: 'Part 5', title: 'GitHub Setup & Push', desc: 'Setting up Git and GitHub, version control basics, and pushing your project to a repository. Speaker: Atharv.' },
      { time: 'Part 6', title: 'Deployment — Make it Live', desc: 'Deploy your portfolio website live so it\'s accessible to the world with a real URL. Speaker: Anas.' }
    ]
  },
  {
    id: 'seminar-genai-deep-learning',
    title: 'Seminar on Generative AI & Deep Learning',
    date: '13 Apr 2026',
    time: '2:00 PM – 4:00 PM',
    location: 'Seminar Hall (Old Building), GCOE Kolhapur',
    desc: 'A hands-on seminar exploring the cutting edge of Generative AI and Deep Learning. From GANs and VAEs to Transformers and LSTM networks, this session covers both theory and practical applications. Free to attend — certificates will be provided to all participants. Students are required to carry their laptops.',
    type: 'Seminar',
    status: 'past',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop',
    meetLink: 'https://meet.google.com/awa-ebnr-ogx',
    whatsappLink: 'https://chat.whatsapp.com/CUE3LjVIT0I1Yh4xPsUUJo',
    link: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/events/314246662/',
    highlights: [
      'Free entry — open to all students',
      'Certificates provided to all participants',
      'Hands-on session — bring your laptop',
      'Generative Deep Learning: Neural Style Transfer, VAE, GAN',
      'Deep Learning Models: MLP, LSTM, GRU, Transformer Networks',
      'Supervised Tasks: Image Denoising, Semantic Segmentation, Object Detection',

    ],
    schedule: [
      { time: '2:00 PM', title: 'Introduction to Generative AI', desc: 'Overview of Generative Deep Learning, Neural Style Transfer, Variational Autoencoders (VAE), and Generative Adversarial Networks (GAN).' },
      { time: '2:45 PM', title: 'Deep Learning Models', desc: 'Deep dive into Multilayer Perceptron (MLP), Long Short-Term Memory (LSTM), Gated Recurrent Unit (GRU), and Transformer Networks.' },
      { time: '3:30 PM', title: 'Hands-on: Supervised Tasks', desc: 'Practical session covering Image Denoising, Semantic Segmentation, and Object Detection using deep learning models.' },
      { time: '3:50 PM', title: 'Q&A & Certificate Distribution', desc: 'Open floor for questions followed by certificate distribution for all participants.' }
    ]
  },
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
