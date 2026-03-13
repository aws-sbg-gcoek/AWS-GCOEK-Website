import { Link } from 'react-router-dom';
import { Cloud, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cloud-secondary/50 border-t border-border-color mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <Cloud className="h-8 w-8 text-aws-orange" />
              <span className="font-heading font-bold text-xl tracking-tight">
                AWS Cloud Club <span className="text-aws-orange">– GCEK</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-md mb-6">
              A student-led community at Government College of Engineering Kolhapur focused on exploring cloud technologies, building real-world projects, and mastering AWS.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-aws-orange transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-cloud-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-arcade-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@awsclubgcek.edu" className="text-text-secondary hover:text-text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-aws-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-text-secondary hover:text-aws-orange transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-aws-orange transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/resources" className="text-text-secondary hover:text-aws-orange transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/join" className="text-text-secondary hover:text-aws-orange transition-colors">Join</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-text-primary">Contact</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Government College of Engineering,</li>
              <li>Vidyanagar, Kolhapur</li>
              <li>Maharashtra 416004</li>
              <li className="pt-2">
                <a href="mailto:contact@awsclubgcek.edu" className="hover:text-aws-orange transition-colors">
                  contact@awsclubgcek.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-color mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} AWS Cloud Club GCOEK. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-text-secondary">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>by the Tech Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
