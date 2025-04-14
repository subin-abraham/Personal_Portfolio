import React from 'react'
import Image from 'next/image'

const WorkExperience = () => {
    return (
        <div className='flex flex-col justify-start items-center mt-10'>
            <div className=" text-blue-500 text-center border-t-4 border-b-4 border-double border-gray-300 p-0 my-5 w-[100%] mb-5">
                My Experiences
            </div>

            <div>
                <div className='flex gap-3 justify-start items-center'>
                    <div className='rounded'>
                        <Image src={'/logo/Polus_Logo.png'} alt={'Polus Solutions'}
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>Polus Solutions</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <div className='w-[20px] h-[20px] border-l-2 border-b-2 rounded-l ml-1'></div>
                    <div className='flex flex-col gap-1 mt-1'>
                        <div>Software Engineer I</div>
                        <div className='flex items-center gap-1 flex-wrap'>
                            <span>Feb2023 - Present <b>.</b></span>
                            <span>Trivandrum, India <b>.</b></span>
                            <span>Full-Time</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkExperience
