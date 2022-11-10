// import React from 'react';
import { NavList } from '../nav-list';
import './Modal.css';

export const Modal = ({ setShowModal }) => {
    return (
        <div className='bg-secondary-default w-screen h-screen absolute inset-0 bg-[radial-gradient(#000,#ff5403)]' onClick={() => setShowModal(false)}>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='text-3xl font-extrabold'>
                    <ul className='flex flex-col items-center justify-between h-[50vh]'>
                        <NavList />
                    </ul>
                </div>
            </div>
        </div>
    )
}
