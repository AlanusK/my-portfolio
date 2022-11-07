import React from 'react';
import profile from '../../resources/images/profile.png';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <div className='flex-auto'>
                    <h5 className='my-6' >Hey!</h5>
                    <h1 className='my-6'>I'm <span className='text-primary-default'>Alanus Kajara</span></h1>
                    <h2 className='my-6 text-secondary-default'>Front-end developer <span className='text-primary-default'>|</span></h2>
                    <p className='my-6 text-lg'>Telecommunications Engineer with a passion for technology.</p>
                    <p className='my-6 flex items-center text-lg'>
                        <Link to='/about' className='flex items-center text-primary-default'>Know more<AiOutlineLink style={{ marginLeft: 5, marginRight: 5 }} /></Link>
                        about me
                    </p>
                </div>
                <div className='flex-auto w-1/3'>
                    <img src={profile} width='100%' alt='' />
                </div>
            </div>

            <div>
                <p className='text-4xl font-bold text-justify'>
                    I help clients to build web and mobile apps for their businesses.
                    <span className='text-lg'>
                        <Link to='/skills' className='text-primary-default'><AiOutlineLink style={{ marginLeft: 5, marginRight: 5, display: 'inline' }} />View skills.</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}
