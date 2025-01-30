// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">Harout's Thoughts</h1>
//           </Link>
//           <p className="m-0">Get into the mind of a programmer.</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/me">
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

//////////////////////////////////////////////// materialUI

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', padding: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side - Title */}
        <Box>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Harout's Thoughts
            </Typography>
          </Link>
          <Typography variant="subtitle1">Get into the mind of a programmer.</Typography>
        </Box>

        {/* Right Side - Auth Buttons */}
        <Box>
          {Auth.loggedIn() ? (
            <>
              <Button
                component={Link}
                to="/me"
                variant="contained"
                color="primary.dark"
                sx={{ marginRight: 2 }}
              >
                {Auth.getProfile().data.username}'s Profile
              </Button>
              <Button variant="contained" color="error" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" variant="contained" color="info" sx={{ marginRight: 2 }}>
                Login
              </Button>
              <Button component={Link} to="/signup" variant="contained" color="success">
                Signup
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;