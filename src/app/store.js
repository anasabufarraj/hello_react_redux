import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, hidden: false },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
      if (state.counter < 0) {
        state.counter = 0;
      }
    },
    incrementBy(state, action) {
      state.counter += action.payload;
    },
    decrementBy(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.hidden = !state.hidden;
    },
  },
});

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { quantity: 0 },
//   reducers: {
//     increment(state) {
//       state.quantity++;
//     },
//     decrement(state) {
//       state.counter--;
//       if (state.quantity < 0) {
//         state.quantity = 0;
//       }
//     },
//   },
// });

const store = configureStore({
  reducer: counterSlice.reducer,
});

const counterActions = counterSlice.actions;

export { store as default, counterActions };
