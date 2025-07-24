import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { setUserInput, setCarMatches, Car } from '../../store/carSlice';
import { useTranslation } from 'react-i18next';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const drivingStyles: string[] = t('search.drivingStyles', { returnObjects: true }) as string[];
  const safetyLevels: string[] = t('search.safetyLevels', { returnObjects: true }) as string[];
  const [form, setForm] = useState({
    passengers: '',
    trunkSize: '',
    budget: '',
    drivingStyle: '',
    safetyLevel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUserInput(form));
    const mockCars: Car[] = [
      {
        model: 'Toyota Corolla',
        image: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg',
        specs: '1.8L, Automatic, 5 seats, 470 trunk',
        manufacturerUrl: 'https://www.toyota.com/corolla/',
        price: 25000,
      },
      {
        model: 'Honda Civic',
        image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg',
        specs: '2.0L, Manual, 5 seats, 430 trunk',
        manufacturerUrl: 'https://automobiles.honda.com/civic-sedan',
        price: 23000,
      },
    ];
    const filteredCars = mockCars.filter(car => {
      // Seats filtering: car seats >= selected passengers
      const seatsMatch = car.specs.match(/(\d+)\s*seats?/i);
      const carSeats = seatsMatch ? parseInt(seatsMatch[1], 10) : undefined;
      const formPassengers = form.passengers ? parseInt(form.passengers, 10) : undefined;
      const matchesPassengers = !formPassengers || (carSeats !== undefined && carSeats >= formPassengers);
      // Trunk size filtering: car trunk >= selected trunk size
      const trunkMatch = car.specs.match(/(\d+)\s*trunk/i);
      const carTrunk = trunkMatch ? parseInt(trunkMatch[1], 10) : undefined;
      const formTrunk = form.trunkSize ? parseInt(form.trunkSize, 10) : undefined;
      const matchesTrunk = !formTrunk || (carTrunk !== undefined && carTrunk >= formTrunk);
      // Budget filtering: car price <= selected budget
      const formBudget = form.budget ? parseInt(form.budget, 10) : undefined;
      const matchesBudget = !formBudget || (car.price !== undefined && car.price <= formBudget);
      // Other fields (not implemented in mock)
      const matchesDriving = !form.drivingStyle || car.specs.toLowerCase().includes(form.drivingStyle.toLowerCase());
      const matchesSafety = !form.safetyLevel || true;
      return matchesPassengers && matchesTrunk && matchesBudget && matchesDriving && matchesSafety;
    });
    dispatch(setCarMatches(filteredCars));
    navigate('/results');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, boxShadow: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" mb={2}>{t('search.title')}</Typography>
      <TextField
        label={t('search.passengersLabel')}
        name="passengers"
        type="number"
        value={form.passengers}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label={t('search.trunkSizeLabel')}
        name="trunkSize"
        type="number"
        value={form.trunkSize}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label={t('search.budgetLabel')}
        name="budget"
        type="number"
        value={form.budget}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label={t('search.drivingStyleLabel')}
        name="drivingStyle"
        value={form.drivingStyle}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {drivingStyles.map(style => (
          <MenuItem key={style} value={style}>{style}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label={t('search.safetyLevelLabel')}
        name="safetyLevel"
        value={form.safetyLevel}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {safetyLevels.map(level => (
          <MenuItem key={level} value={level}>{level}</MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        {t('search.button')}
      </Button>
    </Box>
  );
};

export default SearchForm; 