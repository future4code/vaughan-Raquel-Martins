import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertSuccess(props) {
    console.log("COMPONENT ALERT", props)
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={props.onClose}> Parabéns! você criou sua conta na Labeddit!</Alert>
     
    </Stack>
  );
}

