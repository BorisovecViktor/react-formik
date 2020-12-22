import React, {useState} from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from 'formik';
import * as yup from 'yup';
import './App.scss';

// import * as store from './store';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const savedValues = {
  name: 'Viktor',
  email: 'viktor@example.com',
  channel: `Viktor's channel`,
  comments: 'Welcome to Formik',
  address: '221B Baker Street',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
  channel: yup.string().required('Required'),
  comments: yup.string().required('Required')
})

const onSubmit = (values, submitProps) => {
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

const App = () => {
  const [formValues, setFormValues] = useState(null)


  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      validateOnChange={false}
    >
      {formik => {
        formik.isSubmitting && setFormValues(null)

        return <Form>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              id='name'
              name='name'
            />
            <ErrorMessage name='name'>
              {error => <div className='error'>{error}</div>}
            </ErrorMessage>
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              id='email'
              name='email'
            />
            <ErrorMessage name='email'>
              {error => <div className='error'>{error}</div>}
            </ErrorMessage>
          </div>

          <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field
              type='text'
              id='channel'
              name='channel'
            />
            <ErrorMessage name='channel'>
              {error => <div className='error'>{error}</div>}
            </ErrorMessage>
          </div>

          <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
            <Field
              as='textarea'
              id='comments'
              name='comments'
            />
            <ErrorMessage name='comments'>
              {error => <div className='error'>{error}</div>}
            </ErrorMessage>
          </div>

          <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <Field type='text' id='address' name='address' />
          </div>

          <div className='form-control'>
            <label htmlFor='facebook'>Facebook profile</label>
            <Field type='text' id='facebook' name='social.facebook' />
          </div>

          <div className='form-control'>
            <label htmlFor='twitter'>Twitter profile</label>
            <Field type='text' id='twitter' name='social.twitter' />
          </div>

          <div className='form-control'>
            <label htmlFor='primaryPh'>Primary phone number</label>
            <Field type='number' id='primaryPh' name='phoneNumbers[0]' />
          </div>

          <div className='form-control'>
            <label htmlFor='secondaryPh'>Secondary phone number</label>
            <Field type='number' id='secondaryPh' name='phoneNumbers[1]' />
          </div>

          <div className='form-control'>
            <label>List of phone numbers</label>
            <FieldArray name='phNumbers'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { phNumbers } = values
                return <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index} className='phone-wrapper'>
                        <Field type='number' name={`phNumbers[${index}]`} />
                        {index === 0 && (
                          <button type='button' className='phone-button phone-button--add' onClick={() => push('')}>
                            +
                          </button>
                        )}
                        {index > 0 && (
                          <button type='button' className='phone-button phone-button--del' onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
              }}
            </FieldArray>
          </div>
          <button
            type='button'
            className='phone-button phone-button--load'
            onClick={() => setFormValues(savedValues)}
          >
            Load saved data
          </button>
          <button
            type='submit'
            className='phone-button phone-button--sbm'
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      }}
    </Formik>
  );
};

export default App;
