import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Login() {


  return (
    
    <Grid container className="mt-5">
      <Grid item xs>
        <RegisterForm />
      </Grid>
      <Divider orientation="vertical" flexItem>
        <p className="font-serif text-2xl">OR</p> 
      </Divider>
      <Grid item xs>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

