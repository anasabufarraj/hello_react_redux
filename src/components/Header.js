import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../app/store';
import style from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state['auth'].isAuth);

  const handleLogout = () => {
    dispatch(authActions.logOut(null));
  };

  return (
    <header className={style.header}>
      <a href="/">
        <h2>React Redux</h2>
      </a>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
