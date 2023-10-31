import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import classNames from 'classnames';
import { useState } from 'react';

const navigationData = {
  home: '/',
  phones: '/catalog?category=phones',
  tablets: '/catalog?category=tablets',
  accessories: '/catalog?category=accessories',
};

export const Navigation = () => {
  const [isActiveNav, setIsActiveNav] = useState<string>('home');

  const handleNavClick = (label: string) => {
    setIsActiveNav(label);
  };

  return (
    <div className="nav_container">
      <nav className="nav">
        <ul className="nav__list">
          {Object.entries(navigationData).map(([label, path]) => (
            <li className="nav__item" key={label}>
              <NavLink
                onClick={() => handleNavClick(label)}
                to={path}
                className={
                  classNames(
                    'nav__item__link',
                    {
                      'is-active': label === isActiveNav,
                    },
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
