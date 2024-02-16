import { useState} from 'react';
import { useContacts } from '../../hooks/useContacts';
import { useFilter } from '../../hooks/useFilter';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [adding, setAdding] = useState(false);

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



  const onSubmitHandler = async event => {
    event.preventDefault();
    const contactData = { name: name.trimEnd(), phone: number.trimEnd() };

    if (isInContacts(contactData.name)) {
      return alert(`${contactData.name} is in contacts!`);
    }

    try {
      setAdding(true);
      await addContact(contactData);
      toast(`Contact ${name} added`);
    } catch (error) {
      toast.error(`Unable to add contact! ${error}`);
    } finally {
      setAdding(false);
    }

    setFilter('');
    setName('');
    setNumber('');
  };


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
      <Button type="submit" disabled={!(name && number) || adding}>
      {adding ?'Adding...'  : 'Add contact'}
    </Button>
    </Form>
  );
};


export default ContactForm;
