import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames';
import './CartModal.scss';
import '../../App.scss';
import cartCheck from '../../images/cart-check.svg';
import { StorageContext } from '../StorageContext/StorageContext';

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
  setCart: (item: any) => void;
};

export const CartModal: React.FC<Props> = ({ active, setActive, setCart }) => {
  const { setTotalItemsCounter } = useContext(StorageContext);

  return (
    <div
      className={classNames('modal', 'noselect', {
        active,
      })}
    >
      <div
        className={classNames('modal__content', {
          active,
        })}
      >
        <img src={cartCheck} alt="" />
        <h3 className="modal__title">Confirm the payment</h3>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button-cancel"
            type="button"
            onClick={() => {
              setActive(false);
            }}
          >
            No
          </button>
          <button
            className="modal__button modal__button-success"
            type="button"
            onClick={() => {
              setActive(false);
              toast('The payment was successful!');
              setCart([]);
              setTotalItemsCounter(0);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
