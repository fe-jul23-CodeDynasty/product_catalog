import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';
import FavouriteIcon from './images/favourite.svg';
import CartIcon from './images/cart.svg';
import logo_main from './images/logo.svg';
import close_menu from './images/close_menu.svg';

export const BurgerMenu = () => {
  return (
    <>
      <div className="burger-menu">
        <header className="header">
          <div className="header__content">
            <div className="header-nav-container">
              <NavLink to="/" className="logo">
                <img className="logo__img" src={logo_main} alt="Logo link" />
              </NavLink>
            </div>

            <a href="/" className="burger-img">
              <img className="header__icon" src={close_menu} alt="menu" />
            </a>
          </div>
        </header>
        <div className="burger-menu__body">
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <div className="bottom-bar burger-menu__bottom">
            <div className="icon-container__favourite">
              <a href="#favorites" className="bottom-bar__icon is-active">
                <img
                  src={FavouriteIcon}
                  alt="Favourite-logo"
                  className="bottom__logo"
                />
              </a>
            </div>
            <div className="icon-container__cart">
              <a href="#cart" className="bottom-bar__icon">
                <img src={CartIcon} alt="Cart-logo" className="bottom__logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
