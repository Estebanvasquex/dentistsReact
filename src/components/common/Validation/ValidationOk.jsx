import React from 'react'

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ValidationOk = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">Sus datos fueron guardados correctamente, mil gracias!</Alert>
  </Stack>
   
  )
}

export default ValidationOk