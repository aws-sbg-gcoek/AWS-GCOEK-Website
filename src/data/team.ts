import { Star, Shield, Code, Calendar, Camera, Megaphone, DollarSign } from 'lucide-react';

export const departments = [
  {
    title: "Leadership Dept",
    icon: Star,
    color: "text-arcade-purple",
    bgColor: "bg-arcade-purple",
    hoverBorderColor: "group-hover:border-arcade-purple",
    members: [
      { id: 'varsha-gaikwad', name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator', bio: 'Guiding the AWS Student Builder Group and supporting student initiatives at GCOEK.', skills: ['Mentorship', 'Leadership', 'Cloud Computing'], image: 'https://i.ibb.co/xqY0bSS3/Varsha-maam.jpg' },
      { 
        id: 'shardul-kolekar', 
        name: 'Shardul Kolekar', 
        role: 'Captain (President)', 
        bio: 'Leading the AWS Student Builder Group with a vision to build a strong cloud computing community at GCOEK. Passionate about serverless architectures and cloud-native development.', 
        skills: ['AWS', 'Leadership', 'Cloud Architecture', 'Serverless', 'React', 'Node.js'], 
        email: 'mailto:kolekarshardul23@gmail.com', 
        linkedin: 'https://www.linkedin.com/in/shardulkolekar', 
        github: 'https://github.com/shardulkolekar',
        twitter: 'https://twitter.com/shardulkolekar',
        image: 'https://i.ibb.co/vCkgggZW/Whats-App-Image-2026-03-15-at-4-00-18-PM.jpg',
        certifications: [
          { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
          { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' }
        ],
        projects: [
          {
            name: 'Cloud Club Portal',
            desc: 'Developed the official website and member portal for the AWS Student Builder Group using React, Tailwind CSS, and AWS Amplify.',
            tags: ['React', 'AWS Amplify', 'Tailwind CSS'],
            link: '#'
          },
          {
            name: 'Serverless Image Processor',
            desc: 'Built an event-driven architecture using S3, Lambda, and EventBridge to automatically resize and optimize uploaded images.',
            tags: ['AWS Lambda', 'S3', 'EventBridge', 'Node.js'],
            link: '#'
          }
        ]
      },
      { id: 'vidula', name: 'Vidula Powar', role: 'General Secretary', bio: 'Managing club operations and ensuring smooth execution of all activities.', skills: ['Operations', 'Communication', 'Event Management'], email: 'mailto:powarvidula11@gmail.com', linkedin: 'https://www.linkedin.com/in/vidula-p-372734294', image: 'https://i.ibb.co/5W0h4c8y/Whats-App-Image-2026-03-17-at-9-01-47-AM.jpg' },
      { id: 'gopal', name: 'Gopal Lakwal', role: 'Joint Secretary', bio: 'Supporting the General Secretary in daily club operations.', skills: ['Management', 'Coordination'], email: 'mailto:gopallakwal526@gmail.com', linkedin: 'https://www.linkedin.com/in/gopal-lakwal-461467383', image: 'https://i.ibb.co/4wBwTHtx/file-000000002ef871fab1e8c53a2708be68-Gopal-lakwal.png' },
      { id: 'shubham', name: 'Shubham Sonwane', role: 'Joint Secretary', bio: 'Supporting the General Secretary in daily club operations.', skills: ['Management', 'Coordination'], email: 'mailto:sonwaneshubham38@gmail.com', linkedin: 'https://www.linkedin.com/in/shubham-sonwane-b9b056312', image: 'https://i.ibb.co/LDDfM6hn/Gemini-Generated-Image-nbpxu8nbpxu8nbpx-Shubham-Sonwane.png' }
    ]
  },
  {
    title: "Technical Dept",
    icon: Code,
    color: "text-cloud-blue",
    bgColor: "bg-cloud-blue",
    hoverBorderColor: "group-hover:border-cloud-blue",
    members: [
      { id: 'atharv-patil', name: 'Atharv Patil', role: 'Technical Associate', bio: 'Assisting in the strategic direction and operations of the club.', skills: ['Cloud Computing', 'Management', 'AWS'], email: 'mailto:atharvpatil1808@gmail.com', linkedin: 'https://linkedin.com', image: 'https://i.ibb.co/wZYNhv1R/Whats-App-Image-2026-04-18-at-1-54-07-PM.jpg' },
      {id:'Yash',
      name: 'Yash Nawal',
      role :'Technical Associate',
      bio :'Passionate about cloud computing and eager to contribute to the club\'s technical initiatives.',
      skills :['AWS', 'Python', 'Cloud Native'],
      email :'mailto:yashsanjaynawal810@gmail.com',
      linkedin :'https://www.linkedin.com/in/yash-nawal-51b5a228b/',
      image :'https://i.ibb.co/gFrBmXJv/Whats-App-Image-2026-04-18-at-8-14-43-AM-2.jpg' 

      },

      { id: 'diksha', name: 'Diksha Remulkar', role: 'Technical Associate', bio: 'Passionate about cloud technologies and helping others learn.', skills: ['AWS', 'Python', 'Cloud Native'], email: 'mailto:diksharemulkar@gmail.com', linkedin: 'https://www.linkedin.com/in/diksha-remulkar-4b76a8338', image: 'https://i.ibb.co/DfZngMw0/1773671193720-Diksha-Remulkar.png' },
      { id: 'srushti', name: 'Srushti Shinde', role: 'Technical Associate', bio: 'Exploring the depths of AWS services and building robust solutions.', skills: ['AWS', 'JavaScript', 'Serverless'], email: 'mailto:srushti4326@gmail.com', linkedin: 'https://www.linkedin.com/in/srushti-shinde-692326338', image: 'https://i.ibb.co/whnVPdBh/IMG-20260316-142303-Srushti-Shinde.png' },
      { id: 'aditi', name: 'Aditi', role: 'Project Associate', bio: 'Leading technical projects and guiding members in hands-on learning.', skills: ['Project Management', 'AWS', 'React'], email: 'mailto:jadhavaditi8176@gmail.com', linkedin: 'https://www.linkedin.com/in/aditi-jadhav-622843388', image: 'https://i.ibb.co/DBRgNyb/aditi.jpg' },
      { id: 'anas', name: 'Anas Pathan', role: 'Project Associate', bio: 'Building scalable applications and mentoring peers in cloud development.', skills: ['AWS', 'Node.js', 'Docker'], email: 'mailto:pathananas2007@gmail.com', linkedin: 'https://www.linkedin.com/in/anas-pathan-91a6b3368', image: 'https://i.ibb.co/V0GgpdmG/anas.jpg' }
      
    ]

  },
  {
    title: "Events & Operations Dept",
    icon: Calendar,
    color: "text-arcade-purple",
    bgColor: "bg-arcade-purple",
    hoverBorderColor: "group-hover:border-arcade-purple",
    members: [
      { id: 'punam', name: 'Punam Age', role: 'Event Coordinator', bio: 'Organizing engaging and educational events for the community.', skills: ['Event Planning', 'Public Speaking', 'Coordination'], email: 'mailto:punamage123@gmail.com', linkedin: 'https://www.linkedin.com/in/punam-age-5219a52b6', image: 'https://i.ibb.co/spsQqkZ3/Professional-passport-style-headshot-with-smile-1-Punam-age.png' },
      { id: 'chaitanya', name: 'Chaitanya', role: 'Logistics Lead', bio: 'Ensuring all events run smoothly with proper logistical support.', skills: ['Logistics', 'Management', 'Problem Solving'], email: 'mailto:chhaitanyaaz@gmail.com', linkedin: 'https://linkedin.com', image: 'https://i.ibb.co/KjLPBGnt/chaitanya.png' },
      { id: 'arya', name: 'Arya Patil', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], email: 'mailto:aryap010406@gmail.com', linkedin: 'https://www.linkedin.com/in/arya-patil-4b85b73a5', image: 'https://i.ibb.co/vCRQfL3T/IMG-20260316-WA0026-Arya-Patil-1.jpg' },
      { id: 'palak', name: 'Kaya Vedi', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], email: 'mailto:kayavedi7@gmail.com', linkedin: 'https://linkedin.com', image: 'https://i.ibb.co/DPczYCS5/Professional-headshot-with-warm-smile-Kaya-Vedi.png' },

      { id: 'suhani', name: 'Suhani Varma', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], email: 'mailto:suhanivarma33@gmail.com', linkedin: 'https://www.linkedin.com/in/suhani-varma-09810a214', image: 'https://i.ibb.co/7t7JXFhg/IMG-20260316-WA0011-Suhani-Varma.jpg' }
    ]
  },
  {
    title: "Media & Content Dept",
    icon: Camera,
    color: "text-pink-500",
    bgColor: "bg-pink-500",
    hoverBorderColor: "group-hover:border-pink-500",
    members: [
      { id: 'shekhar', name: 'Shekhar', role: 'Social Media & Content Lead', bio: 'Creating engaging content and managing our social media presence.', skills: ['Content Creation', 'Social Media', 'Writing'], email: 'mailto:varekarshekhar@gmail.com', linkedin: 'https://www.linkedin.com/in/shekhar-varekar-530b97384', image: 'https://i.ibb.co/HpV9qJwH/shekhar.jpg' },
      {
        id: 'amruta',
        name: 'Amruta Kole',
        role: 'Social Media Associate',
        bio: 'Assisting in content creation and social media management to enhance our online presence.',
        skills: ['Content Creation', 'Social Media', 'Graphic Design'], 
        email: 'mailto:koleamruta836@gmail.com',
        linkedin: 'https://www.linkedin.com/in/amruta-kole-907958388',
        image: 'https://i.ibb.co/C5g4Mm7x/Whats-App-Image-2026-04-18-at-8-14-43-AM.jpg'
      },

      { id: 'dhrupata', name: 'Dhrupata Wankhede', role: 'Design & Branding Lead', bio: 'Designing visually appealing graphics and maintaining our brand identity.', skills: ['Graphic Design', 'Figma', 'Branding'], email: 'mailto:dhrupatawankhede@gmail.com', linkedin: 'https://www.linkedin.com/in/dhrupata-wankhede-b68b323a3', image: 'https://i.ibb.co/9mS6qrPr/IMG-20260316-WA0033-Dhrupata-Wankhede.jpg' },
      { id: 'vedika', name: 'Vedika Desai', role: 'Social Media Associate', bio: 'Assisting in social media management and content distribution.', skills: ['Social Media', 'Communication'], email: 'mailto:vedikad21@gmail.com', linkedin: 'https://www.linkedin.com/in/vedika-desai-8095b732a', image: 'https://i.ibb.co/qY73yh3F/Scanned-20260316-2043-Vedika-Desai.jpg' },

      { 
  id: 'aniket-mohite',
  name: 'Aniket Mohite',
  role: 'Design and graphics lead',
  bio: 'Contributing to design and visual content for the club.',
  skills: ['Design', 'Creativity', 'Branding'],
  email: 'mailto:mohiteaniket248@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aniket-mohite-7082b3289',
  image: 'https://i.ibb.co/TBNp3tJm/Whats-App-Image-2026-04-12-at-6-27-55-PM.jpg'
}

      
      
    ]
  },
  {
    title: "PR, Outreach & Corporate Dept",
    icon: Megaphone,
    color: "text-green-400",
    bgColor: "bg-green-400",
    hoverBorderColor: "group-hover:border-green-400",
    members: [
      { id: 'siddhi', name: 'Siddhi', role: 'PR Lead', bio: 'Managing public relations and outreach to grow our community.', skills: ['Public Relations', 'Networking', 'Communication'], email: 'mailto:siddhiagedkar22@gmail.com', linkedin: 'https://www.linkedin.com/in/siddhi-agedkar-35b042385', image: 'https://i.ibb.co/4RnZt8mK/IMG-20260316-WA0049-Shruti-Paul-41.jpg' },
      { id: 'renuka', name: 'Renuka', role: 'PR Lead', bio: 'Managing public relations and outreach to grow our community.', skills: ['Public Relations', 'Networking', 'Communication'], email: 'mailto:renukabansode592@gmail.com', linkedin: 'https://www.linkedin.com/in/renuka-bansode-', image: 'https://i.ibb.co/MkRr4m0Q/renuka.jpg' }
    ]
  },
  {
    title: "Finance & Marketing Dept",
    icon: DollarSign,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400",
    hoverBorderColor: "group-hover:border-yellow-400",
    members: [
      { id: 'atharva', name: 'Atharva Shriwas', role: 'Marketing Lead', bio: 'Leading marketing campaigns to promote club activities.', skills: ['Marketing', 'Strategy', 'Analytics'], email: 'mailto:atharvashriwas8811@gmail.com', linkedin: 'https://www.linkedin.com/in/atharva-shriwas-11b167357', image: 'https://i.ibb.co/4ZvK9Bpt/Atharva-Shriwas.png' },
      { id: 'tushant', name: 'Tushant Tagade', role: 'Marketing Lead', bio: 'Leading marketing campaigns to promote club activities.', skills: ['Marketing', 'Strategy', 'Analytics'], email: 'mailto:awssbggcoek@gmail.com', linkedin: 'https://linkedin.com', image: 'https://i.ibb.co/zWbTwkBX/tushant-Tagade.jpg' },
            
      {
        id:"Ankita",
        name:'Ankita  Pujari ',
        role :' Marketing Associate ',
        bio :'Assisting in marketing campaigns and promotional activities.',
        skills :['Marketing', 'Analytics', 'Content Creation'],
        email :'mailto:ankitapujari711@gmail.com ',
        linkedin :' https://www.linkedin.com/in/ankita-pujari-821230398',
        // image:'https://i.ibb.co/C5g4Mm7x/Whats-App-Image-2026-04-18-at-8-14-43-AM.jpg'
        image:'https://i.ibb.co/VcnZRZKS/Whats-App-Image-2026-04-18-at-9-02-28-PM.jpg'
        },

      { id: 'apeksha', name: 'Apeksha Khodave', role: 'Treasurer', bio: 'Managing club finances and budgeting for events.', skills: ['Finance', 'Budgeting', 'Accounting'], email: 'mailto:apekshakhodave1106@gmail.com', linkedin: 'https://www.linkedin.com/in/apeksha-khodave-9644b32b9?utm_source=share_via&utm_content=profile&utm_medium=member_android', image: 'https://i.ibb.co/tw7N7xCJ/Apeksha-Khodave.jpg' },
      { id: 'vaishnavi', name: 'Vaishnavi', role: 'Treasurer Associate', bio: 'Managing club finances and budgeting for events.', skills: ['Finance', 'Budgeting', 'Accounting'], email: 'mailto:awssbggcoek@gmail.com', linkedin: 'https://linkedin.com', image: 'https://i.ibb.co/JRBSNVZL/Whats-App-Image-2026-04-12-at-11-02-42-PM.jpg' }
    ]
  }
];

export const getAllMembers = () => {
  return departments.flatMap(dept => 
    dept.members.map(member => ({
      ...member,
      department: dept.title,
      deptColor: dept.color,
      deptBgColor: dept.bgColor
    }))
  );
};

export const getMemberById = (id: string) => {
  return getAllMembers().find(member => member.id === id);
};
