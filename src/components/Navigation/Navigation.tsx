import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Navigation.scss';
import classNames from 'classnames';
import React from 'react';

const navigationData = {
  home: '/',
  phones: '/catalog/phones',
  tablets: '/catalog/tablets',
  accessories: '/catalog/accessories',
};

type Props = {
  setIsMenuOpened?: (statusMenu: (prevState: boolean) => boolean) => void;
};

export const Navigation: React.FC<Props> = ({ setIsMenuOpened }) => {
  const { pathname } = useLocation();
  const { category } = useParams();

  return (
    <div className="nav_container">
      <nav className="nav">
        <ul className="nav__list">
          {Object.entries(navigationData).map(([label, path]) => (
            <li className="nav__item" key={label}>
              <NavLink
                onClick={() => {
                  if (setIsMenuOpened) {
                    setIsMenuOpened((prevState: boolean) => !prevState);
                  }
                }}
                to={path}
                className={classNames('nav__item__link', {
                  'is-active':
                    category === label
                    || (label === 'home' && pathname === '/'),
                })}
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
