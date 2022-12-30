import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import './style.css';

const Task = () => (
  <div>
 
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        phone: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">Name</label>
        <Field id="firstName" name="firstName" placeholder="Name" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Surname" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="elonmusk@gmail.com"
          type="email"
          
        />
         <label htmlFor="about">About</label>
        <Field id="about" name="about" placeholder="About"  />

        <label htmlFor="phone">Phone Number</label>
        <Field id="phone"
         name="phone"
         placeholder="050-123-45-67"
          type="tel" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Task />, document.getElementById('root'));



  
