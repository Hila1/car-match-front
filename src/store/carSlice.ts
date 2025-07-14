import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInput {
  passengers: string;
  trunkSize: string;
  budget: string;
  drivingStyle: string;
  safetyLevel: string;
}

export interface Car {
  model: string;
  image: string;
  specs: string;
  manufacturerUrl: string;
}

interface CarState {
  userInput: UserInput | null;
  carMatches: Car[];
}

const initialState: CarState = {
  userInput: null,
  carMatches: [],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setUserInput(state, action: PayloadAction<UserInput>) {
      state.userInput = action.payload;
    },
    setCarMatches(state, action: PayloadAction<Car[]>) {
      state.carMatches = action.payload;
    },
  },
});

export const { setUserInput, setCarMatches } = carSlice.actions;
export default carSlice.reducer; 