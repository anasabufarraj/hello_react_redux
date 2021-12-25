import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, hidden: false },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
      if (state.value < 0) {
        state.value = 0;
      }
    },
    incrementBy(state, action) {
      state.value += action.payload;
    },
    decrementBy(state, action) {
      state.value -= action.payload;
      if (state.value < 0) {
        state.value = 0;
      }
    },
    toggle(state) {
      state.hidden = !state.hidden;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
