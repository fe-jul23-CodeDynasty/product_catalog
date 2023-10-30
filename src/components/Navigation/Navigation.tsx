import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <div className="nav_container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__item__link">
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/phones" className="nav__item__link">
              phones
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/tablets" className="nav__item__link">
              tablets
            </NavLink>
          </li>

          <li className="nav__item" data-qa="hover">
            <NavLink to="/accessories" className="nav__item__link">
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
