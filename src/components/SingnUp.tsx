import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik';

export default function SingnUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: () => {
      console.log('submitting');
    },
  });

  return (
    <>
      <FormControl sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type='text'
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <FormHelperText id="my-helper-text">Email msg.</FormHelperText>
      </FormControl>
    </>
  )
}
