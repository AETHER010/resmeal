import React from 'react';
import { Form, Button} from "react-bootstrap";
import './Contact.css';

function Contact(){
    return(
        <div>
    <div className='hello'>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='textarea'>Email address</Form.Label>
          <Form.Control className="fieldarea" type="email" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='textarea'>Enter Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} className="fieldarea" placeholder="Enter Message" />
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
        </div>
        </div>
    );
}
export default Contact;