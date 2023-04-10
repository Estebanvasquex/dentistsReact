import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ValidationError = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="error">Debe Validar los datos ingresados!</Alert>

  </Stack>

  )
}

export default ValidationError