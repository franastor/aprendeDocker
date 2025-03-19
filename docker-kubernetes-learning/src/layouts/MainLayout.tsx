import React from 'react';
import { Outlet } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  CssBaseline
} from '@mui/material';

export const MainLayout: React.FC = () => {
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
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logoweb_sin_fondo.png" 
              alt="Franastor Logo" 
              style={{ height: '40px', marginRight: '10px' }}
            />
            <Typography variant="h6" component="div">
              Franastor Docker y K3s
            </Typography>
          </Box>
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