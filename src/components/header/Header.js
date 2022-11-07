// dependencies
import React from 'react';
import logo from '../../resources/images/logo.png';

export const Header = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            <div>
                <img src={logo} width='50px' alt='logo' />
            </div>
            <nav className='w-80'>
                <ul class='flex items-center justify-between font-bold text-xl'>
                    <li>About Me</li>
                    <li>projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
