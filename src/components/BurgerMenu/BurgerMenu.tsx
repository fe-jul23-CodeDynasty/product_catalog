import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import FavouriteIcon from './images/favourite.svg';
import CartIcon from './images/cart.svg';
import logo_main from './images/logo.svg';
import close_menu from './images/close_menu.svg';
import { Navigation } from '../Navigation/Navigation';

type Props = {
  setIsMenuOpened: (statusMenu: (prevState: boolean) => boolean) => void,
  isMenuOpened: boolean,
};

export const BurgerMenu:React.FC<Props> = (
  {
    setIsMenuOpened,
    isMenuOpened,
  },
) => {
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

            <NavLink
              to="/"
              onClick={() => {
                if (setIsMenuOpened) {
                  setIsMenuOpened((prevState: boolean) => !prevState);
                }
              }}
              className="burger-img"
            >
              <img className="header__icon" src={close_menu} alt="menu" />
            </NavLink>
          </div>
        </header>
        <div className="burger-menu__body">
          <Navigation
            setIsMenuOpened={setIsMenuOpened}
          />
          <div className="bottom-bar burger-menu__bottom">
            <div className="icon-container__favourite">
              <a
                onClick={() => {
                  if (setIsMenuOpened) {
                    setIsMenuOpened((prevState: boolean) => !prevState);
                  }
                }}
                href="#favorites"
                className="bottom-bar__icon is-active"
              >
                <img
                  src={FavouriteIcon}
                  alt="Favourite-logo"
                  className="bottom__logo"
                />
              </a>
            </div>
            <div className="icon-container__cart">
              <a
                onClick={() => {
                  if (setIsMenuOpened) {
                    setIsMenuOpened((prevState: boolean) => !prevState);
                  }
                }}
                href="#cart"
                className="bottom-bar__icon"
              >
                <img src={CartIcon} alt="Cart-logo" className="bottom__logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
