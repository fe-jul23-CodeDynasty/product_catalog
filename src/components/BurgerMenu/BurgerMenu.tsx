import './BurgerMenu.scss';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames';
import FavouriteIcon from './images/favourite.svg';
import CartIcon from './images/cart.svg';
import logo_main from './images/logo.svg';
import close_menu from './images/close_menu.svg';
import { Navigation } from '../Navigation/Navigation';
import { StorageContext } from '../StorageContext/StorageContext';

export const BurgerMenu = () => {
  const { isMenuOpened, setIsMenuOpened } = useContext(StorageContext);

  return (
    <>
      <div
        className={classNames('burger-menu', {
          'burger-menu-open': isMenuOpened,
        })}
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
          <Navigation setIsMenuOpened={setIsMenuOpened} />
          <div className="bottom-bar burger-menu__bottom">
            <div className="icon-container__favourite">
              <Link
                onClick={() => {
                  if (setIsMenuOpened) {
                    setIsMenuOpened((prevState: boolean) => !prevState);
                  }
                }}
                to="/favourites"
                className="bottom-bar__icon is-active"
              >
                <img
                  src={FavouriteIcon}
                  alt="Favourite-logo"
                  className="bottom__logo"
                />
              </Link>
            </div>
            <div className="icon-container__cart">
              <Link
                onClick={() => {
                  if (setIsMenuOpened) {
                    setIsMenuOpened((prevState: boolean) => !prevState);
                  }
                }}
                to="/cart"
                className="bottom-bar__icon"
              >
                <img src={CartIcon} alt="Cart-logo" className="bottom__logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
