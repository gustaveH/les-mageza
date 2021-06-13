import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const InfoForm = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className='form-modal'>
      <FaTimes onClick={onClose} className='close-form' />
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder='First name' />
          </Col>
          <Col>
            <Form.Control placeholder='Last name' />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='formGridAddress1'>
          <Form.Label>Full Adress</Form.Label>
          <Form.Control placeholder='1234 Main St' />
        </Form.Group>
        <Button
          variant='secondary'
          type='submit'
          onClick={onClose}
          className='close-button'
        >
          Submit
        </Button>
      </Form>
      <p>Be on the lookout for the initation</p>
    </div>
  );
};

export default InfoForm;
