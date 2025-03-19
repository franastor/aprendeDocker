import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { CheckCircle, Lock, PlayArrow } from '@mui/icons-material';
import { useApp } from '../../context/AppContext';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  isLocked?: boolean;
  onStart: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  description,
  duration,
  isLocked = false,
  onStart,
}) => {
  const { isLessonComplete } = useApp();

  return (
    <Card sx={{ mb: 2, position: 'relative' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Chip
            label={duration}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>
        <Typography color="text.secondary" paragraph>
          {description}
        </Typography>
        {isLessonComplete(id) && (
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', mt: 1 }}>
            <CheckCircle sx={{ mr: 1 }} />
            <Typography variant="body2">Lección completada</Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          startIcon={isLocked ? <Lock /> : <PlayArrow />}
          onClick={onStart}
          disabled={isLocked}
          color={isLessonComplete(id) ? 'success' : 'primary'}
        >
          {isLocked ? 'Bloqueada' : isLessonComplete(id) ? 'Repasar' : 'Comenzar'}
        </Button>
      </CardActions>
    </Card>
  );
}; 