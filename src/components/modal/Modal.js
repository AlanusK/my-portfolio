// import React from 'react';
import { NavList } from '../nav-list';

export const Modal = (props) => {
    return (
        <div className='bg-secondary-default w-screen h-screen absolute inset-0 bg-[linear-gradient(to_bottom_left,#000,#ff5403)]'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='text-3xl font-extrabold'>
                    <ul className='flex flex-col items-center justify-between h-[50vh]'>
                        <NavList setShowModal={props.setShowModal} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
