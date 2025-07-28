const translations = {
  search: {
    title: "Search for Cars",
    button: "Search",
    passengersLabel: "Number of Passengers",
    trunkSizeLabel: "Trunk Size (L)",
    budgetLabel: "Budget ($)",
    drivingStyleLabel: "Driving Style",
    safetyLevelLabel: "Safety Level",
    drivingStyles: ["Calm", "Sporty", "Eco", "Mixed"],
    safetyLevels: ["Standard", "High", "Maximum"]
  },
  carCard: {
    details: "View Details"
  },
  adBanner: {
    placeholder: "Ad Banner Placeholder"
  },
  searchHistory: {
    placeholder: "Search History Placeholder"
  },
  results: {
    title: "Your Car Match Results",
    noCars: "No cars found",
    newSearch: "Start a New Search"
  }
};

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

export const t = (key: string): string => {
  const value = getNestedValue(translations, key);
  return value || key;
};

export const getArray = (key: string): string[] => {
  const value = getNestedValue(translations, key);
  return Array.isArray(value) ? value : [];
};