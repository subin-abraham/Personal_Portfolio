import React from 'react'
import AddImage from './AddImage'

const Footer = () => {
    return (
        <div className='border-t-2 mt-10 mb-5 flex flex-col justify-center items-center gap-1'>
            <div className='flex justify-center items-end gap-8 mt-5 mb-2'>
                <AddImage src={'/Icons/github.png'} width={40} height={40} alt='Github' className='cursor-pointer' redirectURL='https://github.com/subin-abraham' />
                <AddImage src={'/Icons/linkedin.png'} width={40} height={40} alt='Linkedin' className='cursor-pointer' redirectURL='https://www.linkedin.com/in/subinabraham63' />
                <AddImage src={'/Icons/medium.png'} width={40} height={40} alt='Medium' className='cursor-pointer' redirectURL='https://medium.com/@subinabraham63' />
                <AddImage src={'/Icons/instagram.png'} width={40} height={40} alt='Instagram' className='cursor-pointer' redirectURL='https://www.instagram.com/subin__abraham_/' />
            </div>
            <div>Developed by Subin Abraham</div>
            <div>Build With Next, Tailwind & hygraph</div>
        </div>
    )
}

export default Footer
