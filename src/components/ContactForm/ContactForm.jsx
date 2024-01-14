import React, { Component } from 'react';
import { Form, Label, Input } from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };


  stateChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    const { name, number } = this.state;

    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const id = nanoid();
    return (
      <Form onSubmit={this.submitHandler}>
        <Label htmlFor={id + '-name'}>
          Name
          <Input
            id={id + '-name'}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={this.stateChangeHandler}
          />
        </Label>
        <Label htmlFor={id + '-phone'}>
          Number
          <Input
            id={id + '-phone'}
            type="tel"
            name="number"
            value={number}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            required
            onChange={this.stateChangeHandler}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
