import { useEffect, useCallback, useState } from 'react';

const sections = ['hero', 'about', 'projects', 'experience', 'contact'];

export function usePageNavigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    navigateToSection(currentSection + 1);
  }, [currentSection, navigateToSection]);

  const goToPrevious = useCallback(() => {
    navigateToSection(currentSection - 1);
  }, [currentSection, navigateToSection]);

  // Keyboard navigation: A = previous, D = next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Touch swipe detection
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger if horizontal swipe is dominant and significant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 80) {
        if (deltaX > 0) {
          goToPrevious(); // Swipe right = previous
        } else {
          goToNext(); // Swipe left = next
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNext, goToPrevious]);

  // Track scroll position to update current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    currentSection,
    currentSectionName: sections[currentSection],
    totalSections: sections.length,
    goToNext,
    goToPrevious,
    navigateToSection,
    isTransitioning,
    sections,
  };
}
