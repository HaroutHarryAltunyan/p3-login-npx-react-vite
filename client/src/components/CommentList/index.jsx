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
