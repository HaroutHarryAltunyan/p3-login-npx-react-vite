import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

// Material-UI Imports
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
      setCharacterCount(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <Box sx={{ my: 4, p: 3, border: 1, borderRadius: 2, borderColor: 'grey.300', bgcolor: 'background.paper' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        What are your thoughts on this thought?
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
              name="commentText"
              placeholder="Add your comment..."
              value={commentText}
              onChange={handleChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Comment
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
          You need to be logged in to comment. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
        </Typography>
      )}
    </Box>
  );
};

export default CommentForm; 
