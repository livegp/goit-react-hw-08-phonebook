import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { instance } from './authReducer';

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('contacts', formData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: undefined,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestContacts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        contacts: action.payload,
      }))

      .addCase(addContact.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        contacts: [...state.contacts, action.payload],
      }))
      // ------------ DELETE CONTACT -------------
      .addCase(deleteContact.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id,
        ),
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

export const selectContacts = state => state.phonebook.contacts;
export const selectContactsIsLoading = state => state.phonebook.isLoading;
export const selectContactsError = state => state.phonebook.error;

export const contactsReducer = contactsSlice.reducer;
