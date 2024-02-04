"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import "../app/globals.css"

interface SlideInFromRightProps {
    children: ReactNode; // Use ReactNode for typing 'children'
  }

  const SlideInFromRight: React.FC<SlideInFromRightProps> = ({ children }) => {
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && elementRef.current) {
            elementRef.current.classList.add('animate');
            observer.disconnect();
          }
        },
        { threshold: 0.5 } // Adjust according to your needs
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <span ref={elementRef} className="flex justify-center animate-entrance-right">
      {children}
    </span>
  );
};

export default SlideInFromRight;
