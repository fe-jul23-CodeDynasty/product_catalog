import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <Footer />
    </div>
  );
}

export default App;
