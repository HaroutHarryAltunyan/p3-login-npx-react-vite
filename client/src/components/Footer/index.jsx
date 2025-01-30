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
