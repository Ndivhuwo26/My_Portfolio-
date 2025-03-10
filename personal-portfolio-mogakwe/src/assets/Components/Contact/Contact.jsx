import React from 'react';
import './Contact.css'

const Contact = () => {

  return (
    <div className="contact-form" id='contact'>
      <h2>Have a project ? </h2>
      <p>Send a message so we can get to work</p>
      <form >
        <div>
          <label htmlFor="firstName">Full Name *</label>
          <div className='names'>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;