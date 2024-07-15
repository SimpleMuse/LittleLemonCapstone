import logo from '../images/Logo.svg';

export const Header = () => {
  return (
    <header>
      <a href="/" aria-label="Link to home page">
        <img src={logo} alt="Little Lemon Logo" />
      </a>
    </header>
  )
}