import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames';
import './CartModal.scss';

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
  setCart: (item: any) => void;
};

export const CartModal: React.FC<Props> = ({ active, setActive, setCart }) => {
  return (
    <div
      className={classNames('modal', {
        active,
      })}
    >
      <div
        className={classNames('modal__content', {
          active,
        })}
      >
        <h3 className="modal__title">Confirm the payment</h3>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button-cancel"
            type="button"
            onClick={() => setActive(false)}
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
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
