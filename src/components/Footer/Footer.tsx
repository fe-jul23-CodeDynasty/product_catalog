import './Footer.scss';
// import { useEffect, useState } from 'react';
// import footer_logo2 from './footer-image/footerLogo.svg';
import { NavLink } from 'react-router-dom';
import footer_logo from '../../images/logo_main.svg';
import ButtonUp from '../ButtonUp/ButtonUp';

function Footer() {
  // const [showGoToTop, setShowGoToTop] = useState(false);

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   if (window.scrollY > 100) {
  //   //     setShowGoToTop(true);
  //   //   } else {
  //   //     setShowGoToTop(false);
  //   //   }
  //   // };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <main className="main__body">
      <footer className="footer">
        <div className="footer__image">
          <NavLink to="/" className="footer__image--blocks">
            <img src={footer_logo} alt="footer__image--blocks" />
          </NavLink>
        </div>

        {/* <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#github">
                GITHUB
              </a>
            </li>

            <li className="footer__item">
              <a className="footer__link" href="#contacts">
                CONTACTS
              </a>
            </li>

            <li className="footer__item">
              <a className="footer__link" href="#rights">
                RIGHTS
              </a>
            </li>
          </ul>
        </div> */}
        <div className="footer__info">
          <a className="footer__link" href="#github">
            GITHUB
          </a>

          <a className="footer__link" href="#contacts">
            CONTACTS
          </a>

          <a className="footer__link" href="#rights">
            RIGHTS
          </a>
        </div>
        {/* <div className="footer__button">
          <p className="footer__button--text">Back on top</p>
          {showGoToTop && (
            <button
              type="submit"
              className="footer__button--up"
              aria-label="Scroll to top"
              onClick={scrollToTop}
            />
          )}
        </div> */}
        <div className="container-home__buttonUp">
          <ButtonUp />
        </div>
      </footer>
    </main>
  );
}

export default Footer;
