import { useState, useEffect } from 'react';

export default function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '-80px 0px -20% 0px', // adjustment for navbar offset and lower viewport threshold
      threshold: threshold,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
