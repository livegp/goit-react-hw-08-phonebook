import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: newToken => {
    instance.defaults.headers.Authorization = newToken;
  },
  clear: () => {
    instance.defaults.headers.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post(`users/signup`, formData);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post(`users/login`, formData);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async thunkApi => {
    try {
      await instance.post(`users/logout`);
      token.clear();
      return { status: 'success' };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;

      token.set(userToken);
      const { data } = await instance.get(`users/current`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const { token: authToken } = state.auth;

      return !!authToken;
    },
  },
);

const initialState = {
  userData: undefined,
  token: undefined,
  isLoading: false,
  authenticated: false,
  error: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        authenticated: true,
        userData: action.payload.user,
        token: action.payload.token,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        authenticated: true,
        userData: action.payload.user,
        token: action.payload.token,
      }))
      .addCase(logOutUser.fulfilled, () => initialState)
      .addCase(refreshUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        authenticated: true,
        userData: action.payload,
      }))

      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => ({
          ...state,
          isLoading: true,
          error: undefined,
        }),
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }),
      ),
});

export const selectUserAuthentication = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;

export const authReducer = authSlice.reducer;
