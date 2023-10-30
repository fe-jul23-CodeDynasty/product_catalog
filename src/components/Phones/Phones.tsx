/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import './Phones.scss';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../Card/card';
import { getPhonesByUrl } from '../../api/api';
import { Phone } from '../../types/Phone';
import { ServerResponse } from '../../types/ServerResponse';
import { Dropdown } from './Dropdown/Dropdown';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { DropdownOptions } from '../../types/DropdownOptions';
import { PaginationButtons } from './Pagination/Pagination';

function getPreparedPhones(api: string): Promise<ServerResponse> {
  return getPhonesByUrl(api);
}

export const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState(0);
  const sortBy = searchParams.get('sortBy') || '';
  const itemsOnPage = +(searchParams.get('itemsOnPage') || 0);
  const currentPage = +(searchParams.get('currentPage') || 0);
  const direction = searchParams.get('direction') || '';

  const preparedApi = `https://product-catalog-be-qps4.onrender.com/products?category=phones&sortBy=${sortBy}&itemsOnPage=${itemsOnPage}&currentPage=${currentPage}&direction=${direction}`;

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
    { id: 1, value: '4', title: '4' },
    { id: 2, value: '8', title: '8' },
    { id: 3, value: '16', title: '16' },
    { id: 4, value: '32', title: '32' },
  ];

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (sortBy === '') {
      params.set('sortBy', 'price');
    }

    if (itemsOnPage === 0) {
      params.set('itemsOnPage', '16');
    }

    if (currentPage === 0) {
      params.set('currentPage', '1');
    }

    if (direction === '') {
      params.set('direction', 'ASC');
    }

    setSearchParams(params);

    getPreparedPhones(preparedApi)
      .then(res => {
        setPhones(res.products);
        setTotalItems(res.totalItems);
      })
      .catch(error => {
        console.log(error);
      });
  }, [sortBy, itemsOnPage, currentPage, direction]);

  const handleSelectSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams);

    params.set('sortBy', event.target.value);

    setSearchParams(params);
  };

  const handleSelectItemsOnPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const params = new URLSearchParams(searchParams);
    const previousItemsCount = itemsOnPage;
    const newItemsCount = +event.target.value;
    const page = Math.ceil(currentPage * (previousItemsCount / newItemsCount));

    if (currentPage !== 1 && previousItemsCount > newItemsCount) {
      params.set('currentPage', `${page - 1}`);
    }

    if (currentPage !== 1 && previousItemsCount < newItemsCount) {
      params.set('currentPage', `${page}`);
    }

    params.set('itemsOnPage', `${newItemsCount}`);
    setSearchParams(params);
  };

  return (
    <div className="phones">
      <div className="container">
        <div className="phones-page">
          <div className="phones-page__top">
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
              Phones
            </a>
            <h1 className="title-phones">Mobile phones</h1>
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
              {phones.map(phone => (
                <div className="card-container" key={phone.id}>
                  <Card phone={phone} />
                </div>
              ))}
            </section>

            <PaginationButtons
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
  );
};
