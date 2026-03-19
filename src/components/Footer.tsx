import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-cloud-secondary/50 border-t border-border-color mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <img 
                src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png" 
                alt="AWS Cloud Club GCOEK Logo" 
                className="h-16 sm:h-20 object-contain" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <span className="font-heading font-bold text-xl tracking-tight">
                AWS Cloud Club <span className="text-aws-orange">– GCOEK</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-md mb-6">
              A student-led community at Government College of Engineering Kolhapur focused on exploring cloud technologies, building real-world projects, and mastering AWS.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/AWSCloudClubGCOE" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-aws-orange transition-all duration-300">
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#ED1C40] transition-all duration-300">
                <Users className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#0A66C2] transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://www.instagram.com/awscc.gcoe.kolhapur?igsh=MWJ2dHNpeGxsZGw4Yg==" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#E1306C] transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="mailto:awscc.gcoe@gmail.com" className="text-text-secondary hover:text-text-primary transition-all duration-300">
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">About</Link>
              </li>
              <li>
                <Link to="/events" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Events</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Projects</Link>
              </li>
              <li>
                <Link to="/resources" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Resources</Link>
              </li>
              <li>
                <Link to="/team" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Team</Link>
              </li>
              <li>
                <Link to="/join" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Join</Link>
              </li>
              <li>
                <a href="https://forms.gle/FHRKXqKDebaHRoaH8" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-aws-orange transition-all duration-300 inline-block hover:translate-x-1">Submit feedback</a>
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
                <a href="mailto:awscc.gcoe@gmail.com" className="hover:text-aws-orange transition-colors">
                  awscc.gcoe@gmail.com
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
            <span>by Shardul & Anas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
