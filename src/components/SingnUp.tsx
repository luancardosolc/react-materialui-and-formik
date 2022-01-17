import { TextField, Box, Button } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { FormatItalic } from '@mui/icons-material';

export default function SingnUp() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('submitting', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 chars')
        .required('First Name is required')
    }),
  });

  // Just logging to see the values changing
  console.log('values:', formik.values);
  console.log('errors:', formik.errors);

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50% !important' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="First Name"
          variant="outlined"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          helperText={formik.errors.firstName}
          error={Boolean(formik.errors.firstName)}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Last Name"
          variant="outlined"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          helperText={formik.errors.lastName}
          error={Boolean(formik.errors.lastName)}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Email"
          variant="outlined"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={formik.errors.email}
          error={Boolean(formik.errors.email)}
        />
        <Button
          sx={{ color: 'white', backgroundColor: '#31315c', '&:hover': { backgroundColor: '#005eaf' } }}
          type='submit'
        >
          Submit
        </Button>
      </Box>
    </>
  )
}
