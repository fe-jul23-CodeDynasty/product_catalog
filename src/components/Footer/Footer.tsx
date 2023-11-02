import './Footer.scss';
import { NavLink } from 'react-router-dom';
import footer_logo from '../../images/logo_main.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__image">
        <NavLink to="/" className="footer__image--blocks">
          <img src={footer_logo} alt="footer__image--blocks" />
        </NavLink>
      </div>

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
    </footer>
  );
}

export default Footer;
