import React from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
export const SignUPForm = () => {
  return (
    <Formik
      initialValues={{ name: 'jared', email: '123@.com', password: 12345 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">
            Name
            <Field name="name" type="text" placeholder="Enter your name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <Field name="email" type="email" placeholder="Enter your email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <Field
              name="password"
              type="text"
              placeholder="Enter your password"
            />
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
export default SignUPForm;
