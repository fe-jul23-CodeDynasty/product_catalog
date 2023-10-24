import './Header.scss';

import { NavLink } from 'react-router-dom';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="nav_container">
          <NavLink
            to="/"
            className="logo"
          >
            <img
              className="logo__img"
              src={logo_main}
              alt="Logo link"
            />
          </NavLink>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__item__link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/phones"
                  className="nav__item__link"
                >
                  phones
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tablets"
                  className="nav__item__link"
                >
                  tablets
                </NavLink>
              </li>
              <li className="nav__item" data-qa="hover">
                <NavLink
                  to="/accessories"
                  className="nav__item__link"
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container_heart-like-shopping-bag">
          <a
            className="heart_like"
            href="/"
          >
            <img src={favourites_heart_like} alt="heart like" />
          </a>
          <a
            className="shopping-bag"
            href="/"
          >
            <img src={shopping_bag} alt="shopping bag" />
          </a>
        </div>

        <a className="burger_menu" href="/">
          <img src={burger_menu} alt="menu" />
        </a>
      </div>
    </header>
  );
};
