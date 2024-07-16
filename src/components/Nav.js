export const Nav = (props) => {

  return (
    <nav className={props.navOpened ? 'open': 'closed'}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Reserve a Table</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
    </nav>
  );
}