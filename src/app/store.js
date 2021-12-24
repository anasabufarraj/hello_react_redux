import { createSlice, configureStore } from '@reduxjs/toolkit';

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
    },
    toggle(state) {
      state.hidden = !state.hidden;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: { isAuth: false },
  reducers: {
    logIn(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
