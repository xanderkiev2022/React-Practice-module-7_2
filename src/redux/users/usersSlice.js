import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers,deleteUsers } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users= [...payload];
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload);
      })
      .addCase(deleteUsers.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default usersSlice.reducer
