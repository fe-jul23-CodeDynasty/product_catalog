import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Phones } from './components/Phones/Phones';
import { Tablets } from './components/Tablets/Tablets';
import { Accessories } from './components/Accessories/Accessories';
import App from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="/phones" element={<Phones />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
