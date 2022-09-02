import { NavLink } from 'react-router-dom';
import classname from 'classnames';

export const Nav = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) => (
              classname('navbar-item',
                { 'is-active': isActive })
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              classname('navbar-item',
                { 'is-active': isActive })
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};