import React, { useState } from 'react';
import { 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Box, 
  Stepper, 
  Step, 
  StepLabel,
  Button,
  Paper,
  Grid,
  CardContent
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { ContentCard } from '../components/common/ContentCard';

const lessons = [
  {
    id: 'kubernetes-intro',
    title: 'Introducción a Kubernetes',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="¿Qué es Kubernetes?"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Kubernetes es un sistema de orquestación de contenedores de código abierto que automatiza el despliegue, escalado y gestión de aplicaciones contenedorizadas. Sus principales características son:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Automatización"
                      secondary="Automatiza el despliegue y actualización de aplicaciones"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Escalabilidad"
                      secondary="Escala automáticamente las aplicaciones según la demanda"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Alta disponibilidad"
                      secondary="Mantiene las aplicaciones funcionando incluso si fallan algunos nodos"
                    />
                  </ListItem>
                </List>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Arquitectura de Kubernetes"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Un cluster de Kubernetes está compuesto por:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Nodos de Control (Control Plane)"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            • kube-apiserver: API principal de Kubernetes
                          </Typography>
                          <Typography variant="body2">
                            • etcd: Base de datos de configuración
                          </Typography>
                          <Typography variant="body2">
                            • kube-scheduler: Planifica los pods en los nodos
                          </Typography>
                          <Typography variant="body2">
                            • kube-controller-manager: Gestiona los controladores
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Nodos de Trabajo (Worker Nodes)"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            • kubelet: Agente que ejecuta en cada nodo
                          </Typography>
                          <Typography variant="body2">
                            • kube-proxy: Gestiona la red
                          </Typography>
                          <Typography variant="body2">
                            • Container Runtime: Ejecuta los contenedores
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                </List>
              </div>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'kubernetes-yaml',
    title: 'Archivos YAML en Kubernetes',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Estructura básica de un YAML"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Un archivo YAML de Kubernetes típicamente contiene:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: apps/v1        # Versión de la API de Kubernetes
kind: Deployment      # Tipo de recurso
metadata:            # Metadatos del recurso
  name: mi-app
  labels:
    app: mi-app
spec:                # Especificación del recurso
  replicas: 3
  selector:
    matchLabels:
      app: mi-app
  template:
    metadata:
      labels:
        app: mi-app
    spec:
      containers:
      - name: mi-app
        image: mi-app:1.0`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Campos importantes:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="apiVersion"
                      secondary="Define la versión de la API de Kubernetes que se está usando"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="kind"
                      secondary="Especifica el tipo de recurso (Deployment, Service, Pod, etc.)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="metadata"
                      secondary="Contiene información sobre el recurso (nombre, etiquetas, etc.)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="spec"
                      secondary="Define el estado deseado del recurso"
                    />
                  </ListItem>
                </List>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Tipos comunes de recursos"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Los recursos más comunes en Kubernetes:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Pod"
                      secondary="La unidad más pequeña en Kubernetes, contiene uno o más contenedores"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Deployment"
                      secondary="Gestiona un conjunto de pods idénticos, proporciona actualizaciones y rollbacks"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Service"
                      secondary="Expone una aplicación que se ejecuta en un conjunto de pods"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="ConfigMap"
                      secondary="Almacena datos de configuración no confidenciales"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Secret"
                      secondary="Almacena información sensible como contraseñas y tokens"
                    />
                  </ListItem>
                </List>
              </div>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'kubernetes-practical',
    title: 'Ejemplo Práctico: Desplegando una Aplicación',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Paso 1: Crear un Deployment"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Primero, creamos un archivo deployment.yaml:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-app-web
  template:
    metadata:
      labels:
        app: mi-app-web
    spec:
      containers:
      - name: mi-app-web
        image: nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Aplicar el deployment:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`kubectl apply -f deployment.yaml`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Paso 2: Crear un Service"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Crear un archivo service.yaml:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: v1
kind: Service
metadata:
  name: mi-app-web-service
spec:
  selector:
    app: mi-app-web
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Aplicar el servicio:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`kubectl apply -f service.yaml`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Paso 3: Verificar el despliegue"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Comandos útiles para verificar:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Ver el estado del deployment
kubectl get deployments

# Ver los pods
kubectl get pods

# Ver los servicios
kubectl get services

# Ver los logs de un pod
kubectl logs mi-app-web-xxxxx

# Ver detalles de un pod
kubectl describe pod mi-app-web-xxxxx`}
                </pre>
              </div>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'kubernetes-advanced',
    title: 'Conceptos Avanzados',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="ConfigMaps y Secrets"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Ejemplo de ConfigMap:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: v1
kind: ConfigMap
metadata:
  name: mi-config
data:
  DATABASE_URL: "mongodb://localhost:27017"
  API_KEY: "12345"`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Ejemplo de Secret:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: v1
kind: Secret
metadata:
  name: mi-secret
type: Opaque
data:
  username: YWRtaW4=        # admin en base64
  password: cGFzc3dvcmQ=    # password en base64`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Volúmenes Persistentes"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Ejemplo de PersistentVolume y PersistentVolumeClaim:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# PersistentVolume
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mi-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/data"

---
# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mi-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Health Checks y Probes"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Ejemplo de configuración de probes:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app
spec:
  template:
    spec:
      containers:
      - name: mi-app
        image: mi-app:1.0
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10`}
                </pre>
              </div>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'volumes',
    title: 'Volúmenes en Kubernetes',
    content: (
      <Box>
        <Typography variant="h6" gutterBottom>
          Tipos de Volúmenes
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="emptyDir"
              secondary="Volumen temporal que se crea cuando se asigna a un Pod y se elimina cuando el Pod se elimina"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="hostPath"
              secondary="Monta un archivo o directorio del nodo host en el Pod"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="PersistentVolume (PV)"
              secondary="Recurso de almacenamiento en el cluster que ha sido aprovisionado por un administrador"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="PersistentVolumeClaim (PVC)"
              secondary="Solicitud de almacenamiento por un usuario"
            />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Ejemplo de Volumen emptyDir
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`apiVersion: v1
kind: Pod
metadata:
  name: pod-con-volumen
spec:
  containers:
  - name: contenedor1
    image: nginx
    volumeMounts:
    - name: volumen-compartido
      mountPath: /compartido
  - name: contenedor2
    image: debian
    volumeMounts:
    - name: volumen-compartido
      mountPath: /compartido
  volumes:
  - name: volumen-compartido
    emptyDir: {}`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Ejemplo de PersistentVolume y PersistentVolumeClaim
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# PersistentVolume
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-datos
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /datos

---
# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-datos
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Comandos más usados para Volúmenes
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="kubectl get pv"
              secondary="Lista todos los PersistentVolumes"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="kubectl get pvc"
              secondary="Lista todos los PersistentVolumeClaims"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="kubectl describe pv nombre-pv"
              secondary="Muestra información detallada de un PersistentVolume"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="kubectl delete pv nombre-pv"
              secondary="Elimina un PersistentVolume"
            />
          </ListItem>
        </List>
      </Box>
    )
  },
  {
    id: 'deploy-node-nginx',
    title: 'Despliegue de Aplicación Node.js con Nginx',
    content: (
      <Box>
        <Typography variant="h6" gutterBottom>
          Estructura del Proyecto
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`proyecto/
├── app/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
└── k8s/
    ├── node-deployment.yaml
    ├── node-service.yaml
    ├── nginx-deployment.yaml
    └── nginx-service.yaml`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          1. Aplicación Node.js
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# app/server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: '¡Hola desde Node.js!' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

# app/Dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          2. Configuración de Nginx
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream node_app {
        server node-service:3000;
    }

    server {
        listen 80;
        location / {
            proxy_pass http://node_app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}

# nginx/Dockerfile
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          3. Configuración de Kubernetes
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# k8s/node-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
    spec:
      containers:
      - name: node-app
        image: tu-registro/node-app:latest
        ports:
        - containerPort: 3000

---
# k8s/node-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: node-service
spec:
  selector:
    app: node-app
  ports:
  - port: 3000
    targetPort: 3000
  type: ClusterIP

---
# k8s/nginx-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: tu-registro/nginx:latest
        ports:
        - containerPort: 80

---
# k8s/nginx-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          4. Despliegue
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# Construir las imágenes
docker build -t tu-registro/node-app:latest ./app
docker build -t tu-registro/nginx:latest ./nginx

# Subir las imágenes al registro
docker push tu-registro/node-app:latest
docker push tu-registro/nginx:latest

# Aplicar las configuraciones de Kubernetes
kubectl apply -f k8s/node-deployment.yaml
kubectl apply -f k8s/node-service.yaml
kubectl apply -f k8s/nginx-deployment.yaml
kubectl apply -f k8s/nginx-service.yaml`}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          5. Verificar el Despliegue
        </Typography>
        <Typography component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
          {`# Verificar pods
kubectl get pods

# Verificar servicios
kubectl get services

# Verificar logs
kubectl logs -l app=node-app
kubectl logs -l app=nginx`}
        </Typography>
      </Box>
    )
  }
];

export const KubernetesLearning: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const { completedLessons, markLessonAsComplete } = useAppContext();

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      markLessonAsComplete(lessons[currentLessonIndex].id);
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Curso de Kubernetes
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Stepper activeStep={currentLessonIndex} alternativeLabel>
          {lessons.map((lesson, index) => (
            <Step 
              key={lesson.id}
              onClick={() => setCurrentLessonIndex(index)}
              sx={{ 
                cursor: 'pointer',
                '& .MuiStepLabel-root': {
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }
              }}
            >
              <StepLabel>{lesson.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ContentCard title={lessons[currentLessonIndex].title}>
            <CardContent>
              {lessons[currentLessonIndex].content}
            </CardContent>
          </ContentCard>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={handlePreviousLesson}
          disabled={currentLessonIndex === 0}
        >
          Lección anterior
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={handleNextLesson}
        >
          {currentLessonIndex < lessons.length - 1 ? 'Siguiente lección' : 'Finalizar curso'}
        </Button>
      </Box>
    </Box>
  );
}; 