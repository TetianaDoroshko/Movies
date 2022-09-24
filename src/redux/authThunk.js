import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosAuth } from 'services/authAPI';

export const getRequestTokenThunk = createAsyncThunk(
  'auth/getRequestToken',
  async (data, thunkAPI) => {
    try {
      const result = await axiosAuth.post('/auth/request_token', {
        redirect_to: `http://localhost:3000/UserPage`,
      });
      console.log(result.data.request_token);
      return result.data.request_token;
    } catch (error) {
      return {
        message: error.status_message,
        code: error.status_code,
      };
    }
  }
);
