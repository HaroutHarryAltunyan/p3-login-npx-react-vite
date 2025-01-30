// import { Link } from 'react-router-dom';

// const ThoughtList = ({
//   thoughts,
//   title,
//   showTitle = true,
//   showUsername = true,
// }) => {
//   if (!thoughts.length) {
//     return <h3>No Thoughts Yet</h3>;
//   }

//   return (
//     <div>
//       {showTitle && <h3>{title}</h3>}
//       {thoughts &&
//         thoughts.map((thought) => (
//           <div key={thought._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showUsername ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${thought.thoughtAuthor}`}
//                 >
//                   {thought.thoughtAuthor} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     had this thought on {thought.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You had this thought on {thought.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{thought.thoughtText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/thoughts/${thought._id}`}
//             >
//               Join the discussion on this thought.
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ThoughtList;












import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const ThoughtList = ({ thoughts, title, showTitle = true, showUsername = true }) => {
  if (!thoughts.length) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 3, color: 'text.secondary' }}>
        No Thoughts Yet
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      {showTitle && (
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          {title}
        </Typography>
      )}

      {thoughts.map((thought) => (
        <Card key={thought._id} sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardHeader
            title={
              showUsername ? (
                <Link to={`/profiles/${thought.thoughtAuthor}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h6" color="primary">
                    {thought.thoughtAuthor}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="h6">You</Typography>
              )
            }
            subheader={`Had this thought on ${thought.createdAt}`}
            sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2 }}
          />
          
          <CardContent sx={{ backgroundColor: 'background.paper', padding: 2 }}>
            <Typography variant="body1">{thought.thoughtText}</Typography>
          </CardContent>

          <CardActions sx={{ padding: 2, backgroundColor: 'background.default' }}>
            <Button 
              component={Link} 
              to={`/thoughts/${thought._id}`} 
              variant="contained" 
              color="primary" 
              fullWidth
            >
              Join the discussion
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ThoughtList;
