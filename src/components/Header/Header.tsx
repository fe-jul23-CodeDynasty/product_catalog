import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo_main from '../../images/logo_main.svg';
import burger_menu from '../../images/burger_menu.svg';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import '../../App.scss';
import { ShoppingBagButton } from '../ShoppingBagButton';
import { FavouritesButton } from '../FavouritesButton';
import { StorageContext } from '../StorageContext';

export const Header = () => {
  const { setIsMenuOpened } = useContext(StorageContext);
  const { setWindowResize, isMobileVersion } = useContext(StorageContext);

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

          {!isMobileVersion && <Navigation />}
        </div>

        <div className="container__heart-like-shopping-bag">
          <div className="header-icon-wrapper">
            <FavouritesButton />
          </div>
          <div className="header-icon-wrapper">
            <ShoppingBagButton />
          </div>
        </div>

        <Link to="/openmenu" className="burger-img">
          <img className="header__icon" src={burger_menu} alt="close menu" />
        </Link>
      </div>
    </header>
  );
};
