import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Token is not found');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;



// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common['Authorization'] = ``;
//   },
// };

// export const userRegistration = createAsyncThunk(
// 'user/registration',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/signup', userData);
//       token.set(data.token);
//       console.log(data);
//       toast.success(`${data.user.name} you have successfully registered`);
//       return data;
//     } catch (error) {
//       return rejectWithValue('Registration has failed');
//     }
//   }
// );

// export const userLogin = createAsyncThunk(
//   'user/login',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/login', userData);
//       token.set(data.token);
//       toast.success(`${data.user.name} you are welcome`);
//       return data;
//     } catch (error) {
//       return rejectWithValue('Email or password is wrong');
//     }
//   }
// );

// export const userLogout = createAsyncThunk('user/logout', async () => {
//   try {
//     const { data } = await axios.post('/users/logout');
//     token.unset('');
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   'user/refresh',
//   async (_, { getState, RejectWithValue }) => {
//     const state = getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       RejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios('/users/current');
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );