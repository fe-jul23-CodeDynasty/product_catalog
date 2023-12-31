import './Button.scss';
import '../../App.scss';
import { useState, useEffect } from 'react';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const d
    = 'M0.529247 5.47124C0.268897 5.21089 0.268897 4.78878 0.529246 '
    + '4.52843L4.52925 0.528433C4.7896 0.268083 5.21171 0.268083 5.47206 '
    + '4.52843L4.52925 0.528433C4.7896 0.268083 5.21171 0.268083 5.47206 '
    // eslint-disable-next-line max-len
    + '0.528433L9.47206 4.52843C9.73241 4.78878 9.73241 5.21089 9.47206 5.47124C9'
    + '.21171 5.73159 8.7896 5.73159 8.52925 5.47124L5.00065 1.94265L1.47206 '
    + '5.47124C1.21171 5.73159 0.789596 5.73159 0.529247 5.47124Z';

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

  const svgCode = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill="#F1F2F9" />
    </svg>
  );

  return (
    <div className="container-home__buttonUp noselect">
      <button
        type="submit"
        className="upbtn"
        style={{
          bottom: isVisible ? '28px' : '-80px',
        }}
        onClick={scrollToTop}
      >
        <div className="upbtn__text">Back to Top</div>

        <div className="upbtn__svg">{svgCode}</div>
      </button>
    </div>
  );
};

export default ButtonUp;
