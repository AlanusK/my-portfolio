import React from 'react';
import profile from '../../resources/images/profile.png';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const AboutMe = () => {
    return (
        <div className=''>
            <div className='flex justify-center md:justify-between text-center md:text-left'>
                <div className='w-1/2 hidden md:block flex-auto'>
                    <img src={profile} width='100%' alt='' />
                </div>
                <div className='md:flex-auto'>
                    <h1 className='my-6'>Alanus Kajara</h1>
                    <h2 className='my-6 text-secondary-default'>Front-end developer <span className='text-primary-default'>|</span></h2>
                    <p className='my-6 text-lg'>Telecommunications Engineer with a passion for technology.</p>
                    <div className='my-6 flex justify-center md:justify-start'>
                        <p className='flex items-center text-lg'>
                            <Link
                                to='/about-me'
                                className='flex items-center text-primary-default hover:text-primary-dark'
                            >
                                Know more<AiOutlineLink style={{ marginLeft: 5, marginRight: 5 }} />
                            </Link>
                            about me
                        </p>
                    </div>
                </div>
            </div>

            <p>Hi there! Thanks for visiting my portfolio</p>
            <p>Hello! I'm Alanus Kajara, a passionate software engineer. 
                I develop web applications, mobile applications, and desktop applications. 
                My core skill is based on JavaScript and I love to do most of the things using JavaScript. 
                I love to make the web more open to the world. I have graduated with a bachelor's degree in 
                Telecommunications Engineering from University of Dar-es-salaam at Dar-es-salaam, Tanzania in 2012. 
                I am available for any kind of job opportunity that suits my interests.</p>
        </div>
    )
}

