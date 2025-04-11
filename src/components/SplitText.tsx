"use client";
import { useSprings, animated, SpringConfig, easings } from '@react-spring/web';
import { useEffect, useRef, useState, ReactNode } from 'react';

interface SplitTextProps {
  segments: ReactNode[];
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: SpringConfig['easing'];
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  segments,
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = easings.easeOutCubic,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Flatten segments into individual characters and components
  const elements: ReactNode[] = segments.flatMap((segment, index) => {
    if (typeof segment === 'string') {
      return segment.split('').map((char, charIndex) => (
        <span key={`${index}-${charIndex}`} className="inline-block">
          {char}
        </span>
      ));
    }
    return <span key={index} className="inline-block">{segment}</span>;
  });

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (props: any) => Promise<void>) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <div
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {elements.map((element, index) => (
        <animated.span
          key={index}
          style={springs[index] as unknown as React.CSSProperties}
          className="inline-block transform transition-opacity will-change-transform"
        >
          {element}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
