'use client'
import React, { useEffect, useState } from 'react';
import HomeComponent from "./Home";
import AboutMe from "../components/AboutMe";
import WorkExperience, { Experience } from "@/components/WorkExperience";
import hygraph from '@/lib/hygraphClient';
import { GET_WORK_EXPERIENCE } from '@/query/service';

export default function Home() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const data: any = await hygraph.request(GET_WORK_EXPERIENCE);
        setExperiences(data.workExperiences);
      } catch (err) {
        console.error('Error fetching experiences:', err);
        setError('Failed to load work experiences.');
      }
    }
    fetchExperiences();
  }, []);

  return (
    <div>
      <HomeComponent />
      <AboutMe />
      {error ? (
        <div>{error}</div>
      ) : (
        <WorkExperience experiences={experiences} />
      )}
    </div>
  );
}
