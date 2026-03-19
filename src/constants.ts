import { Event, TeamMember, Project, LearningPath } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'AWS Cloud Foundations Workshop',
    date: '2026-04-10',
    description: 'Learn the basics of AWS services and cloud architecture.',
    image: 'https://picsum.photos/seed/aws1/400/300',
    type: 'upcoming',
  },
  {
    id: '2',
    title: 'Serverless Computing Hackathon',
    date: '2026-03-05',
    description: 'Build serverless applications using AWS Lambda and API Gateway.',
    image: 'https://picsum.photos/seed/aws2/400/300',
    type: 'past',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Club President',
    photo: 'https://picsum.photos/seed/team1/200/200',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Technical Lead',
    photo: 'https://picsum.photos/seed/team2/200/200',
    linkedin: 'https://linkedin.com',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cloud-Based IoT Monitor',
    description: 'Real-time IoT sensor monitoring using AWS IoT Core and S3.',
    tech: ['AWS', 'IoT', 'Python'],
    github: 'https://github.com',
    image: 'https://picsum.photos/seed/proj1/600/400',
  },
  {
    id: '2',
    title: 'Serverless Web App',
    description: 'A fully serverless web application using React and AWS Amplify.',
    tech: ['React', 'AWS Amplify', 'DynamoDB'],
    github: 'https://github.com',
    image: 'https://picsum.photos/seed/proj2/600/400',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    level: 'Beginner',
    title: 'Cloud Fundamentals',
    description: 'Understand cloud concepts, AWS global infrastructure, and core services.',
    topics: ['Cloud Computing', 'AWS Basics', 'IAM'],
  },
  {
    level: 'Intermediate',
    title: 'Compute & Storage',
    description: 'Master EC2, S3, RDS, and basic networking.',
    topics: ['EC2', 'S3', 'VPC', 'RDS'],
  },
  {
    level: 'Advanced',
    title: 'DevOps & Serverless',
    description: 'Learn CI/CD, Lambda, API Gateway, and infrastructure as code.',
    topics: ['Lambda', 'CI/CD', 'Terraform', 'DynamoDB'],
  },
];
