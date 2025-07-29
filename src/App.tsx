import React, { useEffect } from 'react';
import './App.css';
import AdBanner from './components/AdBanner/AdBanner';
import SearchForm from './components/SearchForm/SearchForm';
import SearchHistory from './components/SearchHistory/SearchHistory';
import CarList from './components/CarList/CarList';
import Results from './pages/Results';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { fetchCars } from './store/carSlice';
import { CircularProgress, Box } from '@mui/material';

function App() {
  const { cars, loading } = useSelector((state: RootState) => state.car);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="App">
      <AdBanner />
      <Routes>
        <Route path="/" element={
          <>
            <SearchForm />
            <SearchHistory />
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
              </Box>
            ) : (
              <CarList cars={cars} />
            )}
          </>
        } />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
