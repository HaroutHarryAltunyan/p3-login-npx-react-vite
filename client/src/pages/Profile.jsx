// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// const Profile = () => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <div className="flex-row justify-center mb-3">
//         <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//           Viewing {userParam ? `${user.username}'s` : 'your'} profile.
//         </h2>

//         <div className="col-12 col-md-10 mb-5">
//           <ThoughtList
//             thoughts={user.thoughts}
//             title={`${user.username}'s thoughts...`}
//             showTitle={false}
//             showUsername={false}
//           />
//         </div>
//         {!userParam && (
//           <div
//             className="col-12 col-md-10 mb-3 p-3"
//             style={{ border: '1px dotted #1a1a1a' }}
//           >
//             <ThoughtForm />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;




///////////////////////////////////////////////////////////////// material ui 




import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// Material-UI Imports
import { Container, Box, Typography, Paper, CircularProgress } from '@mui/material';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // Navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user?.username) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 5 }}>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Profile Heading */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'primary.dark', color: 'white', borderRadius: 2, mb: 4 }}>
        <Typography variant="h4">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </Typography>
      </Paper>

      {/* Thought List */}
      <Box sx={{ mb: 4 }}>
        <ThoughtList
          thoughts={user.thoughts}
          title={`${user.username}'s thoughts...`}
          showTitle={false}
          showUsername={false}
        />
      </Box>

      {/* Thought Form (Only for Own Profile) */}
      {!userParam && (
        <Paper elevation={2} sx={{ p: 3, border: '1px dotted #1a1a1a', borderRadius: 2 }}>
          <ThoughtForm />
        </Paper>
      )}
    </Container>
  );
};

export default Profile;