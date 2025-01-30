// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_COMMENT } from '../../utils/mutations';

// import Auth from '../../utils/auth';

// const CommentForm = ({ thoughtId }) => {
//   const [commentText, setCommentText] = useState('');
//   const [characterCount, setCharacterCount] = useState(0);

//   const [addComment, { error }] = useMutation(ADD_COMMENT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addComment({
//         variables: {
//           thoughtId,
//           commentText,
//           commentAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setCommentText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'commentText' && value.length <= 280) {
//       setCommentText(value);
//       setCharacterCount(value.length);
//     }
//   };

//   return (
//     <div>
//       <h4>What are your thoughts on this thought?</h4>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//             {error && <span className="ml-2">{error.message}</span>}
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="commentText"
//                 placeholder="Add your comment..."
//                 value={commentText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Comment
//               </button>
//             </div>
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to share your thoughts. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default CommentForm;








//////////////////////////////// material ui


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
