import { useNavigate } from 'react-router-dom';
import ArrowBack from './images/button-arrow.svg';
import './ButtonBack.scss';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="button">
      <button
        type="button"
        aria-label="button-back"
        className="button__back"
        onClick={handleGoBack}
      >
        <img src={ArrowBack} alt="back-icon" className="button__back--icon" />
      </button>
    </div>
  );
};
