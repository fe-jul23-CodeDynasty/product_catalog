import './BurgerMenu.scss';
import FavouriteIcon from './images/favourite.svg';
import CartIcon from './images/cart.svg';

export const BurgerMenu = () => {
  return (
    <>
      <div className="burger-menu">
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
