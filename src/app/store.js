import { createStore } from 'redux';

const initialState = { counter: 0, hidden: false };

function counterReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      hidden: state.hidden,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      hidden: state.hidden,
    };
  }

  if (action.type === 'incrementBy') {
    return {
      counter: state.counter + action.value,
      hidden: state.hidden,
    };
  }

  if (action.type === 'DecrementBy') {
    return {
      counter: state.counter - action.value,
      hidden: state.hidden,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      hidden: !state.hidden,
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
