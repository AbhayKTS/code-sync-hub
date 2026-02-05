import { motion } from 'framer-motion';

interface ChapterHeaderProps {
  number: string;
  title: string;
  decorated?: boolean;
}

// Page-flip easing
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

export default function ChapterHeader({ number, title, decorated = true }: ChapterHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: pageFlipEase }}
      className={`chapter-header ${decorated ? 'chapter-header-decorated' : ''}`}
    >
      <span className="chapter-number">{number}</span>
      <h2 className="chapter-title">{title}</h2>
    </motion.div>
  );
}
