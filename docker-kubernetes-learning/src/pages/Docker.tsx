import React from 'react';
import { Typography, Grid, Paper, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContentCard } from '../components/common/ContentCard';

export const Docker: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100%',
      py: { xs: 4, sm: 6 },
      px: { xs: 2, sm: 4, md: 6 }
    }}>
      <Box sx={{ 
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: { xs: 4, sm: 6 }
      }}>
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 600,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Aprende Docker
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/docker-learning')}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem'
          }}
        >
          Comenzar curso
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentCard
            title="Conceptos básicos de Docker"
            subtitle="Componentes principales y arquitectura"
          >
            <Typography 
              variant="h6" 
              paragraph 
              sx={{ 
                mb: 4,
                color: 'text.secondary',
                maxWidth: '800px'
              }}
            >
              Docker es una plataforma de contenedores que permite empaquetar aplicaciones con todas sus dependencias en unidades estandarizadas.
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Contenedores
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Unidades ligeras y portables que contienen todo lo necesario para ejecutar una aplicación.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Imágenes
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Plantillas de solo lectura que contienen las instrucciones para crear un contenedor.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>

        <Grid item xs={12}>
          <ContentCard
            title="Beneficios de Docker"
            subtitle="¿Por qué usar Docker?"
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Portabilidad
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Ejecuta tus aplicaciones en cualquier lugar sin preocuparte por las dependencias.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Escalabilidad
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Escala tus aplicaciones horizontal y verticalmente con facilidad.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Aislamiento
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Cada contenedor funciona de manera independiente y segura.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>
      </Grid>
    </Box>
  );
}; 