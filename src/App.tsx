import './App.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <BurgerMenu />
    </div>
  );
}

export default App;
