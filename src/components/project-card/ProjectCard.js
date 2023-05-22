/* eslint-disable jsx-a11y/anchor-is-valid */
// dependencies
import React from 'react';
import { Tooltip } from 'react-tooltip'

export const ProjectCard = ({ source, href, title, description, skills, toolTip }) => {

    return (
        <div className='my-6 md:mt-0 rounded-lg border border bg-black-darker md:flex md:flex-col md:grow'>
            <div>
                <img width='900px' height='600px' className='rounded-t-lg' src={source} alt='' />
            </div>
            <div className='p-5'>
                <h5 className='mb-2 font-black tracking-tight font-bold'>
                    <a
                        href={href}
                        data-tooltip-id={toolTip}
                        data-tooltip-content='Private'
                        data-tooltip-place='top'
                    >
                        {title}
                    </a>
                </h5>
                <Tooltip id='zmstore' />
                <div className='mb-3 font-normal'>{description}</div>
                <div>{skills}</div>
            </div>
            
        </div>
    )
}
