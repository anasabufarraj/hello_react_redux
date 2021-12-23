import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../app/store';
import style from './Counter.module.css';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const hidden = useSelector((state) => state.hidden);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrementBy = () => {
    dispatch(counterActions.incrementBy(5));
  };

  const handleDecrementBy = () => {
    dispatch(counterActions.decrementBy(5));
  };

  const handleToggle = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={style.counter}>
      <h1>Counter</h1>
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
