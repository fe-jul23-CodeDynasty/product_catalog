import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Navigation.scss';
import classNames from 'classnames';

const navigationData = {
  home: '/',
  phones: '/catalog/phones',
  tablets: '/catalog/tablets',
  accessories: '/catalog/accessories',
};

export const Navigation = () => {
  const { pathname } = useLocation();
  const { category } = useParams();

  return (
    <div className="nav_container">
      <nav className="nav">
        <ul className="nav__list">
          {Object.entries(navigationData).map(([label, path]) => (
            <li className="nav__item" key={label}>
              <NavLink
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
