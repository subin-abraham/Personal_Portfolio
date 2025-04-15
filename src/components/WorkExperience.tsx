import React from 'react';
import Image from 'next/image';

interface JobDetails {
    duration: string;
    location: string;
    modeOfWorking: string;
}

interface CompanyLogo {
    url: string;
}

export interface Experience {
    id: string;
    companyLogo: CompanyLogo;
    title: string;
    designation: string;
    details: JobDetails;
}

interface WorkExperienceProps {
    experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
    return (
        <div className='flex flex-col justify-start mt-10'>
            <div className="text-blue-500 text-center border-t-4 border-b-4 border-double border-gray-300 p-0 my-5 w-full mb-5">
                My Experiences
            </div>

            {experiences.map((experience) => (
                <div key={experience.id} className='mb-6'>
                    <div className='flex gap-3 justify-start items-center'>
                        <div className='rounded'>
                            <Image
                                src={experience.companyLogo.url}
                                alt='Company Logo'
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>{experience.title}</div>
                    </div>
                    <div className='flex justify-start gap-2'>
                        <div className='w-5 h-5 border-l-2 border-b-2 rounded-l ml-1'></div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div>{experience.designation}</div>
                            <div className='flex items-center gap-1 flex-wrap'>
                                <span>{experience.details.duration} <b>.</b></span>
                                <span>{experience.details.location} <b>.</b></span>
                                <span>{experience.details.modeOfWorking}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
