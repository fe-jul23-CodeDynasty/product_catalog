import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import Footer from './components/Footer/Footer';

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
