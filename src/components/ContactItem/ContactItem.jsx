import React from 'react';
import { Item, Wrapper, Text, Button } from './ContactItem.styled';
import { useContacts } from '../hooks/useContacts';

const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  return (
    <Item>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>
      <Button type="button" onClick={() => deleteContact(id)}> Delete
      </Button>
    </Item>
  );
};


export default ContactItem;
