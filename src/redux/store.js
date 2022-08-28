import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactApi } from './contactApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[contactApi.reducerPath]: contactApi.reducer,
		filter: filterSlice.reducer,
	},

	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);