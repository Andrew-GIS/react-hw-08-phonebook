import { createSlice } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
} from '../contacts/contactAction';
import { getContact, deleteContact } from '../contacts/contactOperation';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addContactRequest]: (state, action) => {
      state.isLoading = true;
    },
    [addContactSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContactError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContact.pending]: state => {
      state.isLoading = true;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;

    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],