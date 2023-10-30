import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Phones } from './components/Phones/Phones';
import { Tablets } from './components/Tablets/Tablets';
import { Accessories } from './components/Accessories/Accessories';
import App from './App';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
import { CartMenu } from './components/CartMenu/CartMenu';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartMenu />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
