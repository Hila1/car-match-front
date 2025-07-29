import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { setUserInput } from '../../store/carSlice';
import { t, getArray } from '../../utils/translations';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drivingStyles = getArray('search.drivingStyles');
  const safetyLevels = getArray('search.safetyLevels');
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
    // TODO: Implement search filtering with backend API
    // For now, just navigate to results page
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
        {drivingStyles.map((style: string) => (
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
        {safetyLevels.map((level: string) => (
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
