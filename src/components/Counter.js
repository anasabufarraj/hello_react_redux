import style from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const hidden = useSelector((state) => state.hidden);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleIncrementBy = () => {
    dispatch({ type: 'incrementBy', value: 5 });
  };

  const handleDecrementBy = () => {
    dispatch({ type: 'DecrementBy', value: 5 });
  };

  const handleToggle = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>
      {hidden || (
        <div>
          <button onClick={handleIncrement}>+</button>
          <div className={style.value}>{counter}</div>
          <button onClick={handleDecrement}>-</button>
        </div>
      )}
      <button onClick={handleDecrementBy}>-5</button>
      <button className={style.toggle} onClick={handleToggle}>
        Toggle Counter
      </button>
      <button onClick={handleIncrementBy}>+5</button>
    </main>
  );
}

export default Counter;
