import { createSelector } from '@reduxjs/toolkit';
import { selectListContacts } from './contacts/contacts-selectors';
import {getFilter } from './filter/filter-selectors';

export const selectFilteredContacts = createSelector(
  [selectListContacts, getFilter],
  (contacts, filterValue) => {
    const filterToLowercase = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowercase)
    );
  }
);
