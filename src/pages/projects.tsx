// components/Project.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import hygraph from '@/lib/hygraphClient';
import { GET_PROJECTS } from '@/query/service';
import { useLoader } from '@/context/LoaderContext';

interface ProjectData {
  id: string;
  projectImage: { url: string };
  title: string;
  description: string;
}

const Project: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const { setLoading } = useLoader();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await hygraph.request<{ projects: ProjectData[] }>(GET_PROJECTS);
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Works</h1>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
