import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

// Material-UI Imports
import { Container, Paper, TextField, Button, Typography, Box, Alert } from '@mui/material';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          Sign Up
        </Typography>

        {data ? (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Success! You may now head <Link to="/">back to the homepage</Link>.
          </Typography>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              label="Your Username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {error.message}
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default Signup;
