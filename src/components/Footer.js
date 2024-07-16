import img_logo from '../images/Logo.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-flex">
        <div className="footer-item-1">
          <img src={img_logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-item-2">
          <h2 className="heading">The Family Owned Mediterranean Restaurant</h2>
          <p>The Little Lemon restaurant is serving fresh ingredients with class Mediterranean flavors for you and your family.</p>
        </div>
      </div>
      <div className="footer-copyright">Copyright @2024 Little Lemon</div>
    </footer>
  )
}