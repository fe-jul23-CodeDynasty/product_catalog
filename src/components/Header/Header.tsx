import { Link, NavLink } from 'react-router-dom';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className="header">
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
          className="burger__menu"
          href="/"
        >
          <img src={burger_menu} alt="menu" />
        </a>
      </div>
    </header>
  );
};
