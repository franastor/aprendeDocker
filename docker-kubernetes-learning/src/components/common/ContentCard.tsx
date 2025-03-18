import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface ContentCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  sx?: any;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, children, sx }) => {
  return (
    <Card sx={{ 
      width: '100%',
      p: 2,
      ...sx 
    }}>
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography 
            variant="h6" 
            color="text.secondary" 
            gutterBottom 
            sx={{ mb: 4 }}
          >
            {subtitle}
          </Typography>
        )}
        <Box sx={{ width: '100%' }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}; 