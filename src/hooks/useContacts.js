import { useDispatch, useSelector } from 'react-redux';
import {
  selectListContacts,
  selectIsLoading,
} from '../redux/contacts/contacts-selectors';
import * as operations from '../redux/contacts/contactsOperations';
import { useCallback } from 'react';
import { selectFilteredContacts } from '../redux/compoundSelectors';

export const useContacts = () => {
  const dispatch = useDispatch();

  const fetchContacts = useCallback(
    () => dispatch(operations.fetchContacts()),
    [dispatch]
  );
  const addContact = contact =>
    dispatch(operations.addContact(contact)).unwrap();
  const deleteContact = id => dispatch(operations.deleteContact(id)).unwrap();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectListContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    fetchContacts,
    addContact,
    deleteContact,
    isLoading,
    contacts,
    filteredContacts,
  };
};
