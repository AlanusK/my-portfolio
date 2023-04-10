import React from 'react';
import profile from '../../resources/images/profile.png';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className='flex justify-center py-2 md:justify-between text-center md:text-left flex-col md:flex-row'>
                <div className='w-1/3 hidden md:block flex-auto'>
                    <img src={profile} width='100%' alt='' />
                </div>
                <div className='md:flex-auto md:mt-2 ml-16'>
                    <div className='md:hidden flex justify-center'>
                        <img src={profile} alt='' />
                    </div>
                    <div className='my-6'>
                        <h1>Alanus Kajara</h1>
                        <p className='text-white-dark text-base font-thin'>Front-end developer, Software & Telecoms Engineer</p>
                    </div>
                    <div className='my-6'>
                        <h6>Email Me</h6>
                        <a href='mailto:akajara@gmail.com'>
                            <span className='bg-secondary-dark rounded-3xl py-1 px-2 hover:bg-secondary-default'>
                                akajara@gmail.com
                            </span>
                        </a>
                    </div>
                    <div className='my-6 flex gap-x-1 justify-center md:justify-start'>
                        <button
                            className='bg-primary-default rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                            onClick={() => navigate('/projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className='bg-secondary-default rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' 
                            onClick={() => navigate('/contact')}
                        >
                            Contacts
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

            {/* <div className='border-t-[1px] py-4 text-white-dark text-center md:text-justify'>
                <p>Hi there! Thanks for visiting my portfolio</p>
                <p>
                    Hello! I'm Alanus Kajara, a passionate software engineer.
                    I develop web applications, mobile applications, and desktop applications.
                    My core skill is based on JavaScript and I love to do most of the things using JavaScript.
                    I love to make the web more open to the world. I have graduated with a bachelor's degree in
                    Telecommunications Engineering from University of Dar-es-salaam at Dar-es-salaam, Tanzania in 2012.
                    I am available for any kind of job opportunity that suits my interests.
                </p>
            </div> */}


        </div>
    )
}

