import { motion } from 'framer-motion';
import { Code, GraduationCap, Rocket, Trophy, Users, CheckCircle2, Circle } from 'lucide-react';
import ChapterHeader from './ChapterHeader';
import { SystemPanel } from './SystemPanel';

const timelineEvents = [
  {
    year: '2026',
    title: 'ALMADOX CENTRAL',
    description: 'Current active quest. Building a futuristic student ecosystem with AI/Web3. The journey towards reaching peak efficiency continues.',
    icon: Rocket,
    status: 'ACTIVE',
    rank: 'S',
  },
  {
    year: 'APRIL 2026',
    title: 'VISIONX_VICTORY',
    description: 'WON VisionX hackathon (4th major win) with ShadowMesh Honeypot system. Advanced deceptive defense protocols successfully deployed.',
    icon: Trophy,
    status: 'CLEARED',
    rank: 'SSS',
    projectLink: 'ShadowMesh'
  },
  {
    year: 'FEB 2026',
    title: 'INNOVATHON_VICTORY',
    description: 'Survived 13 hackathons. Secured 3 wins and 1 special recognition. WON Innovathon 1.0 (SIIEDC, University of Jammu) with ALMADOX.',
    icon: Trophy,
    status: 'CLEARED',
    rank: 'SSS',
  },
  {
    year: '2025',
    title: 'HACKATHON_TRIALS',
    description: 'Survived 11 trials of the code-realm. Secured 2 primary victories and 1 special recognition. Experience points harvested.',
    icon: Trophy,
    status: 'CLEARED',
    rank: 'SS',
    links: [
      { label: 'Greet Gen', url: 'https://github.com/AbhayKTS/quick-greet-generator' },
    ],
    teammates: [
      { name: 'ansh-codr', url: 'https://github.com/ansh-codr' },
      { name: 'LittleCodr', url: 'https://github.com/LittleCodr' },
    ],
  },
  {
    year: '2024',
    title: 'AWAKENING_PROTOCOLS',
    description: 'Began exploring the world of code. First steps into the cultivation of digital arts. Basic logic circuits established.',
    icon: Code,
    status: 'CLEARED',
    rank: 'D',
  },
  {
    year: 'EDU',
    title: 'KNOWLEDGE_ABSORPTION',
    description: 'APS Nagrota → KV Nagrota → KV Baad Mathura → GLA University (Current Level: B.Tech CSE AI/ML).',
    icon: GraduationCap,
    status: 'CLEARED',
    rank: 'A',
    eduLinks: [
      { name: 'KV Nagrota', url: 'https://nagrota.kvs.ac.in/' },
      { name: 'KV Baad', url: 'https://mathurabaad.kvs.ac.in/' },
      { name: 'GLA University', url: 'https://student.glauniversity.in/Main/Index' }
    ]
  },
];

export default function ExperienceSection({ onViewProject }: { onViewProject?: (title: string) => void }) {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ChapterHeader number="CHAPTER 03" title="QUEST_ARCHIVES" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-manga font-black text-foreground mb-4 tracking-tighter uppercase">
            PATH <span className="text-primary font-outline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PROGRESS</span>
          </h2>
          <div className="inline-flex items-center gap-4 text-xs font-manga tracking-[0.4em] opacity-40">
            <span className="w-12 h-px bg-white/20" />
            <span>HISTORICAL_LOGS</span>
            <span className="w-12 h-px bg-white/20" />
          </div>
        </motion.div>

        <div className="relative space-y-12">
          {/* Timeline central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Indicator */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-20 shadow-[0_0_10px_var(--primary)]" />

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <SystemPanel
                  title={event.title}
                  subtitle={`${event.year} // RANK_${event.rank}`}
                  className="w-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <event.icon size={20} className="text-primary" />
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 text-[10px] font-manga border ${event.status === 'CLEARED' ? 'border-primary/50 text-primary' : 'border-yellow-500/50 text-yellow-500 animate-pulse'
                        }`}>
                        {event.status === 'CLEARED' ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                        {event.status}
                      </div>
                    </div>

                    <p className="text-sm font-body text-white/70 leading-relaxed">
                      {event.description}
                    </p>

                    {event.projectLink && onViewProject && (
                      <button
                        onClick={() => onViewProject(event.projectLink!)}
                        className="flex items-center gap-2 text-[10px] text-primary hover:text-white transition-colors font-manga tracking-widest px-3 py-1.5 bg-primary/10 border border-primary/20 hover:bg-primary/30 group"
                      >
                        <span>VIEW_{event.projectLink.toUpperCase()}_LOGS</span>
                        <Rocket size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    )}

                    {event.eduLinks && (
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                        <GraduationCap size={12} className="opacity-40 text-primary" />
                        {event.eduLinks.map(link => (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-primary hover:text-white transition-colors font-manga tracking-widest px-2 py-1 bg-primary/10 border border-primary/20 hover:bg-primary/30"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {event.teammates && (
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                        <Users size={12} className="opacity-40" />
                        {event.teammates.map(mate => (
                          <a key={mate.name} href={mate.url} className="text-[10px] text-primary hover:underline">@{mate.name}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </SystemPanel>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ending Marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <div className="w-12 h-12 border-2 border-white/10 flex items-center justify-center font-manga text-xl text-primary/40">
            ???
          </div>
          <p className="font-manga text-sm tracking-[0.5em] opacity-40 uppercase italic">To_Be_Continued_Protocols</p>
        </motion.div>
      </div>
    </section>
  );
}
