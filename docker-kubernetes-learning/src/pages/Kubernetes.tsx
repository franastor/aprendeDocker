import React from 'react';
import { Typography, Grid, Paper, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContentCard } from '../components/common/ContentCard';

export const Kubernetes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4
      }}>
        <Typography variant="h3" gutterBottom>
          Aprende Kubernetes
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/kubernetes-learning')}
        >
          Comenzar curso
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContentCard
            title="Conceptos básicos de Kubernetes"
            subtitle="Componentes principales y arquitectura"
          >
            <Typography paragraph>
              Kubernetes es una plataforma de orquestación de contenedores que se compone de varios elementos clave:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Cluster
                  </Typography>
                  <Typography>
                    Un conjunto de nodos que ejecutan las aplicaciones contenedorizadas.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Pod
                  </Typography>
                  <Typography>
                    La unidad más pequeña que puede ser creada y gestionada en Kubernetes.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>

        <Grid item xs={12}>
          <ContentCard
            title="Instalación de Kubernetes"
            subtitle="Configuración del entorno de desarrollo"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Usando Minikube
                  </Typography>
                  <Typography paragraph>
                    Recomendado para desarrollo:
                  </Typography>
                  <Typography>
                    • Descarga e instala Minikube desde kubernetes.io
                  </Typography>
                  <Typography>
                    • Instala kubectl para gestionar clusters
                  </Typography>
                  <Typography>
                    • Inicia Minikube con: minikube start
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Usando Docker Desktop
                  </Typography>
                  <Typography paragraph>
                    Alternativa para desarrollo local:
                  </Typography>
                  <Typography>
                    • Instala Docker Desktop
                  </Typography>
                  <Typography>
                    • Habilita Kubernetes en Settings
                  </Typography>
                  <Typography>
                    • Verifica con: kubectl cluster-info
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>

        <Grid item xs={12}>
          <ContentCard
            title="Primeros pasos con Kubernetes"
            subtitle="Comandos básicos y ejemplos"
          >
            <Typography paragraph>
              Comandos básicos para comenzar con Kubernetes:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    kubectl get pods
                  </Typography>
                  <Typography>
                    Lista todos los pods en el namespace actual.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    kubectl apply -f archivo.yaml
                  </Typography>
                  <Typography>
                    Aplica una configuración desde un archivo.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    kubectl describe pod nombre-pod
                  </Typography>
                  <Typography>
                    Muestra información detallada sobre un pod.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    kubectl logs nombre-pod
                  </Typography>
                  <Typography>
                    Muestra los logs de un pod.
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