import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const App = () => {

  const [ navOpened, setNavOpened ] = useState(false);

  return (
    <>
      <div className="header-wrapper">
        <Header setNavOpened={setNavOpened} navOpened={navOpened} />
      </div>
      <div className="nav-wrapper">
        <Nav navOpened={navOpened} />
      </div>
      <div className="main-wrapper">
        <Main />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default App;