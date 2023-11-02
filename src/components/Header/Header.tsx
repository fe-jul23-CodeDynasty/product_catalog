import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import shopping_bag from '../../images/shopping_bag.svg';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import '../../App.scss';
import { StorageContext } from '../StorageContext/StorageContext';

export const Header = () => {
  const { favoritesCounter, totalItemsCounter } = useContext(StorageContext);
  // const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [windowResize, setWindowResize] = useState(window.innerWidth);

  const isMobileVersion = windowResize <= 639;

  // eslint-disable-next-line no-console
  // console.log(isMenuOpened);
  const {
    setIsMenuOpened,
  } = useContext(StorageContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowResize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header noselect">
      <div className="header__content">
        <div className="header-nav-container">
          <NavLink to="/" className="logo">
            <img className="logo__img" src={logo_main} alt="Logo link" />
          </NavLink>

          {!isMobileVersion && (
            <Navigation />
          )}
        </div>

        <div className="container__heart-like-shopping-bag">
          <Link className="container__heart-like" to="/favourites">
            <div className="wrapper-heart-counter">
              <img src={favourites_heart_like} alt="heart like" />
              {!!favoritesCounter && (
                <div className="shopping-favorites-bag__counter">
                  <p>{favoritesCounter}</p>
                </div>
              )}
            </div>
          </Link>

          <Link className="container__shopping-bag" to="/cart">
            <div className="wrapper-shopping-bag-counter">
              <img src={shopping_bag} alt="shopping bag" />
              {!!totalItemsCounter && (
                <div className="shopping-favorites-bag__counter">
                  <p>{totalItemsCounter}</p>
                </div>
              )}
            </div>
          </Link>
        </div>

        <Link
          to="/openmenu"
          className="burger-img"
          onClick={() => {
            setIsMenuOpened((prevState: any) => !prevState);
          }}
        >
          <img className="header__icon" src={burger_menu} alt="close menu" />
        </Link>
      </div>
    </header>
  );
};
