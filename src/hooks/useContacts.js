import { useDispatch, useSelector } from 'react-redux';
import { selectListContacts  } from '../redux/contacts/contacts-selectors';
import * as actions from '../redux/contacts/contacts-slice';

export const useContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectListContacts );
  const addContact = contact => dispatch(actions.addContact(contact));
  const deleteContact = id => dispatch(actions.deleteContact(id));

  return { contacts, addContact, deleteContact };
};
