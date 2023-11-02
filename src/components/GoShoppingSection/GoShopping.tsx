import { Link } from 'react-router-dom';
import './GoShopping.scss';

type Props = {
  message: string;
};

export const GoShopping: React.FC<Props> = ({ message }) => {
  return (
    <section className="shopping-section shopping">
      <h3 className="shopping__text">{message}</h3>
      <Link to="/catalog/phones" className="shopping__link">
        Go shopping!
      </Link>
    </section>
  );
};
