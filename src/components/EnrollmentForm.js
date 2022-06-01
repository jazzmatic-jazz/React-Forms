import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm() {
    const dropdownOptions = [
        {key: 'Select your Course' , value: ''},
        {key: 'React', value: 'react'},
        {key: 'Python', value:'python'},
        {key: 'Django' , value: 'django'},
    ]
    const checkboxOptions = [
        {key: 'HTML' , value: 'html'},
        {key: 'CSS' , value: 'css'},
        {key: 'JavaScript' , value: 'javaScript'},

    ]

    const initialValues = {
        email: '',
        bio : '',
        course:'',
        skills: [],
        courseDate: null
    }

    const validationSchema =Yup.object({
        email: Yup.string().email('Invalid email Format').required('Required'),
        bio : Yup.string().required('Required'),
        course : Yup.string().required('Required'),
        courseDate : Yup.date().required('Required').nullable()
    })

    const onSubmit = values =>{
        console.log('Form data', values)
    }

  return (
    <Formik
        initialValues={initialValues}
        validationSchema= {validationSchema}
        onSubmit = {onSubmit}
    >
        {
            formik => {
                return <Form>
                    <FormikControl
                        control = 'input'
                        type ='email'
                        label = 'Email'
                        name ='email'
                    />

                    <FormikControl
                        control = 'textarea'
                        label = 'Bio'
                        name ='bio'
                    />

                    <FormikControl
                        control = 'select'
                        label = 'Course'
                        name ='course'
                        options={dropdownOptions}
                    />

                    <FormikControl
                        control = 'checkbox'
                        label = 'Your Skillset'
                        name ='skills'
                        options={checkboxOptions}
                    />

                    <FormikControl
                        control = 'date'
                        label = 'Course date'
                        name ='courseDate'
                    />
                    
                <button type='submit' disabled={!formik.isValid} >Submit</button>

                </Form>
            }
        }

    </Formik>
  )
}

export default EnrollmentForm