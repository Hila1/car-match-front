const API_BASE_URL = 'http://localhost:8000';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color?: string;
}

export interface CarCreate {
  make: string;
  model: string;
  year: number;
  color?: string;
}

export interface CarUpdate {
  make?: string;
  model?: string;
  year?: number;
  color?: string;
}

export const carApi = {
  // Get all cars
  async getCars(): Promise<Car[]> {
    const response = await fetch(`${API_BASE_URL}/cars/`);
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    return response.json();
  },

  // Get a single car by ID
  async getCar(id: number): Promise<Car> {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch car');
    }
    return response.json();
  },

  // Create a new car
  async createCar(car: CarCreate): Promise<Car> {
    const response = await fetch(`${API_BASE_URL}/cars/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    if (!response.ok) {
      throw new Error('Failed to create car');
    }
    return response.json();
  },

  // Update a car
  async updateCar(id: number, car: CarUpdate): Promise<Car> {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    if (!response.ok) {
      throw new Error('Failed to update car');
    }
    return response.json();
  },

  // Delete a car
  async deleteCar(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete car');
    }
  },
};

export const searchHistoryApi = {
  // Get search history
  async getSearchHistory(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/search-history/`);
    if (!response.ok) {
      throw new Error('Failed to fetch search history');
    }
    return response.json();
  },

  // Add search query to history
  async addSearchQuery(query: string): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/search-history/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });
    if (!response.ok) {
      throw new Error('Failed to add search query');
    }
    return response.json();
  },
}; 