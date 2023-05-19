// dependencies
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='h-24 bg-black-darker flex flex-col items-center justify-center -mx-12 absolute bottom-0 left-0 right-0 text-sm'>
            <p>Made with ❤️ by Me! </p>
            <p>Copyright ©{new Date().getFullYear()} | All right reserved</p>
            <div className='flex items-center justify-center gap-4'>
                <p className='hidden md:flex'>Connect with me online:</p>
                <h2>
                    <a href='https://www.linkedin.com/in/alanus-kajara-peng-t-7a5bb032/'>
                        <FaLinkedin className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
                    </a>
                </h2>
                <h2>
                    <a href='https://twitter.com/AlanKajara'>
                        <FaTwitter className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
                    </a>
                </h2>
                <h2>
                    <a href='https://github.com/alanusk'>
                        <FaGithub className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
                    </a>
                </h2>
            </div>
        </div>
    )
}
