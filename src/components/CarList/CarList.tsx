import React from 'react';
import { GridProps } from '@mui/material/Grid';
import CarCard, { Car } from '../CarCard/CarCard';
import { Grid } from '@mui/material';

const CarList: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <Grid container spacing={2} justifyContent="center">
    {cars.map((car, idx) => (
      <Grid key={idx} {...({} as GridProps)}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList; 