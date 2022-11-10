// dependencies
import React, { useState } from 'react';
import logo from '../../resources/images/logo.png';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import { Modal } from '../modal';
import { NavList } from '../nav-list';

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='h-20 flex items-center justify-between'>
            <div>
                <Link to='/'><img src={logo} width='50px' alt='logo' /></Link>
            </div>

            <div className='z-10 md:hidden'>
                {showModal === false ?
                    <button className='bg-primary-default rounded-full p-1' onClick={() => setShowModal(true)}>
                        <BiMenu size={40} />
                    </button>
                    :
                    <button className='bg-primary-default rounded-full p-1' onClick={() => setShowModal(false)}>
                        <BiX size={40} />
                    </button>
                }
            </div>

            <nav className='w-96 hidden md:inline'>
                <ul className='flex items-center justify-between font-bold text-xl'>
                    <NavList />
                </ul>
            </nav>

            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    )
}
