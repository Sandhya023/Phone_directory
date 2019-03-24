import React from "react";
import "./style.css";
var FontAwesome = require('react-fontawesome');

const contacts = props => {
  const contactList = props.list.map((contact, id) => {
    return (
      <tr key={id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>
          <button onClick={() => props.onDelete(contact.id)} className="Contacts_delete"><FontAwesome name='minus' />{' '}Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <table className="Contacts_table">
      <tbody>
        <tr>
          <th><u className="header_ul">NAME</u></th>
          <th><u className="header_ul">PHONE</u></th>
        </tr>
        {contactList}
      </tbody>
    </table>
  );
};

export default contacts;
