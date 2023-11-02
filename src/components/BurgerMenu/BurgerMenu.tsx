import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames';
import logo_main from './images/logo.svg';
import close_menu from './images/close_menu.svg';
import { Navigation } from '../Navigation/Navigation';
import { StorageContext } from '../StorageContext';
import { FavouritesButton } from '../FavouritesButton';
import { ShoppingBagButton } from '../ShoppingBagButton';

export const BurgerMenu = () => {
  const {
    isMenuOpened,
    setIsMenuOpened,
  } = useContext(StorageContext);

  return (
    <>
      <div
        className={
          classNames('burger-menu',
            { 'burger-menu-open': isMenuOpened })
        }
      >
        <header className="header">
          <div className="header__content">
            <div className="header-nav-container">
              <NavLink to="/" className="logo">
                <img className="logo__img" src={logo_main} alt="Logo link" />
              </NavLink>
            </div>

            <a
              href="/"
              onClick={() => {
                if (setIsMenuOpened) {
                  setIsMenuOpened((prevState: boolean) => !prevState);
                }
              }}
              className="burger-img"
            >
              <img className="header__icon" src={close_menu} alt="menu" />
            </a>
          </div>
        </header>
        <div className="burger-menu__body">
          <Navigation
            setIsMenuOpened={setIsMenuOpened}
          />
          <div className="bottom-bar burger-menu__bottom">
            <div className="icon-container__favourite">
              <FavouritesButton />
            </div>
            <div className="icon-container__cart">
              <ShoppingBagButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
