import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? 'active-link' : '';
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => {
              return isActive ? 'active-link' : '';
            }}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => {
              return isActive ? 'active-link' : '';
            }}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
