import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  CssBaseline
} from '@mui/material';
import { useAppContext } from '../context/AppContext';

export const MainLayout: React.FC = () => {
  const { visitCount, incrementVisitCount } = useAppContext();

  useEffect(() => {
    incrementVisitCount();
  }, []);

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
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img 
              src="/images/logoweb_sin_fondo.png" 
              alt="Franastor Logo" 
              style={{ height: '40px', marginRight: '10px' }}
            />
            <Typography variant="h6" component="div">
              Aprende Conmigo
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2px 8px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                👀 {visitCount}
              </span>
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