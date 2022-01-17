import { TextField, Box, Grid } from '@mui/material'
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

  // Just logging to see the values changin
  console.log(formik.values);

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50% !important' },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="First Name"
          variant="outlined"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Last Name"
          variant="outlined"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Email"
          variant="outlined"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Box>
    </>
  )
}
