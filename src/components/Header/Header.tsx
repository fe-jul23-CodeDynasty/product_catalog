import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import { StorageContext } from '../StorageContext/StorageContext';

export const Header = () => {
  const { favorites } = useContext(StorageContext);

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
            <div className="wrapper-heart-counter">
              <img src={favourites_heart_like} alt="heart like" />
              {!!favorites.length && (
                <div className="shopping-bag__counter">
                  <p>{favorites.length}</p>
                </div>
              )}
            </div>
          </Link>

          <Link className="container__shopping-bag" to="/cart">
            <img src={shopping_bag} alt="shopping bag" />
          </Link>
        </div>

        <a className="burger-img" href="/">
          <img src={burger_menu} alt="menu" />
        </a>
      </div>
    </header>
  );
};
