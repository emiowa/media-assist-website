import { useEffect } from 'react';

const useIntersectionObserver = (elements, animationClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      if (element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elements, animationClass]);
};

export default useIntersectionObserver;