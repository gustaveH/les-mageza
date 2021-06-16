import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import InfoForm from './InfoForm';

const SaveDateForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container'>
      <div className='save-form'>
        <Button
          variant='primary'
          className='make-it'
          onClick={() => setIsOpen(true)}
        >
          Will You make it?
        </Button>
        <InfoForm open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SaveDateForm;
