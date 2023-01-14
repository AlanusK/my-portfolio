// dependencies
import React from 'react';

export const ProjectCard = ({source, title, description, skills}) => {
    
    return (
        <div class='my-6 md:mt-0 rounded-lg border border bg-black-darker md:flex md:flex-col md:w-80 md:grow'>
            <div>
                <img width='900px' height='600px' class='rounded-t-lg' src={source} alt='' />
            </div>
            <div class='p-5'>
                <h5 class='mb-2 font-black tracking-tight'>{title}</h5>
                <p class='mb-3 font-normal'>{description}</p>
                <p>{skills}</p>
            </div>
        </div>
    )
}
