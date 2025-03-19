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
import { useAppContext } from '../../context/AppContext';

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
  const { completedLessons } = useAppContext();
  const isCompleted = completedLessons.includes(id);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Chip
            label={duration}
            size="small"
            color="primary"
            variant="outlined"
          />
          {isCompleted && <CheckCircle color="success" />}
          {isLocked && <Lock color="disabled" />}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<PlayArrow />}
          onClick={onStart}
          disabled={isLocked}
          fullWidth
          variant={isCompleted ? "outlined" : "contained"}
        >
          {isCompleted ? "Repasar" : "Comenzar"}
        </Button>
      </CardActions>
    </Card>
  );
}; 