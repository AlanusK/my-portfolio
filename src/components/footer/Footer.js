// dependencies
import React from 'react';

export const Footer = () => {
    return (
        <div className='h-20 bg-black-darker flex flex-col items-center justify-center -mx-12'>
            <p>Made with ❤️ by Me! </p>
            <p>Copyright ©{new Date().getFullYear()} | All right reserved</p>
        </div>
    )
}
