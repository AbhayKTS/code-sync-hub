import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    description: 'Leading frontend architecture and mentoring junior developers',
    icon: Rocket,
    color: 'bg-primary',
  },
  {
    year: '2023',
    title: 'AI Integration Specialist',
    description: 'Integrated AI features into web applications',
    icon: Award,
    color: 'bg-secondary',
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    description: 'Building responsive and interactive web experiences',
    icon: Briefcase,
    color: 'bg-accent',
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals',
    icon: GraduationCap,
    color: 'bg-pastel-mint',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-manga text-4xl md:text-5xl text-foreground inline-block relative">
            <span className="absolute -left-8 top-0 text-accent text-2xl">「</span>
            My Journey
            <span className="absolute -right-8 top-0 text-accent text-2xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">The story so far...</p>
        </motion.div>

        {/* Manga-style vertical timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-manga-border md:-translate-x-1/2 z-10" />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="manga-panel p-6 relative group hover:shadow-manga-lg transition-shadow">
                  {/* Year badge */}
                  <div className={`absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'left-4'} ${event.color} text-white px-4 py-1 rounded-full font-manga text-sm border-2 border-manga-border shadow-manga`}>
                    {event.year}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg ${event.color} flex items-center justify-center mb-3`}>
                    <event.icon size={24} className="text-white" />
                  </div>

                  <h3 className="font-manga text-lg text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {event.description}
                  </p>

                  {/* Panel number */}
                  <div className="absolute bottom-2 right-4 font-manga text-4xl text-muted-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute left-8 md:left-1/2 bottom-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-manga-border md:-translate-x-1/2 flex items-center justify-center"
          >
            <span className="font-manga text-white text-xs">→</span>
          </motion.div>
        </div>

        {/* To be continued text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center font-manga text-xl text-muted-foreground mt-8"
        >
          TO BE CONTINUED...
        </motion.p>
      </div>
    </section>
  );
}
