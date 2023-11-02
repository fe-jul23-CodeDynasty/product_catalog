import { Link } from 'react-router-dom';
import { useContext } from 'react';
import shopping_bag from '../../images/shopping_bag.svg';
import { StorageContext } from '../StorageContext';

export const ShoppingBagButton = () => {
  const { totalItemsCounter } = useContext(StorageContext);

  return (
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
  );
};
