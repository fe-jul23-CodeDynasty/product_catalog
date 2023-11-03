import { Link } from 'react-router-dom';
import { useContext } from 'react';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import { StorageContext } from '../StorageContext';

export const FavouritesButton = () => {
  const { favoritesCounter } = useContext(StorageContext);

  return (
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
  );
};
