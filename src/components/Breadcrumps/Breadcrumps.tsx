import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import ArrowRightIcon from '../Catalog/images/arrow-right.svg';
import HomeIcon from '../Catalog/images/home.svg';

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentlink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentlink += `/${crumb}`;

      if (crumb === 'catalog') {
        return null;
      }

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentlink}>{crumb}</Link>
          {index < array.length - 1 && (
            <img
              src={ArrowRightIcon}
              alt="arrow-right-icon"
              className="bread__container--arrow"
            />
          )}
        </div>
      );
    });

  return (
    <div className="bread">
      <div className="bread__container">
        <Link to="/" className="link--favourites">
          <img
            src={HomeIcon}
            alt="home-icon"
            className="bread__container--home"
          />
          <img
            src={ArrowRightIcon}
            alt="arrow-right-icon"
            className="bread__container--arrow"
          />
        </Link>
        <div className="breadcrumbs">{crumbs}</div>
      </div>
    </div>
  );
};
