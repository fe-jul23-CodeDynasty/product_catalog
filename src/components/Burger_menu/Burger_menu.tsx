import './Burger_menu.scss';

import HeaderLogo from '../../images/logo.svg';
import CloseIcon from '../../images/close.svg';
import FavouriteIcon from '../../images/favourite.svg';
import CartIcon from '../../images/cart.svg';

export const BurgerMenu = () => (
  <>
    <div className="menu">
      <div className="top-bar menu__top">
        <a href="#home" className="top-bar__icon">
          <img src={HeaderLogo} alt="Header-logo" className="header__logo" />
        </a>
        <div className="icon-container__close">
          <a href="#home" className="top-bar__icon icon--close">
            <img src={CloseIcon} alt="Header-close" className="header__close" />
          </a>
        </div>
      </div>

      <div className="menu__body">
        <nav className="nav menu__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link is-active" href="#home">
                home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#phones">
                phones
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#tablets">
                tablets
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#accessories">
                accessories
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom-bar menu__bottom">
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
  </>
);
