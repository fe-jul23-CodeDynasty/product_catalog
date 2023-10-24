import './Header.scss';

import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="nav_container">
          <a
            href="/"
            className="logo"
          >
            <img
              className="logo__img"
              src={logo_main}
              alt="Logo link"
            />
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__item__link is-active" href="/home">home</a>
              </li>
              <li className="nav__item">
                <a className="nav__item__link" href="/phones">phones</a>
              </li>
              <li className="nav__item">
                <a className="nav__item__link" href="/tablets">tablets</a>
              </li>
              <li className="nav__item" data-qa="hover">
                <a
                  className="nav__item__link"
                  href="/accessories"
                >
                  accessories
                </a>
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
