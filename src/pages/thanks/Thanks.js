import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Thanks = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col grow items-center text-center bg-secondary-dark -mx-12 px-12 py-24 -my-20 z-20'>
                <h1>Thanks for the message! ✉️</h1>
                <h5 className='my-6'>I'll get back to you as soon as possible!</h5>
                <button className='bg-primary-default rounded-lg p-2' onClick={() => navigate('/', {replace: true})}>
                    BACK TO PORTFOLIO
                </button>
        </div>
    )
}
