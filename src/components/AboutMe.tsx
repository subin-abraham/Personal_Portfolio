import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const AboutMe = () => {
    
    return (
        <div className='flex flex-col justify-center'>
            <div className=" text-blue-500 text-center border-t-4 border-b-4 border-double border-gray-300 p-0 my-5">
                Here's a quick intro about me
            </div>
            <div className='text-center pl-10 pr-10 pt-0 pb-5'>
                <p>
                    As a Front-End Engineer with a B.Tech in Electronics and Communication, I transitioned from an initial interest in electronics to a passion for software development. During my internship, I seized the opportunity to enter the software industry, focusing on front-end technologies such as JavaScript, TypeScript, Angular, React, Bootstrap, and Tailwind CSS. Beyond coding, I continually seek to learn and grow, using projects like this portfolio to experiment with tools like Next.js and Tailwind. Currently, I am dedicated to mastering modern front-end technologies and aspire to evolve into a full-stack engineer by enhancing my skills in Node.js, MongoDB, and SQL.
                </p>
            </div>
            <div className='text-center'>
                <a href="/about" className='text-blue-500 font-semibold'>Read More <FontAwesomeIcon icon={faSquareCaretDown} /></a>
            </div>
        </div>
    )
}
export default AboutMe
