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