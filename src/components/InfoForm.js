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
        alert('Thank you! Be on the lookout for the Envitation.');
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
      <form className='form' onSubmit={handleSubmit}>
        <FaTimes onClick={onClose} className='close-form' />

        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='text'
          name='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='text'
          name='Full Adress'
          placeholder='Full Adress'
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />

        <label className='attend'>
          Atending:
          <input
            type='text'
            name='name'
            placeholder='Yes, No, Maybe'
            value={attend}
            onChange={(e) => setAttend(e.target.value)}
          />
        </label>
        <button type='submit' value='Submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfoForm;
