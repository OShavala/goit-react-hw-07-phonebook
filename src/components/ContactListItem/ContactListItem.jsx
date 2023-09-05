import React from 'react';
import { ListItem, ItemWrapper, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  
  return (
    <ListItem>
      <ItemWrapper>
        <p>{name}: </p>
        <p>{number}</p>
      </ItemWrapper>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactListItem;