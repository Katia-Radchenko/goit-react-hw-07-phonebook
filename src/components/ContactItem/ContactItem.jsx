import React from 'react';
import { Item, Wrapper, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onContactDelete }) => {
  return (
    <Item>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>
      <Button onClick={() => onContactDelete(id)}>Delete</Button>
    </Item>
  );
};


export default ContactItem;
