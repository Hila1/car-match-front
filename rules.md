# Project Rules & Guidelines

## 1. Project Structure & Organization
- Each component should be in its own folder named after the component, following the existing structure.
- Keep the overall project structure consistent as it grows (e.g., `components/`, `pages/`, `services/`, `store/`, `styles/`).

## 2. Naming Conventions
- Use PascalCase for React component and folder names (e.g., `CarCard`, `SearchForm`).
- Use camelCase for variables and functions.
- Use UPPER_SNAKE_CASE for constants.

## 3. File Organization
- Each component folder should contain at least the main component file (e.g., `CarCard.tsx`) and optionally related files (styles, tests).
- Keep styles for a component in the same folder or in a central `styles/` directory, but be consistent.

## 4. Code Style
- Use consistent indentation (2 or 4 spaces, depending on your team preference).
- Prefer single quotes for strings (or double quotes, but be consistent).
- Use semicolons at the end of statements.
- Use ES6+ features (arrow functions, destructuring, etc.).

## 5. TypeScript Usage
- Type all props and state explicitly.
- Prefer interfaces for props and state definitions.
- Avoid using `any` unless absolutely necessary.

## 6. Component Design
- Prefer functional components and React hooks.
- Keep components small and focused; split if they grow too large.
- Use prop-types or TypeScript interfaces for prop validation.

## 7. State Management
- Use Redux Toolkit for global state (as in your `store/`).
- Use local state for UI-specific or ephemeral state.

## 8. Styling & Theming
- All colors must be defined in a single global SCSS file (e.g., `styles/colors.scss`).
- All component and page styles must be written in SCSS files; avoid inline styles in JSX.
- Use BEM naming convention for SCSS classes.

## 9. Internationalization
- All user-facing strings must be defined in a single locales file (e.g., `src/locales/en.json`) and accessed via translation keys.

## 10. Testing
- Write tests for all components and utilities.
- Use descriptive test names.

## 11. Git & Version Control
- Use meaningful commit messages.
- Keep PRs focused and small.

## 12. Documentation
- Document complex logic with comments.
- Keep the README up to date. 