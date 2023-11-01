import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
// eslint-disable-next-line max-len
import { StorageContextProvider } from './components/StorageContext/StorageContext';

function App() {
  return (
    <div className="App">
      <StorageContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </StorageContextProvider>
    </div>
  );
}

export default App;
