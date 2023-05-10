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
                        </ul>
                    }
                />
                <ProjectCard
                    source={portfolio}
                    title='Noteworthy technology acquisitions 2021'
                    description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
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
                    title='Noteworthy technology acquisitions 2021'
                    description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
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
