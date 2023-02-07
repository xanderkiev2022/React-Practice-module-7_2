import { configureStore } from '@reduxjs/toolkit';
import reduser from '../users/usersSlice';

export const store = configureStore({
  reducer: reduser,
});
