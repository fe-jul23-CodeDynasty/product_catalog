import React, { createContext, ReactNode, useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { toast } from 'react-toastify';
import { Product } from '../../types/Product';

type StorageContextType = {
  cart: Product[];
  setCart: any;
  removeFromCart: (product: Product) => void;
  removeFromCartInCart: (product: Product) => void;
  totalCost: number;
  setTotalCost: any;
  totalItemsCounter: number;
  setTotalItemsCounter: any;
  addToCart: (product: Product) => void;
  favorites: Product[];
  setFavorites: any;
  addToFavorites: (product: Product) => void;
  removeFavorite: (product: Product) => void;
  favoritesCounter: number;
  errorNotify: (message: string) => void;
  isMenuOpened: boolean;
  setIsMenuOpened: any;
  isMobileVersion: boolean;
  setWindowResize: any;
};

export const StorageContext = createContext<StorageContextType>({
  cart: [],
  setCart: () => {},
  removeFromCart: () => {},
  removeFromCartInCart: () => {},
  totalCost: 0,
  setTotalCost: () => {},
  totalItemsCounter: 0,
  setTotalItemsCounter: () => {},
  addToCart: () => {},
  favorites: [],
  setFavorites: () => {},
  addToFavorites: () => {},
  removeFavorite: () => {},
  favoritesCounter: 0,
  errorNotify: () => {},
  isMenuOpened: false,
  setIsMenuOpened: () => {},
  isMobileVersion: false,
  setWindowResize: () => {},
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

  useEffect(() => {
    setTotalCost(startTotalCost);
  }, [cart, totalItemsCounter]);

  const removeFromCart = (product: Product) => {
    const updatedCart: Product[] = cart.filter(item => item.id !== product.id);

    setCart(updatedCart);

    const newTotalCost = updatedCart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalItemsCounter((prev: number) => prev - 1);
    setTotalCost(newTotalCost);
  };

  const removeFromCartInCart = (product: Product) => {
    const updatedCart: Product[] = cart.filter(item => item.id !== product.id);

    setCart(updatedCart);

    const newTotalCost = updatedCart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalCost(newTotalCost);
  };

  const addToCart = (product: Product) => {
    const findDublicate = cart.find(oneProduct => oneProduct.id === product.id);

    if (findDublicate) {
      removeFromCart(product);
      setTotalItemsCounter((prev: number) => prev - 1);

      return;
    }

    setCart(prevState => {
      if (prevState) {
        return [...prevState, product];
      }

      return [product];
    });

    const newTotalCost = cart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalCost(newTotalCost);
    setTotalItemsCounter((prev: number) => prev + 1);
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

  const errorNotify = (message: string) => toast.error(`${message}`, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [windowResize, setWindowResize] = useState(window.innerWidth);
  const isMobileVersion = windowResize <= 639;

  return (
    <StorageContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        removeFromCartInCart,
        totalCost,
        setTotalCost,
        totalItemsCounter,
        setTotalItemsCounter,
        addToCart,
        addToFavorites,
        favoritesCounter,
        favorites,
        setFavorites,
        removeFavorite,
        errorNotify,
        isMenuOpened,
        setIsMenuOpened,
        isMobileVersion,
        setWindowResize,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
