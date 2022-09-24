import { createSlice } from '@reduxjs/toolkit';
import { getRequestTokenThunk } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    apiKey: null,
    requestToken: null,
    isLoggedIn: false,
    user: '',
    loading: false,
    error: null,
  },
  reducers: {
    getApiKey(store, action) {
      store.apiKey = action.payload;
    },
  },
  extraReducers: {
    [getRequestTokenThunk.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getRequestTokenThunk.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.requestToken = payload;
    },
    [getRequestTokenThunk.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { getApiKey } = authSlice.actions;
