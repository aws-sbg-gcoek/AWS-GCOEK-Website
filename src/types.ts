export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'upcoming' | 'past';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

export interface LearningPath {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  description: string;
  topics: string[];
}
