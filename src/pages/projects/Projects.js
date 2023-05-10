import React from 'react';
import clickpesa from '../../resources/images/clickpesa.png';
import streaming from '../../resources/images/streaming.png';
import zmstore from '../../resources/images/zmstore.png';
import winefestival from '../../resources/images/wine-festival.png';
import expo from '../../resources/images/expo.png';
import portfolio from '../../resources/images/portfolio.png';
import { ProjectCard } from '../../components/project-card';

export const Projects = () => {
    return (
        <div className='mt-2'>
            <div className='py-4'>
                <h1>Projects</h1>
            </div>
            <div>
                <ProjectCard
                    source={clickpesa}
                    title='Sender Dashboard'
                    description='E-commerce platform focus on simplifying business payments'
                    skills={
                        <ul className='text-white-dark text-base font-thin xs:flex'>
                            <li className='mr-3'>react</li>
                            <li className='mr-3'>typescript</li>
                            <li className='mr-3'>nodejs</li>
                        </ul>
                    }
                />
                <ProjectCard
                    source={zmstore}
                    title='Zmstore'
                    description='Cross-platform mobile selling app'
                    skills={
                        <ul className='text-white-dark text-base font-thin xs:flex'>
                            <li className='mr-3'>react native</li>
                            <li className='mr-3'>typescript</li>
                            <li className='mr-3'>nodejs</li>
                        </ul>
                    }
                />
                <ProjectCard
                    source={portfolio}
                    title='Portfolio'
                    description='A web app that showcase my software developing ability'
                    skills={
                        <ul className='text-white-dark text-base font-thin xs:flex'>
                            <li className='mr-3'>react</li>
                            <li className='mr-3'>tailwindcss</li>
                        </ul>
                    }
                />
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
                <ProjectCard
                    source={expo}
                    title='Woofstagram'
                    description={
                        <p>
                            <p>A mobile app (Instagram for dogs) built with visual and structral components as per design:</p>
                            <p>[<a href='https://www.figma.com/file/gnZOWBseYYkDmZMR8pVMEf/Woofstagram-Home?node-id=0%3A1'>woofstagram-figma-design</a>]</p>
                        </p>
                    }
                    skills={
                        <ul className='text-white-dark text-base font-thin xs:flex'>
                            <li className='mr-3'>Expo</li>
                        </ul>
                    }
                />
                <ProjectCard
                    source={winefestival}
                    title='Wine festival'
                    description='A simple wine festival schedule'
                    skills={
                        <ul className='text-white-dark text-base font-thin xs:flex'>
                            <li className='mr-3'>HTML</li>
                        </ul>
                    }
                />
            </div>
        </div>
    )
}
