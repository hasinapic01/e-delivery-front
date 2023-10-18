import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import authAPI from './authAPI';

const PurpleTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: initial;
    }
    &:hover fieldset {
      border-color: purple;
    }
    &.Mui-focused fieldset {
      border-color: purple;
    }
  }
  & .MuiFormLabel-root.Mui-focused {
    color: purple;
  }
`;

const defaultTheme = createTheme();

export default function Login() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password:""
  })

  const handleChange = ({currentTarget}) => {
    console.log(currentTarget)
    const {value, name}= currentTarget
    setCredentials({
      ...credentials,
      [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await authAPI.authenticate(credentials)
    }catch(error){
      console.log(error)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', }} >
          <Avatar src="/logo.jpg" alt="Avatar" sx={{ width: '200px', height: '200px' }} />
          <Typography>Log into your account</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <PurpleTextField
              margin="normal"
              required
              fullWidth
              id="identifier"
              type="text"
              label="Email Address"
              name="identifier"
              autoComplete="email"
              autoFocus
              InputProps={{ sx: { borderColor: 'purple' } }}
              onChange={handleChange}
            />
            <PurpleTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: 'purple' }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          </Box>
        </Box>
        <Typography align="center">Don't have an account? <Link href="#" variant="body2" sx={{ color: 'purple' }} >Sign Up</Link></Typography>
      </Container>
    </ThemeProvider>
  );
}