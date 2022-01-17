import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'

export default function SingnUp() {
  const [firstName, setFirstName] = useState('Luan');

  return (
    <>
      <FormControl sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormHelperText id="my-helper-text">Email msg.</FormHelperText>
      </FormControl>
    </>
  )
}
