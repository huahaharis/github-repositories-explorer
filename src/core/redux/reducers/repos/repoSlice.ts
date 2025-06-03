import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RepoState } from '../../../model/repoTypes';

const initialState: RepoState = {
  repos: [],
  username: '',
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetchReposStart(state, action: PayloadAction<{urlRepo: string}>) {
      state.username = action.payload.urlRepo;
      state.loading = true;
    },
    fetchReposSuccess(state, action: PayloadAction<{ repos: any[]; total: number }>) {
      state.repos = action.payload.repos;
      state.total = action.payload.total;
      state.loading = false;
      state.error = null;
    },
    fetchReposFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchReposStart, fetchReposSuccess, fetchReposFailure } = repoSlice.actions;
export default repoSlice.reducer;
