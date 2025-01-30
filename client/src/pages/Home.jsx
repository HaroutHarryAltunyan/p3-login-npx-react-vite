// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <ThoughtForm />
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ThoughtList
//               thoughts={thoughts}
//               title="Some Feed for Thought(s)..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;


///////////////////////////////////////////////////material ui 



import { useQuery } from '@apollo/client';
import { Box, Container, Paper, Typography, CircularProgress } from '@mui/material';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      
      {/* Thought Form Section */}
      <Paper elevation={3} sx={{ p: 3, border: '1px dotted #1a1a1a', borderRadius: 2, mb: 4 }}>
        <ThoughtForm />
      </Paper>

      {/* Thought List Section */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
      )}
    
    </Container>
  );
};

export default Home;
