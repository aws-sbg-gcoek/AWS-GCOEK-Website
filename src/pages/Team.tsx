import { motion } from 'motion/react';
import { Linkedin, Github, Users, Star, Shield, Code, Calendar, Camera, Megaphone, DollarSign } from 'lucide-react';

export default function Team() {
  const departments = [
    {
      title: "Leadership Dept",
      icon: Star,
      color: "text-aws-orange",
      bgColor: "bg-aws-orange",
      hoverBorderColor: "group-hover:border-aws-orange",
      members: [
        { name: 'Shardul Kolekar', role: 'Captain (President)' },
        { name: 'Atharv Patil', role: 'Vice President' },
        { name: 'Vidula', role: 'General Secretary' },
        { name: 'Gopal', role: 'Joint Secretary' },
        { name: 'Shubham', role: 'Joint Secretary' }
      ]
    },
    {
      title: "Technical Dept",
      icon: Code,
      color: "text-cloud-blue",
      bgColor: "bg-cloud-blue",
      hoverBorderColor: "group-hover:border-cloud-blue",
      members: [
        { name: 'Diksha', role: 'Technical Associate' },
        { name: 'Srushti', role: 'Technical Associate' },
        { name: 'Aditi', role: 'Project Associate' },
        { name: 'Anas', role: 'Project Associate' }
      ]
    },
    {
      title: "Events & Operations Dept",
      icon: Calendar,
      color: "text-arcade-purple",
      bgColor: "bg-arcade-purple",
      hoverBorderColor: "group-hover:border-arcade-purple",
      members: [
        { name: 'Punam', role: 'Event Coordinator' },
        { name: 'Chaitanya', role: 'Logistics Lead' },
        { name: 'Arya', role: 'Event Coordination Associate' },
        { name: 'Palak', role: 'Event Coordination Associate' },
        { name: 'Renuka', role: 'Event Coordination Associate' },
        { name: 'Suhani', role: 'Event Coordination Associate' }
      ]
    },
    {
      title: "Media & Content Dept",
      icon: Camera,
      color: "text-pink-500",
      bgColor: "bg-pink-500",
      hoverBorderColor: "group-hover:border-pink-500",
      members: [
        { name: 'Shekhar', role: 'Social Media & Content Lead' },
        { name: 'Dhrupata', role: 'Design & Branding Lead' },
        { name: 'Vedika', role: 'Social Media Associate' }
      ]
    },
    {
      title: "PR, Outreach & Corporate Dept",
      icon: Megaphone,
      color: "text-green-400",
      bgColor: "bg-green-400",
      hoverBorderColor: "group-hover:border-green-400",
      members: [
        { name: 'Siddhi', role: 'PR Lead' }
      ]
    },
    {
      title: "Finance & Marketing Dept",
      icon: DollarSign,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400",
      hoverBorderColor: "group-hover:border-yellow-400",
      members: [
        { name: 'Atharva', role: 'Marketing Lead' },
        { name: 'Vaishnavi', role: 'Treasurer Associate' }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Meet the dedicated students leading the AWS Cloud Club at GCOEK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {departments.map((dept, deptIdx) => (
            <div key={deptIdx} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <dept.icon className={`w-8 h-8 ${dept.color} mr-3`} />
                  <h2 className="text-3xl font-heading font-bold">{dept.title}</h2>
                </div>
                <div className={`w-16 h-1 ${dept.bgColor} mx-auto rounded-full`}></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                {dept.members.map((member, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="glass-panel p-6 flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group"
                  >
                    <div className={`w-28 h-28 rounded-full bg-cloud-secondary border-2 border-border-color mb-4 overflow-hidden flex items-center justify-center ${dept.hoverBorderColor} transition-colors`}>
                      <img 
                        src={`https://picsum.photos/seed/${member.name.replace(' ', '')}/150/150`} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-1">{member.name}</h3>
                    <p className={`${dept.color} font-mono text-xs mb-4 min-h-[32px] flex items-center justify-center`}>{member.role}</p>
                    <div className="flex space-x-3 mt-auto">
                      <a href="#" className="text-text-secondary hover:text-cloud-blue transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-cloud-secondary/30 border-t border-border-color text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Users className="w-16 h-16 text-aws-orange mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-heading font-bold mb-4">Want to join the core team?</h2>
          <p className="text-lg text-text-secondary mb-8">
            We are always looking for passionate students to help lead the club and organize events.
          </p>
          <button className="pixel-button-secondary px-8 py-3">Apply for Leadership</button>
        </div>
      </section>
    </div>
  );
}
