import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import React from 'react'

export default function SingnUp() {
  return (
    <>
      <FormControl sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <InputLabel htmlFor="my-input">Email input</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Email msg.</FormHelperText>
      </FormControl>
    </>
  )
}
