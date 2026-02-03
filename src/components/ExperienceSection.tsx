import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Swords, Crown } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    description: 'Leading frontend architecture and mentoring junior developers',
    icon: Crown,
    color: 'from-action-gold to-pastel-yellow',
    borderColor: 'border-action-gold',
  },
  {
    year: '2023',
    title: 'AI Integration Specialist',
    description: 'Integrated AI features into web applications',
    icon: Rocket,
    color: 'from-primary to-pastel-pink',
    borderColor: 'border-primary',
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    description: 'Building responsive and interactive web experiences',
    icon: Briefcase,
    color: 'from-secondary to-pastel-blue',
    borderColor: 'border-secondary',
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals',
    icon: GraduationCap,
    color: 'from-accent to-pastel-lavender',
    borderColor: 'border-accent',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 font-manga text-[150px] text-manga-border leading-none pointer-events-none"
      >
        歴史
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-manga text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 03</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-accent text-3xl md:text-4xl">「</span>
            MY <span className="text-accent">JOURNEY</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-accent text-3xl md:text-4xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">The story so far...</p>
        </motion.div>

        {/* Manga-style vertical timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-action-gold via-primary via-secondary to-accent rounded-full" />
            {/* Animated glow */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px hsl(var(--primary))",
                  "0 0 20px hsl(var(--secondary))",
                  "0 0 10px hsl(var(--accent))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
          </div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <motion.div 
                whileHover={{ scale: 1.3 }}
                className={`absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${event.color} border-4 border-white md:-translate-x-1/2 z-10 shadow-lg`}
              />

              {/* Content card - manga panel style */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
              >
                <div className={`manga-panel p-6 relative border-l-4 ${event.borderColor}`}>
                  {/* Year badge - shout style */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                    className={`absolute -top-4 ${index % 2 === 0 ? 'right-4 md:right-4' : 'left-4 md:left-4'} px-5 py-1.5 bg-gradient-to-r ${event.color} rounded-xl font-manga text-lg border-2 border-manga-border shadow-manga`}
                  >
                    {event.year}
                  </motion.div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 shadow-manga`}>
                    <event.icon size={26} className="text-white drop-shadow" />
                  </div>

                  <h3 className="font-manga text-xl text-foreground mb-2 flex items-center gap-2">
                    <Swords size={18} className="text-muted-foreground" />
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  {/* Panel number */}
                  <div className="absolute bottom-2 right-4 font-manga text-5xl text-muted-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Decorative lines */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-manga-border/20 rounded-tr-lg" />
                </div>
              </motion.div>

              {/* Spacer */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}

          {/* End marker - dramatic */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute left-8 md:left-1/2 bottom-0 md:-translate-x-1/2"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(var(--primary))",
                  "0 0 40px hsl(var(--action-gold))",
                  "0 0 20px hsl(var(--primary))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-action-gold to-primary border-4 border-manga-border flex items-center justify-center"
            >
              <span className="font-manga text-white text-lg">→</span>
            </motion.div>
          </motion.div>
        </div>

        {/* To be continued - dramatic manga style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-block shout-bubble bg-gradient-to-r from-pastel-yellow via-white to-pastel-peach px-8 py-4">
            <p className="font-manga text-2xl md:text-3xl text-manga-border">
              TO BE CONTINUED...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}