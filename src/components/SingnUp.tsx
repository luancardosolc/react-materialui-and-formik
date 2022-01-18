import { TextField, Box, Button, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function SingnUp() {
  // MODALS
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // FORMIK
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('submitting', values);
      handleClick();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 chars')
        .required('First Name is required'),
      lastName: Yup.string()
        .max(15, 'Must be 20 chars')
        .required('Last Name is required'),
      email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    }),
  });

  // Logging to see the values changing
  console.log('values:', formik.values);
  console.log('errors:', formik.errors);
  console.log('touched:', formik.touched);

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
          helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ''}
          error={Boolean(formik.errors.firstName && formik.touched.firstName)}
          onBlur={formik.handleBlur}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Last Name"
          variant="outlined"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : ''}
          error={Boolean(formik.errors.lastName && formik.touched.lastName)}
          onBlur={formik.handleBlur}
        />
        <TextField
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
          label="Email"
          variant="outlined"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
          error={Boolean(formik.errors.email && formik.touched.email)}
          onBlur={formik.handleBlur}
        />
        <Button
          sx={{ color: 'white', backgroundColor: '#31315c', '&:hover': { backgroundColor: '#005eaf' } }}
          type='submit'
        >
          Submit
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Success!
        </Alert>
      </Snackbar>
    </>
  )
}
