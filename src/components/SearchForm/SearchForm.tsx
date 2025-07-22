import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { setUserInput } from '../../store/carSlice';

const drivingStyles: string[] = ['Calm', 'Sporty', 'Eco', 'Mixed'];
const safetyLevels: string[] = ['Standard', 'High', 'Maximum'];

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/results');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, boxShadow: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" mb={2}>Find Your Perfect Car</Typography>
      <TextField
        label="Number of Passengers"
        name="passengers"
        type="number"
        value={form.passengers}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Trunk Size (L)"
        name="trunkSize"
        type="number"
        value={form.trunkSize}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Budget ($)"
        name="budget"
        type="number"
        value={form.budget}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Driving Style"
        name="drivingStyle"
        value={form.drivingStyle}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      >
        {drivingStyles.map(style => (
          <MenuItem key={style} value={style}>{style}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Safety Level"
        name="safetyLevel"
        value={form.safetyLevel}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      >
        {safetyLevels.map(level => (
          <MenuItem key={level} value={level}>{level}</MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchForm; 