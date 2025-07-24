# Car Match Frontend

A modern, professional React application for matching users with their ideal car based on preferences and requirements.

## Features
- User-friendly car search form
- Dynamic results and car cards
- Internationalization (i18n) with centralized string management
- Centralized color and style management using SCSS
- Responsive design with Material-UI
- State management with Redux Toolkit

## Tech Stack
- React + TypeScript
- Redux Toolkit
- React Router
- Material-UI
- SCSS (modular, BEM naming)
- i18next (for translations)

## Folder Structure
```
car-match-front/
├── public/
├── src/
│   ├── components/
│   │   ├── AdBanner/
│   │   ├── CarCard/
│   │   ├── CarList/
│   │   ├── SearchForm/
│   │   └── SearchHistory/
│   ├── locales/
│   │   └── en.json
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── styles/
│   │   └── colors.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md
```

## Setup & Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hila1/car-match-front.git
   cd car-match-front
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage
- Fill out the search form to find cars that match your preferences.
- View results and details for each car.
- All UI text is translatable and all colors/styles are centrally managed.

## Best Practices
- **All user-facing strings** are defined in `src/locales/en.json` and accessed via translation keys using `react-i18next`.
- **All colors** are defined in `src/styles/colors.scss` and imported where needed.
- **All component and page styles** are written in SCSS files (no inline styles in JSX). BEM naming convention is used for class names.
- **Consistent project structure**: Each component is in its own folder.

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
[MIT](LICENSE) 

## Author
Hila Shapira
