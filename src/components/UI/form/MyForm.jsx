import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './MyForm.css';

const SignupSchema = Yup.object().shape({
    email: Yup.string().required('Required').email('Invalid email')
})

export const ValidationSchema = () => {
    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >

            {({errors, touched}) => (
                <Form className='my-form'>
                    <Field name="email" type="email" className='my-input' placeholder='Enter your e-mail' />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit" className='my-input-button'>Subscribe</button>
                </Form>
            )}
        </Formik>
    )
}