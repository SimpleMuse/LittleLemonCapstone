import img_logo from '../images/Logo.svg';
import img_hamburger from '../images/icon _hamburger_menu_.svg';
import img_basket from '../images/Basket.svg';

export const Header = () => {
  return (
    <header>
      <div className="header-element hamburg-menu">
        <img src={img_hamburger} alt="Expand Menu" />
      </div>
      <div className="header-element header-logo">
        <a href="/" aria-label="Link to home page">
          <img src={img_logo} alt="Little Lemon Logo" />
        </a>
      </div>
      <div className="header-element online-order">
        <a href="/" aria-label="Order Online">
          <img src={img_basket} alt="Order Online" />
        </a>
      </div>
    </header>
  )
}