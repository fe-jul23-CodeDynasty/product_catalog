import './FavouritesPage.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import ButtonUp from '../ButtonUp/ButtonUp';

export const FavouritesPageSkeletonLoader: React.FC = () => {
  return (
    <div className="favourite-page">
      <div className="container">
        <SkeletonTheme baseColor="#161827" highlightColor="#323542">
          <div className="favourite-page__body">
            <div className="favourite-page__top">
              <a href="#back" className="link--favourites">
                <img
                  src={HomeIcon}
                  alt="home-icon"
                  className="icon--home link--favourites__icon"
                />
                <img
                  src={ArrowRightIcon}
                  alt="arrow-right-icon"
                  className="icon--arrow-right link--favourites__icon"
                />
                Favourites
              </a>
              <h1 className="title">
                <Skeleton />
              </h1>

              <p className="items-count">
                <Skeleton width={50} />
              </p>
            </div>

            <section className="cards">
              {Array.from({ length: 8 }).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="card__container" key={index}>
                  <Skeleton height={530} />
                </div>
              ))}
            </section>
          </div>
          <div className="container-home__buttonUp">
            <ButtonUp />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};
