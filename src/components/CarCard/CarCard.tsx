import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface Car {
  model: string;
  image: string;
  specs: string;
  manufacturerUrl: string;
}

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={car.image}
        alt={car.model}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.specs}
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="primary" href={car.manufacturerUrl} target="_blank" rel="noopener">
            {t('carCard.details')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard; 