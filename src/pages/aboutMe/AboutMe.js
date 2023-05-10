import React from 'react';
import profile from '../../resources/images/profile.png';
import Resume from '../../resources/documents/Alanus-resume.pdf'
import { FaTwitter, FaGithub, FaDownload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className='flex justify-center py-2 md:justify-between text-center md:text-left flex-col md:flex-row'>
                <div className='w-1/3 hidden md:block flex-auto'>
                    <img src={profile} width='100%' alt='' />
                </div>
                <div className='md:flex-auto md:mt-2'>
                    <div className='md:hidden flex justify-center'>
                        <img src={profile} alt='' />
                    </div>
                    <div className='my-6'>
                        <h1>Alanus Kajara</h1>
                        <p className='text-white-dark text-base font-thin'>Front-end developer, Software & Telecoms Engineer</p>
                    </div>
                    <div className='my-6'>
                        <h6>Email Me:</h6>
                        <a href='mailto:akajara@gmail.com'>
                            <span className='bg-secondary-dark rounded-3xl py-1 px-2 hover:bg-secondary-default'>
                                akajara@gmail.com
                            </span>
                        </a>
                    </div>
                    <div className='my-6 flex gap-x-1 justify-center md:justify-start'>
                        <a
                            className='flex items-center justify-center gap-1 bg-primary-default rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                            href={Resume} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaDownload />
                            Resume
                        </a>
                        <button
                            className='bg-secondary-default rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                            onClick={() => navigate('/contact')}
                        >
                            Contact Me
                        </button>
                    </div>
                    <div className='my-6'>
                        <h5>Follow me on</h5>
                        <div className='flex items-center justify-center md:justify-start gap-x-4'>
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
                </div>
            </div>

            <div className='border-t-[1px] py-4 text-white-dark text-center md:text-justify text-lg flex flex-col gap-y-4'>
                <p>Hi there! Thanks for visiting my portfolio</p>
                <p>
                    I'm <span className='text-primary-default'><a href='https://www.linkedin.com/in/alanus-kajara-peng-t-7a5bb032/'>Alanus Kajara</a></span>,
                    a passionate software engineer. I develop web and mobile applications.
                    My core skill is based on JavaScript and I love to do most of the things using ReactJs for web applications,
                    and React-native for mobile applications. I am a self-motivated and multi-skilled person who is adept at coming up
                    with real solutions that work for clients.
                </p>
                <p>I am available for any kind of job opportunity that suits my interests.</p>
            </div>
        </div>
    )
}

