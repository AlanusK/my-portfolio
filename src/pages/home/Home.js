import React from 'react';
import profile from '../../resources/images/profile.png';
import clickpesa from '../../resources/images/clickpesa.png';
import streaming from '../../resources/images/streaming.png';
import zmstore from '../../resources/images/zmstore.png';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../../components/project-card';

export const Home = () => {
    return (
        <div className=''>
            <div className='flex justify-center md:justify-between text-center md:text-left'>
                <div className='md:flex-auto'>
                    <h5 className='my-6' >Hey!</h5>
                    <h1 className='my-6'>I'm <span className='text-primary-default'>Alanus Kajara</span></h1>
                    <h2 className='my-6 text-secondary-default'>Front-end developer <span className='text-primary-default'>|</span></h2>
                    <p className='my-6 text-lg'>Telecommunications Engineer with a passion for technology.</p>
                    <div className='my-6 flex justify-center md:justify-start'>
                        <p className='flex items-center text-lg'>
                            <Link to='/about' className='flex items-center text-primary-default'>Know more<AiOutlineLink style={{ marginLeft: 5, marginRight: 5 }} /></Link>
                            about me
                        </p>
                    </div>
                </div>
                <div className='w-1/3 hidden md:block flex-auto'>
                    <img src={profile} width='100%' alt='' />
                </div>
            </div>

            <div>
                <p className='text-4xl font-bold text-center md:text-justify'>
                    I help clients to build web and mobile apps for their businesses.
                    <span className='text-lg'>
                        <Link to='/skills' className='text-primary-default block md:inline'><AiOutlineLink style={{ marginLeft: 5, marginRight: 5, display: 'inline' }} />View skills.</Link>
                    </span>
                </p>
            </div>

            <div className=''>
                <div className='my-6 flex justify-between items-center'>
                    <h2 className='text-secondary-default'>Recent Projects</h2>
                    <button className='bg-primary-default rounded-lg p-2' onClick={() => { }}>
                        View More
                    </button>
                </div>

                <div className='md:flex md:flex-wrap md:justify-between'>
                    <ProjectCard
                        source={zmstore}
                        title='Zmstore'
                        description='Cross-platform mobile selling app'
                        skills={
                            <ul className='text-white-dark text-base font-thin xs:flex'>
                                <li className='mr-3'>react native</li>
                                <li className='mr-3'>typescript</li>
                            </ul>
                        }
                    />

                    {/* This div is for providing center spacing on medium screens and above*/}
                    <div className='hidden my-6 md:mt-0 md:flex md:w-6' />

                    <ProjectCard
                        source={streaming}
                        title='DEMO Streaming'
                        description='A web app that shows popular series and movies'
                        skills={
                            <ul className='text-white-dark text-base font-thin xs:flex'>
                                <li className='mr-3'>react</li>
                                <li className='mr-3'>tailwindcss</li>
                            </ul>
                        }
                    />

                    {/* <ProjectCard
                        source={image1}
                        title='Noteworthy technology acquisitions 2021'
                        description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
                    /> */}

                    <ProjectCard
                        source={clickpesa}
                        title='Sender Dashboard'
                        description='E-commerce platform focus on simplifying business payments'
                        skills={
                            <ul className='text-white-dark text-base font-thin xs:flex'>
                                <li className='mr-3'>react</li>
                                <li className='mr-3'>typescript</li>
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    )
}
