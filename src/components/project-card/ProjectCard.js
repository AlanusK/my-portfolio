// dependencies
import React from 'react';

export const ProjectCard = ({source, title, description, skills}) => {
    
    return (
        <div className='my-6 md:mt-0 rounded-lg border border bg-black-darker md:flex md:flex-col md:grow'>
            <div>
                <img width='900px' height='600px' className='rounded-t-lg' src={source} alt='' />
            </div>
            <div className='p-5'>
                <h5 className='mb-2 font-black tracking-tight font-bold'>{title}</h5>
                <div className='mb-3 font-normal'>{description}</div>
                <div>{skills}</div>
            </div>
        </div>
    )
}
