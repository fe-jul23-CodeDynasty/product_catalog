import './Button.scss';
import { useState, useEffect } from 'react';
import buttonUpSvg from './images/buttonUpSvg';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="submit"
      className="upbtn"
      style={{
        bottom: isVisible ? '38px' : '-80px',
      }}
      onClick={scrollToTop}
    >
      <div className="upbtn__text">Back to Top</div>

      <div className="upbtn__svg">{buttonUpSvg}</div>
    </button>
  );
};

export default ButtonUp;
