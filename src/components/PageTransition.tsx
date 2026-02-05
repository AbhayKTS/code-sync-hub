import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Custom easing matching CSS: cubic-bezier(0.33, 1, 0.68, 1)
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  showDivider?: boolean;
  showFoldShadow?: boolean;
}

// Page slide variants for sections
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -8,
    filter: 'brightness(0.9)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'brightness(1)',
    transition: {
      duration: 0.6,
      ease: pageFlipEase,
      staggerChildren: 0.08,
    },
  },
};

// Child element variants for staggered reveal
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

// Panel slide variants (for grid items)
const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

// Section divider component
function SectionDivider() {
  return (
    <motion.div
      className="section-divider my-8"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: pageFlipEase }}
    />
  );
}

// Paper fold shadow component
function PaperFoldShadow({ position = 'top' }: { position?: 'top' | 'bottom' }) {
  return (
    <div
      className={position === 'top' ? 'paper-fold-shadow' : 'paper-fold-shadow-bottom'}
      style={{ opacity: 1 }}
    />
  );
}

// Page edge component
function PageEdge({ side = 'left' }: { side?: 'left' | 'right' }) {
  return <div className={`page-edge page-edge-${side}`} />;
}

// Main section wrapper with page-flip animation
export function SectionWrapper({
  children,
  className = '',
  id,
  delay = 0,
  showDivider = false,
  showFoldShadow = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <>
      {showDivider && <SectionDivider />}
      <motion.section
        ref={ref}
        id={id}
        className={`section-page relative ${className}`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        style={{ 
          perspective: '1500px',
          transformStyle: 'preserve-3d',
        }}
        transition={{ delay }}
      >
        {showFoldShadow && <PaperFoldShadow position="top" />}
        <PageEdge side="left" />
        <PageEdge side="right" />
        {children}
        {showFoldShadow && <PaperFoldShadow position="bottom" />}
        <div className="page-corner" />
      </motion.section>
    </>
  );
}

// Animated child component for staggered reveal
export function AnimatedChild({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'article';
}) {
  const Component = motion[as];
  return (
    <Component className={className} variants={childVariants}>
      {children}
    </Component>
  );
}

// Panel component with slide animation (for grid items)
export function AnimatedPanel({
  children,
  className = '',
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={panelVariants}
      transition={{ delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Hook for custom scroll-based animations
export function usePageTransition() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return {
    ref,
    isInView,
    variants: sectionVariants,
    childVariants,
    panelVariants,
    pageFlipEase,
  };
}

// Export variants for external use
export { sectionVariants, childVariants, panelVariants, pageFlipEase };
