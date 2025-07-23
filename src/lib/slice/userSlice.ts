import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  email: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: null,
  email: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ username: string; email: string }>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { loginSuccess, logout, setError, setLoading } = userSlice.actions;
export default userSlice.reducer; 