// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <footer className="w-100 mt-auto bg-secondary p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             onClick={() => navigate(-1)}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h4>
//           Made with{' '}
//           <span
//             className="emoji"
//             role="img"
//             aria-label="heart"
//             aria-hidden="false"
//           >
//             ❤️
//           </span>{' '}
//           by the Tech Thoughts team.
//         </h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




///////////////////////////////////material 

import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mt: 5, bgcolor: '#0D47A1', color: 'white', py: 2 }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {location.pathname !== '/' && (
          <Button 
            variant="contained" 
            sx={{ mb: 2, backgroundColor: '#0D47A1', '&:hover': { backgroundColor: '#1565C0' } }} 
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </Button>
        )}

        <Typography variant="h6">
          Made with{' '}
          <span role="img" aria-label="mechanical-arm">🦾</span>{' '}
          by Harout Altunyan.
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
