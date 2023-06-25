
import './App.css';
import Header from './components/Header';
import Addcontact from './components/Addcontact';
import Contactlist from './components/Contactlist';
import { useEffect, useState } from 'react';
const { v4: uuidv4 } = require('uuid');

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const[contacts,setContact]= useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContact([...contacts,{ id:uuidv4(),...contact}]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler=(id)=>{
    const newList=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContact(newList);

  }

  return (
    <div className="ui container">
    <Header/>
    <Addcontact addContactHandler={addContactHandler}/>
    <Contactlist contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
