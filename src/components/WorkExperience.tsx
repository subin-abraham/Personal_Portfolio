'use client';

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
        <div className="relative container mx-auto mt-10 px-4">
            {/* Section Header */}
            <div className="text-blue-500 text-center border-t-4 border-b-4 border-double border-gray-300 my-5 w-full">
                My Experiences
            </div>

            {/* Mobile view: stacked list */}
            <div className="flex flex-col md:hidden">
                {experiences.map((experience) => (
                    <div key={experience.id} className="mb-6">
                        <div className="flex gap-3 items-center">
                            <div className="rounded">
                                <Image
                                    src={experience.companyLogo.url}
                                    alt="Company Logo"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div>{experience.title}</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-5 h-5 border-l-2 border-b-2 rounded-l ml-1"></div>
                            <div className="flex flex-col gap-1 mt-1">
                                <div>{experience.designation}</div>
                                <div className="flex items-center gap-1 flex-wrap">
                                    <span>
                                        {experience.details.duration} <b>.</b>
                                    </span>
                                    <span>
                                        {experience.details.location} <b>.</b>
                                    </span>
                                    <span>{experience.details.modeOfWorking}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tablet and Laptop view: Timeline layout */}
            <div className="hidden md:grid grid-cols-9 gap-4 relative">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 transform -translate-x-1/2"></div>

                {experiences.map((experience, index) => {
                    const isLeftSide = index % 2 === 0;
                    return (
                        <React.Fragment key={experience.id}>
                            {isLeftSide ? (
                                <>
                                    {/* Left Side Card */}
                                    <div className="col-start-1 col-span-4 flex justify-end">
                                        <div className="bg-white shadow-lg p-4 rounded w-full max-w-md">
                                            <div className="flex gap-3 items-center mb-2">
                                                <div className="rounded">
                                                    <Image
                                                        src={experience.companyLogo.url}
                                                        alt="Company Logo"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                                <div>{experience.title}</div>
                                            </div>
                                            <div className="mb-1">{experience.designation}</div>
                                            <div className="flex items-center gap-1 text-sm flex-wrap">
                                                <span>
                                                    {experience.details.duration} <b>.</b>
                                                </span>
                                                <span>
                                                    {experience.details.location} <b>.</b>
                                                </span>
                                                <span>{experience.details.modeOfWorking}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dot on the timeline */}
                                    <div className="col-start-5 col-span-1 flex justify-center relative">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2"></div>
                                    </div>

                                    {/* Empty right side */}
                                    <div className="col-start-6 col-span-4"></div>
                                </>
                            ) : (
                                <>
                                    {/* Empty left side */}
                                    <div className="col-start-1 col-span-4"></div>

                                    {/* Dot on the timeline */}
                                    <div className="col-start-5 col-span-1 flex justify-center relative">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2"></div>
                                    </div>

                                    {/* Right Side Card */}
                                    <div className="col-start-6 col-span-4 flex justify-start">
                                        <div className="bg-white shadow-lg p-4 rounded w-full max-w-md">
                                            <div className="flex gap-3 items-center mb-2">
                                                <div className="rounded">
                                                    <Image
                                                        src={experience.companyLogo.url}
                                                        alt="Company Logo"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                                <div>{experience.title}</div>
                                            </div>
                                            <div className="mb-1">{experience.designation}</div>
                                            <div className="flex items-center gap-1 text-sm flex-wrap">
                                                <span>
                                                    {experience.details.duration} <b>.</b>
                                                </span>
                                                <span>
                                                    {experience.details.location} <b>.</b>
                                                </span>
                                                <span>{experience.details.modeOfWorking}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperience;
