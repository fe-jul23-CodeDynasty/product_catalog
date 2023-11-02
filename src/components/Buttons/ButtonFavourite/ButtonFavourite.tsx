import React, { useContext } from 'react';
import { StorageContext } from '../../StorageContext/StorageContext';
import './ButtonFavourite.scss';

import HeartRemove from '../../Card/images/heart-red.svg';
import HeartAdd from '../../../images/favourites_heart_like.svg';
import { Product } from '../../../types/Product';

type Props = {
  product: Product;
};

export const ButtonFavourite: React.FC<Props> = ({ product }) => {
  const { addToFavorites, removeFavorite, favorites }
    = useContext(StorageContext);

  const isProductFavorite = favorites.some(
    oneProduct => oneProduct.id === product.id,
  );

  return isProductFavorite ? (
    <button
      onClick={() => removeFavorite(product)}
      type="button"
      className="button-heart-remove"
    >
      <img src={HeartRemove} alt="heart-icon" className="icon--heart" />
    </button>
  ) : (
    <button
      onClick={() => addToFavorites(product)}
      type="button"
      className="button-heart-add"
    >
      <img src={HeartAdd} alt="heart-icon" className="icon--heart" />
    </button>
  );
};
