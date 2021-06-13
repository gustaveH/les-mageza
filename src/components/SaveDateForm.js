import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import InfoForm from './InfoForm';

const SaveDateForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container'>
      <div className='save-form'>
        <Form inline>
          <Form.Label
            className='my-1 mr-2 will-you-make-it'
            htmlFor='inlineFormCustomSelectPref'
          >
            <h5>Will you celebrate with us?</h5>
          </Form.Label>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Yes'
              onClick={() => setIsOpen(true)}
              className='check-box'
            />
            <Form.Check
              type='checkbox'
              label='Maybe'
              onClick={() => setIsOpen(true)}
              className='check-box'
            />
            <Form.Check
              type='checkbox'
              label='No'
              onClick={() => setIsOpen(false)}
              className='check-box'
            />
          </Form.Group>
        </Form>
        <InfoForm open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default SaveDateForm;
