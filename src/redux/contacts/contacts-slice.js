import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import INITIAL_STATE from '../../Data/data.json';


const initialState = {
  items: INITIAL_STATE
};


export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact({ items }, { payload }) {
      items.unshift({ id: nanoid(), ...payload });
    },
    deleteContact({ items }, { payload }) {
      const index = items.findIndex(({ id }) => id === payload);
      items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

