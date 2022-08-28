import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://630235449eb72a839d6b2978.mockapi.io/' }),
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: () => '/contacts',
			providesTags: ['Contact'],
		}),
		addContact: builder.mutation({
			query: ({ name, phone }) => ({
				url: '/contacts',
				method: 'POST',
				body: {name, phone},
			}),
			invalidatesTags: ['Contact'],
		}),
		deleteContact: builder.mutation({
			query: id => ({
				url: `/contacts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contact'],
		}),
	})
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactApi;


// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactSlice = createSlice({
// 	name: 'contacts',
// 	initialState: {
// 		items: [
// 		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// 		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// 		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// 		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// 		],
// 	},
// 	reducers: {
// 		addContact(state, action) {
// 			state.items.push(action.payload);
// 		},
// 		removeContact(state, action) {
// 			state.items = state.items.filter(contact => contact.id !== action.payload);
// 		},
// 	},
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const contactPersistReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// export const { addContact, removeContact } = contactSlice.actions;