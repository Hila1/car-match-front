import React from 'react';
import { useSelector } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { RootState } from '../store/store';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Results: React.FC = () => {
  const carMatches = useSelector((state: RootState) => state.car.carMatches);
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search Results
      </Typography>
      {carMatches && carMatches.length > 0 ? (
        <CarList cars={carMatches} />
      ) : (
        <Typography align="center" color="text.secondary">
          No cars found. Please search to see results.
        </Typography>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>Start a New Search</Button>
      </Box>
    </Box>
  );
};

export default Results; 