import React, { useState } from 'react';

import { db } from './firebase';
import { FaTimes } from 'react-icons/fa';

const InfoForm = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [add, setAdd] = useState('');
  const [attend, setAttend] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        add: add,
        attend: attend,
      })
      .then(() => {
        alert('Thank you! Be on the lookout for the Envitation!');
      })
      .catch((error) => {
        alert(error.message);
      });
    setName('');
    setEmail('');
    setAdd('');
    setAttend('');
  };

  if (!open) return null;

  return (
    <div className='container'>
      <form className='form'>
        <FaTimes onClick={onClose} className='close-form' />

        <input type='text' name='name' placeholder='Full Name' />

        <input type='text' name='Email' placeholder='Email' />

        <input type='text' name='Full Adress' placeholder='Full Adress' />

        <label className='attend'>
          Atending:
          <input type='text' name='name' placeholder='Yes, No, Maybe' />
        </label>
        <button type='submit' value='Submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfoForm;
