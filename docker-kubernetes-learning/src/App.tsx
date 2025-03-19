import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Docker } from './pages/Docker';
import { DockerLearning } from './pages/DockerLearning';
import { Kubernetes } from './pages/Kubernetes';
import { KubernetesLearning } from './pages/KubernetesLearning';
import { AppProvider } from './context/AppContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="docker" element={<Docker />} />
              <Route path="docker-learning" element={<DockerLearning />} />
              <Route path="kubernetes" element={<Kubernetes />} />
              <Route path="kubernetes-learning" element={<KubernetesLearning />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
