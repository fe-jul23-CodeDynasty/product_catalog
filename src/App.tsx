import './App.scss';
import Footer from './components/Footer/Footer';
import { Slider } from './components/Slider/Slider';
import { ByCategories } from './components/byCategoriesSection/ByCategories';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ByCategories />
      <Footer />
    </div>
  );
}

export default App;
