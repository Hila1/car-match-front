import React from 'react';
import './App.css';
import AdBanner from './components/AdBanner/AdBanner';
import SearchForm from './components/SearchForm/SearchForm';
import SearchHistory from './components/SearchHistory/SearchHistory';
import CarList from './components/CarList/CarList';
import { Car } from './components/CarCard/CarCard';

const mockCars: Car[] = [
  {
    model: 'Toyota Corolla',
    image: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg',
    specs: '1.8L, Automatic, 5 seats',
    manufacturerUrl: 'https://www.toyota.com/corolla/',
  },
  {
    model: 'Honda Civic',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg',
    specs: '2.0L, Manual, 5 seats',
    manufacturerUrl: 'https://automobiles.honda.com/civic-sedan',
  },
];

function App() {
  return (
    <div className="App">
      <AdBanner />
      <SearchForm />
      <SearchHistory />
      <CarList cars={mockCars} />
    </div>
  );
}

export default App;
