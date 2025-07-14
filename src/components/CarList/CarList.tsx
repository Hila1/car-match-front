import React from 'react';
import { Grid } from '@mui/material';
import CarCard, { Car } from '../CarCard/CarCard';

const CarList: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <Grid container spacing={2} justifyContent="center">
    {cars.map((car, idx) => (
      <Grid item key={idx}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList; 