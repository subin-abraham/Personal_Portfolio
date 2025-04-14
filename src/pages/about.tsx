'use client'
"use client";
import { useEffect, useRef, useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
  position: 'left' | 'right';
}

export default function About() {
  const [activeSection, setActiveSection] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Sample sections data
  const sections: Section[] = [
    {
      id: 'section1',
      title: 'My Programming Origins',
      content: 'I began my journey in the world of technology with a degree in Electronics and Communication. Although my academic focus was initially driven by a curiosity in electronics, I soon discovered that my true passion lay in software development. I loved the idea of creating innovative solutions and shaping digital experiences—an interest that continues to fuel my work today.',
      position: 'left'
    },
    {
      id: 'section2',
      title: 'Finding My Way to Web',
      content: 'Following my studies, I seized an opportunity during my internship, which opened the door for me to step into the software industry as a front-end engineer. This pivotal experience helped me bridge the gap between my academic background and the dynamic world of web technologies. Now, I specialize in cutting-edge front-end development, working with technologies like JavaScript, TypeScript, Angular, and React, along with essential web design frameworks such as Bootstrap and Tailwind CSS.',
      position: 'right'
    },
    {
      id: 'section3',
      title: 'Life Beyond Coding',
      content: 'While coding is at the heart of what I do, I’m continually inspired by the potential to learn and grow. I view every project as an opportunity to explore new front-end tools and techniques—this portfolio itself is a playground where I experiment with Next.js and Tailwind, among other technologies. This constant learning not only keeps my skills fresh but also nurtures a creative mindset that I bring to every project.',
      position: 'left'
    },
    {
      id: 'section4',
      title: 'These Days',
      content: 'Currently, I’m focused on mastering modern front-end technologies and refining my craft. My daily work involves creating user-friendly, responsive web applications that deliver exceptional user experiences. I make it a point to stay updated with the latest industry trends and best practices, ensuring that my solutions are both innovative and efficient.',
      position: 'right'
    },
    {
      id: 'section5',
      title: 'Future Aspirations',
      content: 'Looking ahead, I’m excited to evolve into a full-stack engineer. I already have an intermediate grasp of backend technologies such as Node.js, MongoDB, and SQL, and I’m actively enhancing these skills to build more comprehensive and robust applications. My goal is to combine my front-end expertise with a deep understanding of backend systems to create seamless, end-to-end solutions that drive real impact.',
      position: 'left'
    }
  ];

  // Detect if in mobile view (viewport less than 768px)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // If mobile, skip setting up scroll animations
    if (isMobile) return;

    // Set up section refs array
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    
    const handleScroll = () => {
      if (!sectionsContainerRef.current) return;
      
      // Get ball position (center of viewport)
      const ballPosition = window.innerHeight / 2;
      
      // Check which section the ball is touching
      let currentActiveSection = -1;
      
      sectionRefs.current.forEach((sectionRef, index) => {
        if (!sectionRef) return;
        
        const rect = sectionRef.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        
        // If ball is within this section's center area (with some tolerance)
        const tolerance = 100; // Adjust this value as needed
        if (Math.abs(sectionCenter - ballPosition) < tolerance) {
          currentActiveSection = index;
        }
      });
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length, isMobile]);

  return (
    <div ref={containerRef} className="relative bg-gray-100 mt-5">
      {/* Header section - minimal height */}
      <div className="py-16 flex items-center justify-center">
        <h1 ref={headingRef} className="text-5xl font-bold text-center">Here's a quick intro about me</h1>
      </div>
      
      {/* Main content with track and sections */}
      <div 
        ref={sectionsContainerRef} 
        className="relative mx-auto"
        style={{ maxWidth: '1200px' }}
      >
        {/* Central track and blue ball are only rendered if not in mobile view */}
        {!isMobile && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gray-300 h-full">
            <div 
              className="sticky top-1/2 z-10 rounded-full bg-blue-500 transform -translate-x-1/2 ml-1"
              style={{ 
                width: '32px',
                height: '32px',
                left: '50%',
                marginTop: '-16px', // Half the height to center vertically
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)'
              }}
            />
          </div>
        )}
        
        {/* Content sections */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            // On mobile: center the card with vertical spacing.
            // On desktop: use original full-screen section style.
            className={isMobile ? "flex justify-center py-8" : "relative min-h-[50vh] flex items-center"}
            ref={(el: HTMLDivElement | null) => { sectionRefs.current[index] = el }}
          >
            {/* Connection line - conditionally visible only on non-mobile view */}
            {!isMobile && activeSection === index && (
              <div 
                className={`absolute top-1/2 h-2 bg-gray-300 transition-all duration-300 ${
                  section.position === 'left' 
                    ? 'right-1/2 w-1/6' 
                    : 'left-1/2 w-1/6'
                }`}
              />
            )}
            
            {/* Section content */}
            <div 
              className={
                isMobile 
                  ? "w-[90%] p-6 rounded-lg bg-white shadow-lg opacity-100 scale-100"
                  : `w-2/5 p-6 rounded-lg bg-white shadow-lg transition-all duration-300 ${
                      section.position === 'left' 
                        ? 'ml-12 mr-auto' 
                        : 'mr-12 ml-auto'
                    } ${
                      activeSection === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                    }`
              }
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
