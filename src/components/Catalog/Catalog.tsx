import './Catalog.scss';
import React, { useState, useEffect, useContext } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { Card } from '../Card/card';
import { getPhonesByParams } from '../../api/api';
import { Product } from '../../types/Product';
import { Dropdown } from './Dropdown/Dropdown';
import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { DropdownOptions } from '../../types/DropdownOptions';
import { PaginationButtons } from './Pagination/Pagination';
import { Category } from '../../types/Category';
import { CatalogSkeletonLoader } from './CatalogSkeletonLoader';
import { StorageContext } from '../StorageContext/StorageContext';

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  const sortBy = searchParams.get('sortBy') || 'price';
  const itemsOnPage = +(searchParams.get('itemsOnPage') || '8');
  const currentPage = +(searchParams.get('currentPage') || '1');
  const direction = searchParams.get('direction') || 'ASC';
  const navigate = useNavigate();

  const { errorNotify } = useContext(StorageContext);

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

        if (!Object.values(Category).includes(category as Category)) {
          navigate('../../not_found', { relative: 'path', replace: true });
        }
      })
      .catch(() => errorNotify('Incorrect search parameters!'))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, [searchParams, category]);

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

  return isLoading ? (
    <CatalogSkeletonLoader
      itemsOnPage={itemsOnPage}
      categoryTitle={categoryTitle}
    />
  ) : (
    <div className="phones">
      <div className="container">
        <div className="phones-page">
          <div className="phones-page__top">
            <Link to="/" className="link--favourites noselect">
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
            <h1 className="title-phones">{categoryTitle}</h1>
            <p className="items-count">{`${totalItems} models`}</p>
          </div>

          <div className="phones-page__wrapper">
            <div className="sort-buttons">
              <Dropdown
                title={firstDropdownTitle}
                options={firstDropdownOptions}
                optionType={sortBy}
                onSelectOptionChange={handleSelectSortChange}
              />

              <Dropdown
                title={secondDropdownTitle}
                options={secondDropdownOptions}
                optionType={itemsOnPage}
                onSelectOptionChange={handleSelectItemsOnPageChange}
              />
            </div>

            <section className="cards">
              {products.map(product => (
                <div className="card-container" key={product.id}>
                  <Card product={product} />
                </div>
              ))}
            </section>

            <div className="phones-page__bottom noselect">
              <PaginationButtons
                key={currentPage}
                currentPage={currentPage}
                totalItems={totalItems}
                itemsOnPage={itemsOnPage}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
