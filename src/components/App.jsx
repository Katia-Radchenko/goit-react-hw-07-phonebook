import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Title } from './Title.styled';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import INITIAL_STATE from '../Data/data.json';
import { nanoid } from 'nanoid';


class App extends Component {


  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('contacts'));

    if (data) {
      this.setState({ contacts: data });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = (name, number) => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      const id = nanoid();
      return { contacts: [...prevState.contacts, { id: id + 'name', name, number }] };
    });
  };

  filterChangeHandler = e => {
    this.setState({ filter: e.target.value });
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  contactDeleteHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.filterChangeHandler} />
        <ContactList
          list={this.visibleContacts()}
          onContactDelete={this.contactDeleteHandler}
        />
      </>
    );
  }

}

export default App;
