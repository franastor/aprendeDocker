# Aprende Docker y Kubernetes

Esta aplicación web te ayudará a aprender Docker y Kubernetes de manera interactiva.

## Requisitos Previos

- Docker instalado en tu sistema
- Docker Compose instalado en tu sistema

## Pasos para Ejecutar la Aplicación

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/franastor/aprendeDocker.git
   cd docker-kubernetes-learning
   ```

2. **Verificar la Instalación de Docker**
   ```bash
   docker --version
   docker-compose --version
   ```

3. **Construir y Ejecutar la Aplicación**
   ```bash
   # Detener contenedores existentes (si los hay)
   docker-compose down

   # Construir y ejecutar la aplicación
   docker-compose up --build
   ```

4. **Acceder a la Aplicación**
   - Abre tu navegador web
   - Visita `http://localhost`

## Estructura del Proyecto

```
docker-kubernetes-learning/
├── src/                    # Código fuente de la aplicación
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes y logos
├── Dockerfile             # Configuración para construir la imagen Docker
├── docker-compose.yml     # Configuración de Docker Compose
└── nginx.conf            # Configuración de Nginx
```

## Configuración de Docker Compose

El archivo `docker-compose.yml` incluye las siguientes características:

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### Explicación de la Configuración

- **build**: Define cómo construir la imagen Docker
- **ports**: Mapea el puerto 80 del contenedor al puerto 80 del host
- **restart**: Política de reinicio automático
- **healthcheck**: Verificación del estado de salud del contenedor

## Solución de Problemas

1. **Si el puerto 80 está en uso**:
   - Verifica qué proceso está usando el puerto 80
   - Puedes cambiar el puerto en docker-compose.yml (ejemplo: "8080:80")

2. **Si la aplicación no se inicia**:
   - Verifica los logs con `docker-compose logs`
   - Asegúrate de que Docker está corriendo
   - Intenta reconstruir con `docker-compose up --build`

3. **Si hay problemas con los permisos**:
   - Asegúrate de que tu usuario tiene permisos para ejecutar Docker
   - En Linux, puede ser necesario usar `sudo`

## Comandos Útiles

```bash
# Ver logs de la aplicación
docker-compose logs -f

# Detener la aplicación
docker-compose down

# Reconstruir y reiniciar
docker-compose up --build

# Ver estado de los contenedores
docker-compose ps

# Ver uso de recursos
docker stats
```

## Desarrollo Local

Si prefieres ejecutar la aplicación en modo desarrollo:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Contribuir

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
