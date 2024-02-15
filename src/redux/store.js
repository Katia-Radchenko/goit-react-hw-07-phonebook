import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter-slice';
import { contactSlice } from './contacts/contacts-slice';


export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [contactSlice.name]: contactSlice.reducer,
  },
});
