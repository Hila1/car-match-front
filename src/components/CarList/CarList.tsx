import React from 'react';
import { GridProps } from '@mui/material/Grid';
import CarCard from '../CarCard/CarCard';
import { Grid } from '@mui/material';
import { Car } from '../../services/api';

const CarList: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <Grid container spacing={2} justifyContent="center">
    {cars.map((car) => (
      <Grid key={car.id} {...({} as GridProps)}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList; 