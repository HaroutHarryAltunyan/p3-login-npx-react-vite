import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

// Material-UI Imports
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    refetchQueries: [QUERY_THOUGHTS, 'getThoughts', QUERY_ME, 'me'],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
      setCharacterCount(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <Box sx={{ my: 4, p: 3, border: 1, borderRadius: 2, borderColor: 'grey.300', bgcolor: 'background.paper' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        What's on your techy mind?
      </Typography>

      {Auth.loggedIn() ? (
        <>
          <Typography 
            variant="body2"
            color={characterCount === 280 ? 'error' : 'textSecondary'}
            sx={{ mb: 1 }}
          >
            Character Count: {characterCount}/280
          </Typography>

          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              name="thoughtText"
              placeholder="Here's a new thought..."
              value={thoughtText}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Thought
            </Button>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error.message}
              </Alert>
            )}
          </form>
        </>
      ) : (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
        </Typography>
      )}
    </Box>
  );
};

export default ThoughtForm;
