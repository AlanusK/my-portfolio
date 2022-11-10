import { NavLink } from "react-router-dom";

export const NavList = ({setShowModal}) => (
    <>
        <li>
            <NavLink
                to='/'
                end
                style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                onClick={() => setShowModal(false)}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/projects'
                style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                onClick={() => setShowModal(false)}
            >
                Projects
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/skills'
                style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                onClick={() => setShowModal(false)}
            >
                Skills
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/about'
                style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                onClick={() => setShowModal(false)}
            >
                About Me
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/contact'
                style={({ isActive }) => ({ color: isActive ? '#ff5403' : '#fff' })}
                onClick={() => setShowModal(false)}
            >
                Contact
            </NavLink>
        </li>
    </>
);
