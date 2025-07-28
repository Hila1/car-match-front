import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Car } from '../../services/api';
import { t } from '../../utils/translations';

// Mock data for display purposes (in a real app, this would come from the backend)
const getCarImage = (make: string, model: string): string => {
  const carImages: { [key: string]: string } = {
    'Toyota Corolla': 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg',
    'Honda Civic': 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg',
    'Ford Focus': 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg',
    'default': 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg',
  };
  
  const key = `${make} ${model}`;
  return carImages[key] || carImages.default;
};

const getManufacturerUrl = (make: string): string => {
  const urls: { [key: string]: string } = {
    'Toyota': 'https://www.toyota.com/',
    'Honda': 'https://automobiles.honda.com/',
    'Ford': 'https://www.ford.com/',
    'default': 'https://www.google.com/search?q=' + encodeURIComponent(make),
  };
  
  return urls[make] || urls.default;
};

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  const imageUrl = getCarImage(car.make, car.model);
  const manufacturerUrl = getManufacturerUrl(car.make);
  const specs = `${car.year} ${car.make} ${car.model}${car.color ? ` - ${car.color}` : ''}`;
  
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={`${car.make} ${car.model}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {car.make} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {specs}
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="primary" href={manufacturerUrl} target="_blank" rel="noopener">
            {t('carCard.details')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard; 