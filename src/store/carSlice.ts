import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { carApi, Car, CarCreate, CarUpdate } from '../services/api';

interface UserInput {
  passengers: string;
  trunkSize: string;
  budget: string;
  drivingStyle: string;
  safetyLevel: string;
}

interface CarState {
  userInput: UserInput | null;
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  userInput: null,
  cars: [],
  loading: false,
  error: null,
};

// Async thunks for API calls
export const fetchCars = createAsyncThunk(
  'car/fetchCars',
  async () => {
    return await carApi.getCars();
  }
);

export const createCar = createAsyncThunk(
  'car/createCar',
  async (car: CarCreate) => {
    return await carApi.createCar(car);
  }
);

export const updateCar = createAsyncThunk(
  'car/updateCar',
  async ({ id, car }: { id: number; car: CarUpdate }) => {
    return await carApi.updateCar(id, car);
  }
);

export const deleteCar = createAsyncThunk(
  'car/deleteCar',
  async (id: number) => {
    await carApi.deleteCar(id);
    return id;
  }
);

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setUserInput(state, action: PayloadAction<UserInput>) {
      state.userInput = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch cars
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cars';
      });

    // Create car
    builder
      .addCase(createCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.loading = false;
        state.cars.push(action.payload);
      })
      .addCase(createCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create car';
      });

    // Update car
    builder
      .addCase(updateCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.cars.findIndex(car => car.id === action.payload.id);
        if (index !== -1) {
          state.cars[index] = action.payload;
        }
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update car';
      });

    // Delete car
    builder
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = state.cars.filter(car => car.id !== action.payload);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete car';
      });
  },
});

export const { setUserInput, clearError } = carSlice.actions;
export default carSlice.reducer; 