import React from 'react';
import { Box, Typography, Grid, Paper, Button, Stepper, Step, StepLabel, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { selectedOS, setSelectedOS } = useApp();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ['Selecciona la tecnología', 'Selecciona tu sistema operativo'];

  const handleTechnologySelect = (path: string) => {
    navigate(path);
    setActiveStep(1);
  };

  const handleOSSelect = (os: 'windows' | 'macos' | 'linux') => {
    setSelectedOS(os);
    navigate('/docker-learning');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
      }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Bienvenido al Curso de Contenedores
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 6, width: '100%' }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {activeStep === 0 && (
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 6, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                <Box sx={{ 
                  width: '150px', 
                  height: '150px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 3
                }}>
                  <Typography variant="h1" sx={{ fontSize: '100px' }}>
                    🐳
                  </Typography>
                </Box>
                <Typography variant="h4" gutterBottom>
                  Docker
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                  Aprende sobre contenedores, imágenes, redes y más con Docker.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => handleTechnologySelect('/docker')}
                  sx={{ 
                    mt: 'auto',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  SELECCIONAR
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 6, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                <Box sx={{ 
                  width: '150px', 
                  height: '150px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 3
                }}>
                  <Typography variant="h1" sx={{ fontSize: '100px' }}>
                    ⚙️
                  </Typography>
                </Box>
                <Typography variant="h4" gutterBottom>
                  Kubernetes
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
                  Domina la orquestación de contenedores con Kubernetes.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => handleTechnologySelect('/kubernetes')}
                  sx={{ 
                    mt: 'auto',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  SELECCIONAR
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Windows
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => handleOSSelect('windows')}
                  sx={{ 
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  SELECCIONAR
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                <Typography variant="h4" gutterBottom>
                  macOS
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => handleOSSelect('macos')}
                  sx={{ 
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  SELECCIONAR
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Linux
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => handleOSSelect('linux')}
                  sx={{ 
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  SELECCIONAR
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
}; 