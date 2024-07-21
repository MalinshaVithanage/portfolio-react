import React, { useState } from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import NavBar from '../Navbar';

const ContactPage = () => {
  const [msg, setMsg] = useState('');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxjNjdhhsq0EHrQTHOQatBJV0VZ-xSeczfdJeQJKKIyeguUiwgwcpdPzNhjH_EDnlQf/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setMsg('Message sent successfully');
        setTimeout(() => setMsg(''), 5000);
        form.reset();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div>
        <NavBar></NavBar>
    <section className="contact" id="contact">
      <Container>
        <h2 className="heading">Contact &nbsp;<span>Me!</span></h2>
        <h4 >Let's Work Together</h4>
        <ul className="contact-list">
          <li><i className='bx bx-mail-send' style={{ color: '#00eeff' }}></i> malinshakv@gmail.com</li>
          <li><i className='bx bx-mail-send' style={{ color: '#00eeff' }}></i> malinshavithanage@ieee.org</li>
        </ul>
        <div className="contact-form">
          <Form onSubmit={handleSubmit} name="submit-to-google-sheet">
            <Form.Group controlId="formName" className='mb-3'>
              <Form.Control type="text" name="Name" placeholder="Enter Your Name" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className='mb-3'>
              <Form.Control type="email" name="Email" placeholder="Enter Your Email" required />
            </Form.Group>
            <Form.Group controlId="formSubject" className='mb-3'>
              <Form.Control type="text" name="Subject" placeholder="Enter Your Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage" className='mb-3'>
              <Form.Control as="textarea" name="Message" rows={5} placeholder="Enter Your Message" required />
            </Form.Group>
            <Button type="submit" className="send">Submit</Button>
          </Form>
          <span id="msg">{msg}</span>
        </div>
      </Container>
    </section>
    </div>

  );
};

export default ContactPage;
