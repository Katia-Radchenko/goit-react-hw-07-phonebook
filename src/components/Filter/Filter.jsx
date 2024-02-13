import React from 'react';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { useFilter } from '../../hooks/useFilter';

const Filter = () => {
  const { filterValue, setFilter } = useFilter();

  const handleChange = event => {
    const value = event.target.value.trimStart();
    setFilter(value);
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={handleChange}></Input>
    </Label>
  );
};


export default Filter;
