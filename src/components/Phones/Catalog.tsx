import './Catalog.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card } from '../Card/card';
import { getPhonesByParams } from '../../api/api';
import { Product } from '../../types/Product';
import { Dropdown } from './Dropdown/Dropdown';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { DropdownOptions } from '../../types/DropdownOptions';
import { PaginationButtons } from './Pagination/Pagination';
import { Category } from '../../types/Category';
import ButtonUp from '../ButtonUp/ButtonUp';

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sortBy') || 'price';
  const itemsOnPage = +(searchParams.get('itemsOnPage') || '8');
  const currentPage = +(searchParams.get('currentPage') || '1');
  const direction = searchParams.get('direction') || 'ASC';

  const productsParams = `?category=${category}&sortBy=${sortBy}&itemsOnPage=${itemsOnPage}&currentPage=${currentPage}&direction=${direction}`;

  const categoryTitles = {
    phones: 'Mobile phones',
    tablets: 'Tablets',
    accessories: 'Accessories',
  };

  const categoryTitle
    = category !== null
      ? categoryTitles[category as Category]
      : categoryTitles.phones;

  const firstDropdownTitle = 'Sort by';
  const firstDropdownOptions: DropdownOptions[] = [
    { id: 1, value: 'year', title: 'Year' },
    { id: 2, value: 'price', title: 'Price' },
    { id: 3, value: 'color', title: 'Color' },
    { id: 4, value: 'screen', title: 'Screen' },
    { id: 5, value: 'ram', title: 'RAM' },
  ];

  const secondDropdownTitle = 'Items on page';
  const secondDropdownOptions: DropdownOptions[] = [
    { id: 3, value: '16', title: '16' },
    { id: 2, value: '8', title: '8' },
    { id: 1, value: '4', title: '4' },
  ];

  useEffect(() => {
    setIsLoading(true);

    getPhonesByParams(productsParams)
      .then(res => {
        setProducts(res.products);
        setTotalItems(res.totalItems);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [searchParams]);

  const handleSelectSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams);

    params.set('currentPage', '1');
    params.set('sortBy', event.target.value);

    setSearchParams(params);
  };

  const handleSelectItemsOnPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams);

    params.set('currentPage', '1');
    params.set('itemsOnPage', event.target.value);
    setSearchParams(params);
  };

  return (
    <div className="phones">
      <div className="container">
        <div className="phones-page">
          <SkeletonTheme baseColor="#161827" highlightColor="#323542">
            <div className="phones-page__top">
              <Link to="/" className="link--favourites">
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
                {categoryTitle}
              </Link>
              <h1 className="title-phones">
                {isLoading ? <Skeleton width={250} /> : categoryTitle}
              </h1>
              <p className="items-count">
                {isLoading ? <Skeleton width={50} /> : `${totalItems} models`}
              </p>
            </div>

            <div className="phones-page__wrapper">
              <div className="sort-buttons">
                {isLoading ? (
                  <Skeleton width={176} height={40} />
                ) : (
                  <Dropdown
                    title={firstDropdownTitle}
                    options={firstDropdownOptions}
                    optionType={sortBy}
                    onSelectOptionChange={handleSelectSortChange}
                  />
                )}

                {isLoading ? (
                  <Skeleton width={176} height={40} />
                ) : (
                  <Dropdown
                    title={secondDropdownTitle}
                    options={secondDropdownOptions}
                    optionType={itemsOnPage}
                    onSelectOptionChange={handleSelectItemsOnPageChange}
                  />
                )}
              </div>

              <section className="cards">
                {isLoading
                  ? Array.from({ length: itemsOnPage }).map(() => (
                    <div className="card-container">
                      <Skeleton height={530} />
                    </div>
                  ))
                  : products.map(product => (
                    <div className="card-container" key={product.id}>
                      <Card product={product} />
                    </div>
                  ))}
              </section>

              <PaginationButtons
                currentPage={currentPage}
                totalItems={totalItems}
                itemsOnPage={itemsOnPage}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                isLoading={isLoading}
              />
            </div>
            <div className="container-home__buttonUp">
              <ButtonUp />
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};
