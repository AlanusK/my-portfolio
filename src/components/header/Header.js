// dependencies
import React from 'react';
import logo from '../../resources/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

export const Header = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            <div>
                <Link to='/'><img src={logo} width='50px' alt='logo' /></Link>
            </div>

            <div className='md:hidden'>
                <button className='bg-primary-default rounded-full p-1'><BiMenu size={40}/></button>
            </div>

            <nav className='w-96 hidden md:inline'>
                <ul className='flex items-center justify-between font-bold text-xl'>
                    <li>
                        <NavLink
                            to='/'
                            end
                            style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/project'
                            style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/skills'
                            style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
