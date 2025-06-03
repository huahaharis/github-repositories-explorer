import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserState } from '../../../model/userTypes'

const initialState: UserState = {
  users: [],
  username: '',
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart(state, action: PayloadAction<{username: string, total: number}>) {
      state.username = action.payload.username;
      state.currentPage = action.payload.total;
      state.loading = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<{ users: any[]; total: number, error: string, status: string, message: string }>) {
      state.users = action.payload.users;
      state.total = action.payload.total;
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;
