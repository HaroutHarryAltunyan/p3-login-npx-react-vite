// const CommentList = ({ comments = [] }) => {
//   if (!comments.length) {
//     return <h3>No Comments Yet</h3>;
//   }

//   return (
//     <>
//       <h3
//         className="p-5 display-inline-block"
//         style={{ borderBottom: '1px dotted #1a1a1a' }}
//       >
//         Comments
//       </h3>
//       <div className="flex-row my-4">
//         {comments &&
//           comments.map((comment) => (
//             <div key={comment._id} className="col-12 mb-3 pb-3">
//               <div className="p-3 bg-dark text-light">
//                 <h5 className="card-header">
//                   {comment.commentAuthor} commented{' '}
//                   <span style={{ fontSize: '0.825rem' }}>
//                     on {comment.createdAt}
//                   </span>
//                 </h5>
//                 <p className="card-body">{comment.commentText}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default CommentList;




import { Card, CardHeader, CardContent, Typography, Box, Paper } from '@mui/material';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 3, color: 'text.secondary' }}>
        No Comments Yet
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ pb: 2, borderBottom: '1px dotted #1a1a1a', fontWeight: 'bold' }}
      >
        Comments
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        {comments.map((comment) => (
          <Paper 
            key={comment._id} 
            elevation={3} 
            sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper' }}
          >
            <Card sx={{ bgcolor: 'background.default' }}>
              <CardHeader
                title={
                  <Typography variant="h6" color="primary">
                    {comment.commentAuthor}
                  </Typography>
                }
                subheader={`Commented on ${comment.createdAt}`}
                sx={{ bgcolor: 'grey.200', py: 1 }}
              />
              <CardContent>
                <Typography variant="body1">{comment.commentText}</Typography>
              </CardContent>
            </Card>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CommentList;
