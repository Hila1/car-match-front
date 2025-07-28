import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { RootState, AppDispatch } from '../store/store';
import { Typography, Box, Button, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchCars } from '../store/carSlice';
import { t } from '../utils/translations';

const Results: React.FC = () => {
  const { cars, loading, error } = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            {t('results.newSearch')}
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t('results.title')}
      </Typography>
      {cars && cars.length > 0 ? (
        <CarList cars={cars} />
      ) : (
        <Typography align="center" color="text.secondary">
          {t('results.noCars')}
        </Typography>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          {t('results.newSearch')}
        </Button>
      </Box>
    </Box>
  );
};

export default Results; 