import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactApi = createApi({
// 	reducerPath: 'contactApi',
// 	baseQuery: fetchBaseQuery({ baseUrl: 'https://630235449eb72a839d6b2978.mockapi.io/' }),
// 	endpoints: (builder) => ({
// 		getContacts: builder.query({
// 			query: () => '/contacts',
// 			providesTags: ['Contact'],
// 		}),
// 		addContact: builder.mutation({
// 			query: ({ name, phone }) => ({
// 				url: '/contacts',
// 				method: 'POST',
// 				body: {name, phone},
// 			}),
// 			invalidatesTags: ['Contact'],
// 		}),
// 		deleteContact: builder.mutation({
// 			query: id => ({
// 				url: `/contacts/${id}`,
// 				method: 'DELETE',
// 			}),
// 			invalidatesTags: ['Contact'],
// 		}),
// 	})
// })

// export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactApi;