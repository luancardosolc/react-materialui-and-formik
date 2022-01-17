import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React from 'react'

export default function SingnUp() {
  return (
    <>
      <FormControl sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input id="firstName" name="firstName" type='text' />
        <FormHelperText id="my-helper-text">Email msg.</FormHelperText>
      </FormControl>
    </>
  )
}
