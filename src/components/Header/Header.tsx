import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="header">
      {!isMenuOpened ? (
        <div className="header__content">
          <div className="header-nav-container">
            <NavLink to="/" className="logo">
              <img className="logo__img" src={logo_main} alt="Logo link" />
            </NavLink>

            <Navigation />
          </div>

          <div className="container__heart-like-shopping-bag">
            <Link className="container__heart-like" to="/favourites">
              <img src={favourites_heart_like} alt="heart like" />
            </Link>
            <Link className="container__shopping-bag" to="/cart">
              <img src={shopping_bag} alt="shopping bag" />
            </Link>
          </div>

          <a
            href="#openmenu"
            className="burger-img"
            onClick={() => {
              setIsMenuOpened(prevState => !prevState);
            }}
          >
            <img
              className="header__icon"
              src={burger_menu}
              alt="close menu"
            />
          </a>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </header>
  );
};
