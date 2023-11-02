import './Footer.scss';
import '../../App.scss';
import { NavLink } from 'react-router-dom';
import footer_logo from '../../images/logo_main.svg';

function Footer() {
  const links = [
    {
      text: 'GITHUB',
      url: 'https://github.com/fe-jul23-CodeDynasty',
    },
    {
      text: 'CONTACTS',
      url: 'https://github.com/orgs/fe-jul23-CodeDynasty/people',
    },
  ];

  return (
    <footer className="footer noselect">
      <div className="footer__image">
        <NavLink to="/" className="footer__image--blocks">
          <img src={footer_logo} alt="footer__image--blocks" />
        </NavLink>
      </div>

      <div className="footer__info">
        {links.map(link => (
          <a
            key={link.text}
            className="footer__link"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
