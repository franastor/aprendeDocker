import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  IconButton,
  CssBaseline
} from '@mui/material';

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <CssBaseline />
      <AppBar 
        position="static" 
        sx={{ 
          width: '100%',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar sx={{ 
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, sm: 4, md: 6 }
        }}>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="home"
            onClick={() => navigate('/')}
            sx={{ p: 0 }}
          >
            <img 
              src="/images/logoweb_sin_fondo.png" 
              alt="Logo" 
              style={{ 
                height: '60px',
                width: 'auto'
              }}
            />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              ml: 4,
              flexGrow: 1,
              fontWeight: 500
            }}
          >
            Aprende Docker y Kubernetes
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        flexGrow: 1,
        width: '100%',
        bgcolor: '#f5f5f5'
      }}>
        <Outlet />
      </Box>
    </Box>
  );
}; 