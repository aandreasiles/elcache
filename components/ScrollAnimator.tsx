
import React from 'react';
import { useInView } from '../hooks/useInView';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children, className }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className || ''} transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimator;
