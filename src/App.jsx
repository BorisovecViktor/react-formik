import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import './App.scss';

// import * as store from './store';

const initialValues = {
  name: 'Viktor',
  email: '',
  channel: ''
}

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
  channel: yup.string().required('Required')
})

const onSubmit = values => {
  console.log('Form data', values);
}

const App = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            id='name'
            name='name'
          />
          <div className='error'>
            <ErrorMessage name='name' />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            id='email'
            name='email'
          />
          <div className='error'>
            <ErrorMessage name='email' />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            id='channel'
            name='channel'
          />
          <div className='error'>
            <ErrorMessage name='channel' />
          </div>
        </div>
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  );
};

export default App;
