import React from 'react';
import { useEffect } from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useContacts } from '../../hooks/useContacts';


const ContactList = () => {
  const { fetchContacts, filteredContacts, isLoading } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return  (
    <>
      {isLoading && <p>Loading...</p>}
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, phone },index) => (
            <ContactItem key={index} id={id} name={name} number={phone} />
          ))}
        </List>
      )}
      {!isLoading && filteredContacts.length <= 0 && (
        <p>There are no contacts</p>
      )}
    </>
  );
};

export default ContactList;
