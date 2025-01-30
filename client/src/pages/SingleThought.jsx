import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// Material-UI Imports
import { Container, Paper, Typography, Box, CircularProgress } from '@mui/material';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // Retrieve `thoughtId` from route parameters
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variables: { thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Thought Header */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'primary.dark', color: 'white', borderRadius: 2, mb: 4 }}>
        <Typography variant="h4">
          {thought.thoughtAuthor}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '1rem' }}>
          Had this thought on {thought.createdAt}
        </Typography>
      </Paper>

      {/* Thought Content */}
      <Paper elevation={2} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, mb: 4, border: '2px dotted #1a1a1a' }}>
        <Typography variant="h5" sx={{ fontStyle: 'italic', lineHeight: '1.5' }}>
          {thought.thoughtText}
        </Typography>
      </Paper>

      {/* Comment List */}
      <Box sx={{ mb: 4 }}>
        <CommentList comments={thought.comments} />
      </Box>

      {/* Comment Form */}
      <Paper elevation={2} sx={{ p: 3, border: '1px dotted #1a1a1a', borderRadius: 2 }}>
        <CommentForm thoughtId={thought._id} />
      </Paper>
    </Container>
  );
};

export default SingleThought;
