import { useDispatch } from 'react-redux';
import { authActions } from '../app/store';
import style from './LogIn.module.css';

function LogIn() {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    // Use preventDefault() to prevent <button> submit
    // Otherwise, use <input type="button" /> button
    event.preventDefault();
    dispatch(authActions.logIn(null));
  };

  return (
    <main className={style.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={style.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={style.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}

export default LogIn;
