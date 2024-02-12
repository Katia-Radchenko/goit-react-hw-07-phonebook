import { useState} from 'react';
import { useContacts } from '../hooks/useContacts';
import { useFilter } from '../hooks/useFilter';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts, addContact } = useContacts();
  const { setFilter } = useFilter();
  const inputHandler = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value.trimStart());
        break;
      case 'number':
        setNumber(value.trimStart());
        break;
      default:
        return;
    }
  };

  const isInContacts = newName => {
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const contactData = { name: name.trimEnd(), number: number.trimEnd() };

    if (isInContacts(contactData.name)) {
      return alert(`${contactData.name} is in contacts!`);
    }

    addContact(contactData);
    setFilter('');
    setName('');
    setNumber('');
  };


  // const { name, number } = state;
  const id = nanoid();
  return (
    <Form onSubmit={onSubmitHandler}>
      <Label htmlFor={id + '-name'}>
        Name
        <Input
          id={id + '-name'}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={inputHandler}
        />
      </Label>
      <Label htmlFor={id + '-number'}>
        Number
        <Input
          id={id + '-number'}
          type="tel"
          name="number"
          value={number}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          required
          onChange={inputHandler}
        />
      </Label>
      <Button type="submit" disabled={!(name && number)}>Add contact</Button>
    </Form>
  );
};


export default ContactForm;
