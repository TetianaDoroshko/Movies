import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    apiKey: null,
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
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
export const { getApiKey } = authSlice.actions;
