import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { StorageContextProvider } from './components/StorageContext/StorageContext';
import ButtonUp from './components/ButtonUp/ButtonUp';

function App() {
  return (
    <div className="App">
      <StorageContextProvider>
        <Header />
        <Outlet />
        <ButtonUp />
        <Footer />
      </StorageContextProvider>
    </div>
  );
}

export default App;
