import { NavLink } from "react-router-dom";

export const NavList = ({setShowModal}) => (
    <>
        <li>
            <NavLink
                to='/'
                end
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                onClick={() => setShowModal(false)}
                className='hover:text-primary-default'
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/projects'
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                onClick={() => setShowModal(false)}
                className='hover:text-primary-default'
            >
                Projects
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/skills'
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                onClick={() => setShowModal(false)}
                className='hover:text-primary-default'
            >
                Skills
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/about'
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                onClick={() => setShowModal(false)}
                className='hover:text-primary-default'
            >
                About Me
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/contact'
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                onClick={() => setShowModal(false)}
                className='hover:text-primary-default'
            >
                Contact
            </NavLink>
        </li>
    </>
);
