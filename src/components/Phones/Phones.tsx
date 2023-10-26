/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { getPhones } from '../../api/api';

export const Phones: React.FC = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(phones);

  return <h1>Phones pages</h1>;
};
