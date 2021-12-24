import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../app/store';
import style from './Counter.module.css';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state['counter'].value);
  const hidden = useSelector((state) => state['counter'].hidden);

  const handleIncrement = () => {
    dispatch(counterActions.increment(null));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement(null));
  };

  const handleIncrementBy = () => {
    dispatch(counterActions.incrementBy(5));
  };

  const handleDecrementBy = () => {
    dispatch(counterActions.decrementBy(5));
  };

  const handleToggle = () => {
    dispatch(counterActions.toggle(null));
  };

  return (
    <main className={style.counter}>
      <h3>Counter</h3>
      {hidden || (
        <div>
          <button onClick={handleIncrement}>+</button>
          <div className={style.value}>{counter}</div>
          <button onClick={handleDecrement}>-</button>
        </div>
      )}
      <button onClick={handleDecrementBy}>-5</button>
      <button onClick={handleToggle}>{hidden ? 'Show' : 'Hide'}</button>
      <button onClick={handleIncrementBy}>+5</button>
    </main>
  );
}

export default Counter;
