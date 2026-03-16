import { Star, Shield, Code, Calendar, Camera, Megaphone, DollarSign } from 'lucide-react';

export const departments = [
  {
    title: "Leadership Dept",
    icon: Star,
    color: "text-aws-orange",
    bgColor: "bg-aws-orange",
    hoverBorderColor: "group-hover:border-aws-orange",
    members: [
      { id: 'shardul-kolekar', name: 'Shardul Kolekar', role: 'Captain (President)', bio: 'Leading the AWS Cloud Club with a vision to build a strong cloud computing community at GCOEK.', skills: ['AWS', 'Leadership', 'Cloud Architecture'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'atharv-patil', name: 'Atharv Patil', role: 'Vice President', bio: 'Assisting in the strategic direction and operations of the club.', skills: ['Cloud Computing', 'Management', 'AWS'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'vidula', name: 'Vidula', role: 'General Secretary', bio: 'Managing club operations and ensuring smooth execution of all activities.', skills: ['Operations', 'Communication', 'Event Management'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'gopal', name: 'Gopal', role: 'Joint Secretary', bio: 'Supporting the General Secretary in daily club operations.', skills: ['Management', 'Coordination'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'shubham', name: 'Shubham', role: 'Joint Secretary', bio: 'Supporting the General Secretary in daily club operations.', skills: ['Management', 'Coordination'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
    ]
  },
  {
    title: "Technical Dept",
    icon: Code,
    color: "text-cloud-blue",
    bgColor: "bg-cloud-blue",
    hoverBorderColor: "group-hover:border-cloud-blue",
    members: [
      { id: 'diksha', name: 'Diksha', role: 'Technical Associate', bio: 'Passionate about cloud technologies and helping others learn.', skills: ['AWS', 'Python', 'Cloud Native'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'srushti', name: 'Srushti', role: 'Technical Associate', bio: 'Exploring the depths of AWS services and building robust solutions.', skills: ['AWS', 'JavaScript', 'Serverless'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'aditi', name: 'Aditi', role: 'Project Associate', bio: 'Leading technical projects and guiding members in hands-on learning.', skills: ['Project Management', 'AWS', 'React'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'anas', name: 'Anas', role: 'Project Associate', bio: 'Building scalable applications and mentoring peers in cloud development.', skills: ['AWS', 'Node.js', 'Docker'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
    ]
  },
  {
    title: "Events & Operations Dept",
    icon: Calendar,
    color: "text-arcade-purple",
    bgColor: "bg-arcade-purple",
    hoverBorderColor: "group-hover:border-arcade-purple",
    members: [
      { id: 'punam', name: 'Punam', role: 'Event Coordinator', bio: 'Organizing engaging and educational events for the community.', skills: ['Event Planning', 'Public Speaking', 'Coordination'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'chaitanya', name: 'Chaitanya', role: 'Logistics Lead', bio: 'Ensuring all events run smoothly with proper logistical support.', skills: ['Logistics', 'Management', 'Problem Solving'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'arya', name: 'Arya', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'palak', name: 'Palak', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'renuka', name: 'Renuka', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'suhani', name: 'Suhani', role: 'Event Coordination Associate', bio: 'Helping to plan and execute club events.', skills: ['Coordination', 'Teamwork'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
    ]
  },
  {
    title: "Media & Content Dept",
    icon: Camera,
    color: "text-pink-500",
    bgColor: "bg-pink-500",
    hoverBorderColor: "group-hover:border-pink-500",
    members: [
      { id: 'shekhar', name: 'Shekhar', role: 'Social Media & Content Lead', bio: 'Creating engaging content and managing our social media presence.', skills: ['Content Creation', 'Social Media', 'Writing'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'dhrupata', name: 'Dhrupata', role: 'Design & Branding Lead', bio: 'Designing visually appealing graphics and maintaining our brand identity.', skills: ['Graphic Design', 'Figma', 'Branding'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'vedika', name: 'Vedika', role: 'Social Media Associate', bio: 'Assisting in social media management and content distribution.', skills: ['Social Media', 'Communication'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
    ]
  },
  {
    title: "PR, Outreach & Corporate Dept",
    icon: Megaphone,
    color: "text-green-400",
    bgColor: "bg-green-400",
    hoverBorderColor: "group-hover:border-green-400",
    members: [
      { id: 'siddhi', name: 'Siddhi', role: 'PR Lead', bio: 'Managing public relations and outreach to grow our community.', skills: ['Public Relations', 'Networking', 'Communication'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
    ]
  },
  {
    title: "Finance & Marketing Dept",
    icon: DollarSign,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400",
    hoverBorderColor: "group-hover:border-yellow-400",
    members: [
      { id: 'atharva', name: 'Atharva', role: 'Marketing Lead', bio: 'Leading marketing campaigns to promote club activities.', skills: ['Marketing', 'Strategy', 'Analytics'], github: 'https://github.com', linkedin: 'https://linkedin.com' },
      { id: 'vaishnavi', name: 'Vaishnavi', role: 'Treasurer Associate', bio: 'Managing club finances and budgeting for events.', skills: ['Finance', 'Budgeting', 'Accounting'], github: 'https://github.com', linkedin: 'https://linkedin.com' }
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
