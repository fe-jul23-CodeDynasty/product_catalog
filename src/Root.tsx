import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Phones/Catalog';
import App from './App';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
import { CartMenu } from './components/CartMenu/CartMenu';
// eslint-disable-next-line max-len
import { ProductDetailsPage } from './components/ProductDetailsPage/ProductDetailsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductDetailsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartMenu />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
