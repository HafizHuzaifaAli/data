import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70%' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="filled-basic" onChange={props.onChange} label={props.label} variant="filled" />
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
