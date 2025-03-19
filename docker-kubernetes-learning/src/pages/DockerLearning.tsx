import React, { useState } from 'react';
import { Typography, Grid, List, ListItem, ListItemText, Divider, Button, Box, Stepper, Step, StepLabel, Paper } from '@mui/material';
import { ContentCard } from '../components/common/ContentCard';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const lessons = [
  {
    id: 'docker-basics',
    title: 'Conceptos básicos de Docker',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="¿Qué es Docker?"
            secondary="Docker es una plataforma de contenedorización que permite empaquetar una aplicación y sus dependencias en un contenedor aislado."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Imágenes y Contenedores"
            secondary="Las imágenes son plantillas de solo lectura que contienen las instrucciones para crear un contenedor. Los contenedores son instancias en ejecución de una imagen."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Docker Hub"
            secondary={
              <Typography>
                El registro público de Docker donde puedes encontrar y compartir imágenes.{' '}
                <a 
                  href="https://hub.docker.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#1976d2', textDecoration: 'underline' }}
                >
                  Visitar Docker Hub
                </a>
              </Typography>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'docker-commands',
    title: 'Comandos básicos de Docker',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="docker run"
            secondary="Ejecuta un contenedor desde una imagen. Ejemplo: docker run -d -p 8080:80 nginx"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="docker build"
            secondary="Construye una imagen desde un Dockerfile. Ejemplo: docker build -t mi-app ."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="docker ps"
            secondary="Lista los contenedores en ejecución. Usa -a para ver todos los contenedores."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="docker images"
            secondary="Lista las imágenes disponibles en tu sistema."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="docker pull"
            secondary="Descarga una imagen desde Docker Hub. Ejemplo: docker pull nginx"
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'dockerfile',
    title: 'Creando Dockerfiles',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Estructura básica"
            secondary={
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {`# Un archivo docker (dockerfile) comienza siempre importanto la imagen base. 
# Utilizamos la palabra clave 'FROM' para hacerlo.
# En nuestro ejemplo, queremos importar la imagen de Node.js.
# Así que escribimos 'node' para el nombre de la imagen y '16' para la versión.
FROM node:16

# Establecemos el directorio de trabajo dentro del contenedor.
# Utilizamos la palabra clave 'WORKDIR' para hacerlo.
# Esto es donde se ejecutarán todos los comandos subsiguientes.
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json al contenedor.
# Esto nos permite instalar las dependencias antes de copiar todo el código.
# Utilizamos la palabra clave 'COPY' para hacerlo.
COPY package*.json ./

# Instalamos las dependencias del proyecto.
# Utilizamos la palabra clave 'RUN' para ejecutar comandos durante la construcción.
RUN npm install

# Copiamos el resto del código fuente al contenedor.
# El punto '.' significa copiar desde el directorio actual del host.
# El punto '.' al final significa copiar al directorio actual del contenedor.
COPY . .

# Exponemos el puerto 3000 para que la aplicación sea accesible.
# Utilizamos la palabra clave 'EXPOSE' para documentar los puertos.
EXPOSE 3000

# Definimos el comando que se ejecutará cuando el contenedor se inicie.
# Utilizamos la palabra clave 'CMD' para hacerlo.
# En este caso, ejecutaremos "npm start" para iniciar la aplicación.
CMD ["npm", "start"]`}
              </pre>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Ejemplo con Node.js"
            secondary={
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {`FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
              </pre>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Instrucciones comunes"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="FROM"
                    secondary="Especifica la imagen base"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="WORKDIR"
                    secondary="Establece el directorio de trabajo"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="COPY"
                    secondary="Copia archivos al contenedor"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="RUN"
                    secondary="Ejecuta comandos durante la construcción"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="EXPOSE"
                    secondary="Documenta los puertos que expone el contenedor"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="CMD"
                    secondary="Define el comando por defecto al ejecutar el contenedor"
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Mejores prácticas"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Usar .dockerignore"
                    secondary="Excluir archivos innecesarios como node_modules, .git, etc."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Multi-etapa"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Los builds multi-etapa permiten crear imágenes más pequeñas y seguras al separar el proceso de construcción del entorno de ejecución.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Ejemplo de un Dockerfile sin multi-etapa:
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Imagen grande con todas las herramientas de desarrollo
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`}
                        </pre>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                          El mismo Dockerfile usando multi-etapa:
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Etapa de construcción
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:16-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]`}
                        </pre>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                          Beneficios del multi-etapa:
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemText 
                              primary="Imagen más pequeña"
                              secondary="La imagen final solo contiene los archivos necesarios para ejecutar la aplicación"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Más segura"
                              secondary="No incluye herramientas de desarrollo ni código fuente en la imagen final"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Mejor rendimiento"
                              secondary="Menor tamaño de imagen significa descargas más rápidas y menor uso de recursos"
                            />
                          </ListItem>
                        </List>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                          Ejemplo con una aplicación Python:
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Etapa de construcción
FROM python:3.9 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Etapa de producción
FROM python:3.9-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["python", "app.py"]`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Orden de capas"
                    secondary="Colocar las capas que cambian con menos frecuencia primero"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Versiones específicas"
                    secondary="Usar versiones específicas en lugar de 'latest' para mayor estabilidad"
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'docker-networking',
    title: 'Redes en Docker',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Tipos de redes"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="bridge"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Red por defecto para contenedores. Permite la comunicación entre contenedores en el mismo host.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Crear una red bridge personalizada
docker network create mi-red

# Ejecutar contenedores en la misma red
docker run -d --name web --network mi-red nginx
docker run -d --name db --network mi-red postgres

# Los contenedores pueden comunicarse usando sus nombres como hostnames
# Por ejemplo, desde el contenedor web:
curl http://db:5432`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="host"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Usa la red del host directamente. Útil para aplicaciones que necesitan acceso directo a la red del host.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Ejecutar un contenedor usando la red del host
docker run -d --network host nginx

# En este caso, el contenedor comparte la red del host
# y puede acceder a todos los puertos del host directamente`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="none"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Sin acceso a red. Útil para contenedores que necesitan estar completamente aislados.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Ejecutar un contenedor sin acceso a red
docker run -d --network none alpine

# Este contenedor no podrá acceder a ninguna red
# Útil para tareas de procesamiento aisladas`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Comandos de red"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="docker network ls"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Lista todas las redes disponibles en tu sistema.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Listar todas las redes
docker network ls

# Salida ejemplo:
# NETWORK ID     NAME      DRIVER    SCOPE
# abc123def456   bridge    bridge    local
# def456ghi789   mi-red    bridge    local`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="docker network create"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Crea una nueva red personalizada con opciones específicas.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Crear una red con configuración específica
docker network create --driver bridge \
  --subnet=172.18.0.0/16 \
  --ip-range=172.18.5.0/24 \
  mi-red-personalizada`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="docker network connect"
                    secondary={
                      <div>
                        <Typography variant="body2" gutterBottom>
                          Conecta un contenedor existente a una red.
                        </Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                          {`# Conectar un contenedor existente a una red
docker network connect mi-red contenedor-existente

# Desconectar un contenedor de una red
docker network disconnect mi-red contenedor-existente`}
                        </pre>
                      </div>
                    }
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Escenarios comunes"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Aplicación web con base de datos"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Crear una red para la aplicación
docker network create app-network

# Iniciar la base de datos
docker run -d --name db --network app-network postgres

# Iniciar la aplicación web
docker run -d --name web --network app-network \
  -e DATABASE_URL=postgresql://user:pass@db:5432/dbname \
  mi-app-web`}
                      </pre>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Microservicios aislados"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Crear redes separadas para diferentes servicios
docker network create frontend-net
docker network create backend-net

# Servicio frontend
docker run -d --name frontend --network frontend-net nginx

# Servicio backend
docker run -d --name backend --network backend-net node:16

# Servicio de base de datos (solo accesible desde backend)
docker run -d --name db --network backend-net postgres`}
                      </pre>
                    }
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'docker-volumes',
    title: 'Volúmenes y persistencia de datos',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Tipos de volúmenes"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Named volumes"
                    secondary="Volúmenes con nombre gestionados por Docker"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Bind mounts"
                    secondary="Montaje de directorios del host"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="tmpfs mounts"
                    secondary="Almacenamiento temporal en memoria"
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Ejemplos de uso"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Ejemplo completo de una aplicación web con persistencia de datos:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                  {`# Crear un volumen nombrado para la base de datos
docker volume create db-data

# Crear un volumen nombrado para los archivos subidos
docker volume create uploads-data

# Iniciar un contenedor de base de datos con persistencia
docker run -d \\
  --name db \\
  -v db-data:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=mi_contraseña \\
  postgres:13

# Iniciar una aplicación web que usa la base de datos
docker run -d \\
  --name web-app \\
  -v uploads-data:/app/uploads \\
  -e DATABASE_URL=postgresql://postgres:mi_contraseña@db:5432/mi_db \\
  mi-app-web

# Verificar que los volúmenes se crearon correctamente
docker volume ls

# Inspeccionar un volumen específico
docker volume inspect db-data

# Los datos persisten incluso si eliminamos los contenedores
docker stop db web-app
docker rm db web-app

# Al recrear los contenedores, los datos siguen ahí
docker run -d \\
  --name db \\
  -v db-data:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=mi_contraseña \\
  postgres:13`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Explicación del ejemplo:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Volúmenes nombrados"
                      secondary="Creamos dos volúmenes: uno para la base de datos y otro para archivos subidos"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Persistencia"
                      secondary="Los datos se mantienen incluso si eliminamos los contenedores"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Compartición"
                      secondary="Los volúmenes pueden ser compartidos entre múltiples contenedores"
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
    id: 'docker-compose',
    title: 'Docker Compose',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Estructura básica de docker-compose.yml"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Explicación detallada del archivo docker-compose.yml:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                  {`# La versión del archivo docker-compose.yml
# '3' es la versión más reciente y recomendada
# Define las características disponibles y la sintaxis
version: '3'

# Define los servicios que componen la aplicación
services:
  # Servicio web
  web:
    # Construye la imagen usando el Dockerfile en el directorio actual
    build: .
    # Mapea los puertos del contenedor al host
    # Formato: "PUERTO_HOST:PUERTO_CONTENEDOR"
    ports:
      - "3000:3000"
    # Define variables de entorno
    environment:
      - NODE_ENV=production
    # Dependencias entre servicios
    depends_on:
      - db

  # Servicio de base de datos
  db:
    # Usa una imagen pre-construida
    image: postgres
    # Variables de entorno específicas para la base de datos
    environment:
      POSTGRES_PASSWORD: ejemplo
      POSTGRES_DB: mi_db
    # Define volúmenes para persistencia de datos
    volumes:
      - postgres-data:/var/lib/postgresql/data
    # Define la red para el servicio
    networks:
      - app-network
    # Mapeo de puertos para la base de datos
    ports:
      - "5432:5432"  # Puerto de PostgreSQL

# Define las redes disponibles
networks:
  app-network:
    driver: bridge

# Define los volúmenes disponibles
volumes:
  postgres-data:`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Explicación de los componentes principales:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="version: '3'"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            Especifica la versión del formato del archivo docker-compose.yml.
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Características principales de la versión 3:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText 
                                primary="Deploy"
                                secondary="Soporte para configuraciones de despliegue"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="Secrets"
                                secondary="Gestión segura de secretos"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="Healthcheck"
                                secondary="Verificación de salud de contenedores"
                              />
                            </ListItem>
                          </List>
                        </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="services"
                      secondary="Define cada contenedor que forma parte de la aplicación"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="networks"
                      secondary="Define las redes para la comunicación entre contenedores"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="volumes"
                      secondary="Define los volúmenes para persistencia de datos"
                    />
                  </ListItem>
                </List>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Explicación del mapeo de puertos:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Formato general"
                      secondary="PUERTO_HOST:PUERTO_CONTENEDOR"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Ejemplo: '3000:3000'"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            • El primer número (3000) es el puerto en tu máquina host
                          </Typography>
                          <Typography variant="body2">
                            • El segundo número (3000) es el puerto dentro del contenedor
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Esto significa que cualquier petición a localhost:3000 en tu máquina será redirigida al puerto 3000 del contenedor.
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Ejemplo: '5432:5432'"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            • El primer número (5432) es el puerto en tu máquina host
                          </Typography>
                          <Typography variant="body2">
                            • El segundo número (5432) es el puerto de PostgreSQL dentro del contenedor
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Esto permite que tu aplicación local se conecte a la base de datos usando localhost:5432.
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Consideraciones de seguridad"
                      secondary={
                        <div>
                          <Typography variant="body2">
                            • Solo expón los puertos necesarios
                          </Typography>
                          <Typography variant="body2">
                            • En producción, considera usar un proxy inverso
                          </Typography>
                          <Typography variant="body2">
                            • Puedes usar rangos de puertos: '3000-3010:3000-3010'
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
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Comandos comunes"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="docker-compose up"
                    secondary="Inicia los servicios"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="docker-compose down"
                    secondary="Detiene y elimina los contenedores"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="docker-compose build"
                    secondary="Construye las imágenes"
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'docker-react-nginx',
    title: 'Desplegando una aplicación React con Nginx',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Configuración de Nginx"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Configuración básica de Nginx para una aplicación React:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Dockerfile multi-etapa"
            secondary={
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {`# Etapa de construcción
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
              </pre>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Ejemplo con configuración en volumen"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  En este ejemplo, vamos a desplegar nuestra aplicación React con la configuración de Nginx en un volumen:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                  {`# 1. Crear un directorio para la configuración de Nginx
mkdir -p nginx-config

# 2. Crear el archivo de configuración
cat > nginx-config/default.conf << 'EOL'
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Configuración para SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuración para archivos estáticos
    location /assets {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Configuración adicional para seguridad
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
EOL

# 3. Crear un volumen para la configuración
docker volume create nginx-config

# 4. Construir la imagen de la aplicación
docker build -t mi-app-react .

# 5. Ejecutar el contenedor con la configuración en volumen
docker run -d \\
  --name mi-app \\
  -p 8080:80 \\
  -v nginx-config:/etc/nginx/conf.d \\
  mi-app-react

# 6. Verificar que todo funciona
curl http://localhost:8080`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Beneficios de este enfoque:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Configuración flexible"
                      secondary="Podemos modificar la configuración de Nginx sin reconstruir la imagen"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Persistencia"
                      secondary="La configuración persiste entre reinicios del contenedor"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Seguridad"
                      secondary="Podemos actualizar la configuración de seguridad sin tocar la aplicación"
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
            primary="Docker Compose para desarrollo"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Configuración de Docker Compose para desarrollo con hot-reload:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                  {`version: '3'
services:
  app:
    build:
      context: .
      target: build
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    command: npm start

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx-config:/etc/nginx/conf.d
    depends_on:
      - app`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Para ejecutar en modo desarrollo:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                  {`# Iniciar el entorno de desarrollo
docker-compose up

# En otra terminal, construir la aplicación para producción
docker-compose -f docker-compose.prod.yml up --build`}
                </pre>
              </div>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    id: 'docker-images',
    title: 'Creando y Publicando tus Propias Imágenes',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Creando una Imagen Personalizada"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Ejemplo de una aplicación Node.js simple:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde mi imagen personalizada!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Dockerfile para la aplicación:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Usar una imagen base oficial
FROM node:16-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Construyendo la Imagen"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Comandos para construir y probar la imagen:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Construir la imagen
docker build -t mi-aplicacion:1.0 .

# Probar la imagen localmente
docker run -d -p 3000:3000 mi-aplicacion:1.0

# Verificar que funciona
curl http://localhost:3000`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Etiquetando la imagen para Docker Hub:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Etiquetar la imagen con tu nombre de usuario de Docker Hub
docker tag mi-aplicacion:1.0 tuusuario/mi-aplicacion:1.0

# También puedes etiquetar como latest
docker tag mi-aplicacion:1.0 tuusuario/mi-aplicacion:latest`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Publicando en Docker Hub"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Pasos para publicar tu imagen:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# 1. Iniciar sesión en Docker Hub
docker login

# 2. Subir la imagen
docker push tuusuario/mi-aplicacion:1.0
docker push tuusuario/mi-aplicacion:latest`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Buenas prácticas:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Etiquetado semántico"
                      secondary="Usa versiones semánticas (1.0.0, 1.0.1, etc.)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Imágenes ligeras"
                      secondary="Usa imágenes base ligeras (alpine) y multi-stage builds"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Documentación"
                      secondary="Incluye un README.md con instrucciones de uso"
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
            primary="Ejemplo de Automatización"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Usando GitHub Actions para automatizar el proceso:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`name: Docker Build and Push

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: \${{ secrets.DOCKER_HUB_USERNAME }}
          password: \${{ secrets.DOCKER_HUB_TOKEN }}
          
      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: |
            tuusuario/mi-aplicacion:latest
            tuusuario/mi-aplicacion:\${{ github.sha }}
          cache-from: type=registry,ref=tuusuario/mi-aplicacion:buildcache
          cache-to: type=registry,ref=tuusuario/mi-aplicacion:buildcache`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Para usar esta automatización:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Configurar secretos"
                      secondary="Añade DOCKER_HUB_USERNAME y DOCKER_HUB_TOKEN en la configuración de GitHub"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Workflow"
                      secondary="Crea el archivo .github/workflows/docker-publish.yml con el contenido anterior"
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
    id: 'docker-connect',
    title: 'Conectándose a Contenedores Docker',
    content: (
      <List>
        <ListItem>
          <ListItemText 
            primary="Conectarse a un contenedor en ejecución"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  El comando básico para conectarse a un contenedor:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Conectarse a un contenedor usando bash
docker exec -it nombre_contenedor bash

# Si el contenedor no tiene bash, usar sh
docker exec -it nombre_contenedor sh

# Conectarse a un contenedor específico usando su ID
docker exec -it abc123def456 bash`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Explicación de las opciones:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="-i (interactive)"
                      secondary="Mantiene el STDIN abierto"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="-t (tty)"
                      secondary="Asigna una terminal pseudo-TTY"
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
            primary="Ejemplos prácticos"
            secondary={
              <div>
                <Typography variant="body2" gutterBottom>
                  Conectarse a diferentes tipos de contenedores:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Conectarse a un contenedor de Node.js
docker exec -it mi-app-node bash

# Conectarse a un contenedor de Python
docker exec -it mi-app-python python

# Conectarse a un contenedor de PostgreSQL
docker exec -it mi-db psql -U postgres

# Conectarse a un contenedor de Nginx
docker exec -it mi-nginx sh`}
                </pre>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Ejecutar comandos específicos sin entrar al contenedor:
                </Typography>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {`# Ver logs del contenedor
docker exec mi-app-node tail -f /app/logs/app.log

# Ejecutar un script
docker exec mi-app-node node /app/scripts/backup.js

# Verificar el estado de un servicio
docker exec mi-app-node systemctl status nginx`}
                </pre>
              </div>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Trucos y consejos"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Usar alias para contenedores frecuentes"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Añadir a tu ~/.bashrc o ~/.zshrc
alias dnode='docker exec -it mi-app-node bash'
alias dpython='docker exec -it mi-app-python python'
alias ddb='docker exec -it mi-db psql -U postgres'`}
                      </pre>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Verificar si el contenedor está listo"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Esperar a que el contenedor esté listo
docker exec mi-app-node sh -c 'until nc -z localhost 3000; do sleep 1; done'

# Verificar el estado del contenedor
docker ps --filter "name=mi-app-node" --format "{{.Status}}"`}
                      </pre>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Copiar archivos desde/hacia el contenedor"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Copiar desde el contenedor al host
docker cp mi-app-node:/app/logs ./logs

# Copiar desde el host al contenedor
docker cp ./config.json mi-app-node:/app/config.json`}
                      </pre>
                    }
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Seguridad y buenas prácticas"
            secondary={
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Usar usuarios no privilegiados"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# En el Dockerfile
USER node

# O al ejecutar el contenedor
docker exec -it --user node mi-app-node bash`}
                      </pre>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Limitar recursos"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Al ejecutar el contenedor
docker run -d \\
  --memory="512m" \\
  --memory-swap="1g" \\
  --cpus="1.0" \\
  mi-app-node`}
                      </pre>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Usar redes aisladas"
                    secondary={
                      <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {`# Crear una red aislada
docker network create --internal mi-red-interna

# Conectar el contenedor a la red
docker network connect mi-red-interna mi-app-node`}
                      </pre>
                    }
                  />
                </ListItem>
              </List>
            }
          />
        </ListItem>
      </List>
    )
  }
];

export const DockerLearning: React.FC = () => {
  const { markLessonAsComplete, completedLessons } = useAppContext();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);

  const handleNext = () => {
    if (activeLesson < lessons.length - 1) {
      markLessonAsComplete(lessons[activeLesson].id);
      setActiveLesson(prev => prev + 1);
    } else {
      markLessonAsComplete(lessons[activeLesson].id);
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (activeLesson > 0) {
      setActiveLesson(prev => prev - 1);
    }
  };

  const isLessonComplete = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Aprende Docker
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Stepper activeStep={activeLesson} alternativeLabel>
              {lessons.map((lesson, index) => (
                <Step 
                  key={lesson.id}
                  onClick={() => setActiveLesson(index)}
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

          <ContentCard
            title={lessons[activeLesson].title}
            subtitle={`Lección ${activeLesson + 1} de ${lessons.length}`}
            sx={{
              minHeight: '600px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ 
              flex: 1,
              overflowY: 'auto',
              '& pre': {
                backgroundColor: '#f5f5f5',
                padding: '16px',
                borderRadius: '4px',
                margin: '8px 0'
              },
              '& .MuiListItem-root': {
                padding: '16px',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              },
              '& .MuiDivider-root': {
                margin: '8px 0'
              }
            }}>
              {lessons[activeLesson].content}
            </Box>

            <Box sx={{ 
              mt: 4, 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2,
              padding: '16px',
              borderTop: '1px solid #e0e0e0'
            }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handlePrevious}
                disabled={activeLesson === 0}
              >
                Lección anterior
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleNext}
              >
                {activeLesson < lessons.length - 1 ? 'Siguiente lección' : 'Finalizar curso'}
              </Button>
            </Box>
          </ContentCard>
        </Grid>
      </Grid>
    </div>
  );
}; 