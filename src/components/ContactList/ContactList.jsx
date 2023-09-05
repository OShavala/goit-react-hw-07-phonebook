import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { ContactListItem } from '../ContactListItem/ContactListItem'; 

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
     {contacts.map(({ id, name, number }) => (
  <ContactListItem key={id} id={id} name={name} number={number} onDelete={() => dispatch(deleteContact(id))} />
))}
    </ul>
  );
};

export default ContactList;


