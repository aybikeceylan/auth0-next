import { Button, Container } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type Props = {}

const register = (props: Props) => {
  return (
    <Container
    sx={{display:'flex',margin:'auto', backgroundColor:'gray',justifyContent:'center'}}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
   
       
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center' , backgroundColor:'lightblue'}}>
        <TextField
          required
          id="Fname"
          label="First Name"
       
        />
              <TextField
          required
          id="Lname"
          label="Last Name"
      
        />
              <TextField
          required
          id="Email"
          label="Email"
        
        />
       
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
       <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password" 
        />
      
      </div>
      <div>
      <Button variant="contained" style={{width:'full'}}>REGİSTER</Button>
      </div>
     

    </Box>
    </Container>
  )
}

export default register