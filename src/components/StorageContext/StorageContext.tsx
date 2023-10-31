import React, { createContext, ReactNode, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Product } from '../../types/Product';

type StorageContextType = {
  cart: Product[];
  setCart: any;
  removeFromCart: (product: Product) => void;
  totalCost: number;
  setTotalCost: any;
  totalItemsCounter: number;
  setTotalItemsCounter: any;
  addToCart: (product: Product) => void;
  favorites: Product[];
  setFavorites: any;
  addToFavorites: (product: Product) => void;
  favoritesCounter: number;
};

export const StorageContext = createContext<StorageContextType>({
  cart: [],
  setCart: () => {},
  removeFromCart: () => {},
  totalCost: 0,
  setTotalCost: () => {},
  totalItemsCounter: 0,
  setTotalItemsCounter: () => {},
  addToCart: () => {},
  favorites: [],
  setFavorites: () => {},
  addToFavorites: () => {},
  favoritesCounter: 0,
});

type Props = {
  children: ReactNode;
};
export const StorageContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('cart', []);

  const totalGeneralItemsCounter = cart.reduce((acc, currProd) => {
    return acc + (currProd.count ? currProd.count : 1);
  }, 0);

  const [totalItemsCounter, setTotalItemsCounter] = useState(
    totalGeneralItemsCounter,
  );

  const startTotalCost: number = cart.reduce((acc, curr: Product) => {
    return acc + curr.price * (curr.count ? curr.count : 1);
  }, 0);

  const [totalCost, setTotalCost] = useState<number>(startTotalCost);

  const removeFromCart = (product: Product) => {
    const updatedCart: Product[] = cart.filter(item => item.id !== product.id);

    setCart(updatedCart);

    const newTotalCost = updatedCart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalCost(newTotalCost);
  };

  const addToCart = (product: Product) => {
    const findDublicate = cart.find(oneProduct => oneProduct.id === product.id);

    if (findDublicate) {
      removeFromCart(product);

      return;
    }

    // const updatedCart = [...cart, product];

    setCart(prevState => {
      if (prevState) {
        return [...prevState, product];
      }

      return [product];
    });

    const newTotalCost = cart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalCost(newTotalCost);
  };

  const [favorites, setFavorites] = useLocalStorage<Product[]>('favorites', []);

  const removeFavorite = (product: Product) => {
    const updatedFavorites = favorites.filter(
      favorite => favorite.id !== product.id,
    );

    setFavorites(updatedFavorites);
  };

  const addToFavorites = (product: Product) => {
    const findDublicate = favorites.find(
      oneProduct => oneProduct.id === product.id,
    );

    if (findDublicate) {
      removeFavorite(product);

      return;
    }

    const updatedFavorites = [...favorites, product];

    setFavorites(updatedFavorites);
  };

  const favoritesCounter: number = favorites.length;

  return (
    <StorageContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        totalCost,
        setTotalCost,
        totalItemsCounter,
        setTotalItemsCounter,
        addToCart,
        addToFavorites,
        favoritesCounter,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
