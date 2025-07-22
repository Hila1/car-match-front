import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 