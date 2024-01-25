import React, { useState, useMemo } from 'react';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });


  const stateChangeHandler = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    // const { name, number } = state;

    e.preventDefault();
    onSubmit(state);
    reset();
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };


  const { name, number } = state;
  const id = nanoid();
  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor={id + '-name'}>
        Name
        <Input
          id={id + '-name'}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={stateChangeHandler}
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
          onChange={stateChangeHandler}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};


export default ContactForm;
