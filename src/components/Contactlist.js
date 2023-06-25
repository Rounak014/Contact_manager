import React from 'react'
import Contactcard from './Contactcard';

export default function Contactlist(props) {
    console.log(props);
    const deleteContacthandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList=props.contacts.map((contact)=>{
        return (
            <Contactcard contact={contact} clickHander={deleteContacthandler} key={contact.id} />
        );
    })
  return (
     <div className="ui celled list">{renderContactList}</div>
     )
}
