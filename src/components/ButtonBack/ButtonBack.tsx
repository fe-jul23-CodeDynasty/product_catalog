import { useNavigate } from 'react-router-dom';
import ArrowBack from './images/button-arrow.svg';
import './ButtonBack.scss';
import '../../App.scss';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="buttonb noselect">
      <button
        type="button"
        aria-label="buttonb-back"
        className="buttonb__back"
        onClick={handleGoBack}
      >
        <img src={ArrowBack} alt="back-icon" className="buttonb__back--icon" />
        Back
      </button>
    </div>
  );
};
