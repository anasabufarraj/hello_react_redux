import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/">
        <h2>React Redux</h2>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
