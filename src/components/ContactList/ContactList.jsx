import React from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useContacts } from '../hooks/useContacts';
import { useFilter } from '../hooks/useFilter';

const ContactList = () => {
  const { contacts } = useContacts();
  const { filterValue } = useFilter();

  const getFilteredContacts = () => {
    const filterToLowercase = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowercase)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={index}
          id={id}
          name={name}
          number={number}/>
        ))
        ) : (
        <p>There are no contacts</p>
        )}
    </List>
  );
};

export default ContactList;
