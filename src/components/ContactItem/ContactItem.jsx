import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Item, Wrapper, Text, Button } from './ContactItem.styled';
import { useContacts } from '../../hooks/useContacts';

const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  const [deleting, setDeleting] = useState(false);

  const handleClick = async () => {
    try {
      setDeleting(true);
      await deleteContact(id);
      toast(`Contact ${name} deleted`);
    } catch (error) {
      console.log(error);
      toast.error(`Unable to delete! ${error}`);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Item>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>

      <Button type="button" disabled={deleting} onClick={handleClick}>
        {deleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};


export default ContactItem;
