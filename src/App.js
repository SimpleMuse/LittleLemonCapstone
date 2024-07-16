import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="nav-wrapper">
        <Nav />
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