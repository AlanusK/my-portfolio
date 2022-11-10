import { NavLink } from "react-router-dom";

export const NavList = () => (
    <>
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
                to='/projects'
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
    </>
);
