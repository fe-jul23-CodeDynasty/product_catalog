import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import App from './App';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
import { CartMenu } from './components/CartMenu/CartMenu';
import { ProductDetailsPage } from './components/ProductDetailsPage/ProductDetailsPage';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="catalog">
          <Route path=":category" element={<Catalog />} />
          <Route path=":category/:id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartMenu />} />
        <Route path="/openmenu" element={<BurgerMenu />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
