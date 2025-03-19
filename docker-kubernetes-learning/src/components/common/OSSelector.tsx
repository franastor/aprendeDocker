import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box
} from '@mui/material';
import { Apple, Window, Terminal } from '@mui/icons-material';

interface OSSelectorProps {
  onSelect: (os: 'windows' | 'macos' | 'linux') => void;
}

export const OSSelector: React.FC<OSSelectorProps> = ({ onSelect }) => {
  const osOptions = [
    {
      id: 'windows',
      name: 'Windows',
      icon: <Window sx={{ fontSize: 60 }} />,
      description: 'Windows 10 o superior',
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: <Apple sx={{ fontSize: 60 }} />,
      description: 'macOS 10.15 o superior',
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: <Terminal sx={{ fontSize: 60 }} />,
      description: 'Ubuntu 20.04 o superior',
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Selecciona tu Sistema Operativo
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
        Elige tu sistema operativo para obtener instrucciones específicas de instalación
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {osOptions.map((os) => (
          <Grid item xs={12} sm={4} key={os.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                cursor: 'pointer',
              }}
              onClick={() => onSelect(os.id as 'windows' | 'macos' | 'linux')}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {os.icon}
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {os.name}
                </Typography>
                <Typography color="text.secondary">
                  {os.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 