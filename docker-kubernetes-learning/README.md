# Aprende Docker y Kubernetes

Una aplicación web interactiva para aprender Docker y Kubernetes desde cero.

## Características

- 🐳 Curso completo de Docker
- ⚓ Curso completo de Kubernetes
- 🖥️ Instrucciones específicas para cada sistema operativo
- 📝 Ejemplos prácticos y ejercicios
- ✅ Seguimiento de progreso

## Requisitos

- Node.js 18.0.0 o superior
- npm 9.0.0 o superior

## Desarrollo

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd docker-kubernetes-learning
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Producción

Hay varias formas de servir la aplicación en producción:

### 1. Construcción estática

1. Construye la aplicación:
```bash
npm run build
```

2. Los archivos estáticos estarán en la carpeta `dist/`. Puedes servirlos con cualquier servidor web como Nginx o Apache.

### 2. Usando Docker (Recomendado)

1. Construye la imagen:
```bash
docker build -t aprende-docker-k8s .
```

2. Ejecuta el contenedor:
```bash
docker run -p 80:80 aprende-docker-k8s
```

La aplicación estará disponible en `http://localhost`

### 3. Usando Docker Compose

1. Ejecuta:
```bash
docker-compose up -d
```

La aplicación estará disponible en `http://localhost`

## Configuración de Nginx

El proyecto incluye una configuración optimizada de Nginx (`nginx.conf`) que proporciona:

- Compresión gzip
- Caché de archivos estáticos
- Redirección de todas las rutas a index.html para SPA
- Headers de seguridad

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

MIT
