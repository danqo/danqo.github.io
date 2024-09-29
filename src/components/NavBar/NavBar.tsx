import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '@assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <NavLink to="/">
          <img className="logo" src={logo} />
        </NavLink>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
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
      </div>
    </nav>
  );
};

export default NavBar;
