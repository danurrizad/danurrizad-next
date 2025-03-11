"use client"
import React, { ReactNode, useEffect, useRef } from 'react';
import "../app/globals.css";

interface SlideInAnimationProps {
    children: ReactNode; // Use ReactNode for typing 'children'
    index: number;
  }

  const SlideInAnimation: React.FC<SlideInAnimationProps> = ({ children, index }) => {
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
    <span ref={elementRef} className={`flex justify-center animate-entrance-${index % 2 === 0 ? "left" : "right"}`}>
      {children}
    </span>
  );
};

export default SlideInAnimation;
