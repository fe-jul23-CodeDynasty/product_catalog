import './Footer.scss';
import '../../App.scss';
import { NavLink } from 'react-router-dom';
import footer_logo from '../../images/logo_main.svg';
import ButtonUp from '../ButtonUp/ButtonUp';

function Footer() {
  return (
    <footer className="footer noselect">
      <div className="footer__image">
        <NavLink to="/" className="footer__image--blocks">
          <img src={footer_logo} alt="footer__image--blocks" />
        </NavLink>
      </div>

      <div className="footer__info">
        <a
          className="footer__link"
          href="https://github.com/fe-jul23-CodeDynasty"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>

        <a
          className="footer__link"
          href="https://github.com/orgs/fe-jul23-CodeDynasty/people"
          target="_blank"
          rel="noreferrer"
        >
          CONTACTS
        </a>
      </div>
      <ButtonUp />
    </footer>
  );
}

export default Footer;
