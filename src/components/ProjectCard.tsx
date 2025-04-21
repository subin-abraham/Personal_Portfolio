import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ProjectData {
  projectImage: {
    url: string;
  };
  title: string;
  description: string; // Markdown string
}

const ProjectCard: React.FC<{ data: ProjectData }> = ({ data }) => {
  const { projectImage, title, description } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  const [projectDimensions, setDimensions] = useState({
    width: 200,
    height: 200,

  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 400, height: 250 });
      } else {
        setDimensions({ width: 200, height: 200 });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);


  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 relative flex justify-center">
          <Image
            src={projectImage.url}
            alt={title}
            width={projectDimensions.width}
            height={projectDimensions.height}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div
            className={`text-gray-700 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-24'
              }`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {description}
            </ReactMarkdown>
          </div>
          {description.length > 100 && (
            <button
              onClick={toggleExpand}
              className="mt-2 text-blue-500 hover:underline focus:outline-none cursor-pointer"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
