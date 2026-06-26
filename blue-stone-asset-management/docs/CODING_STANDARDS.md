# Blue Stone Asset Management - Coding Standards

## General Principles
- Write clear, maintainable, and consistent code.
- Prefer readability over clever shortcuts.
- Keep components small and focused.
- Use descriptive naming for variables, functions, and components.
- Use TypeScript strict typing whenever possible.

## Project Style
- Follow Next.js and React best practices.
- Keep pages under `src/app` for route-driven components.
- Use function components and hooks.
- Split large components into smaller reusable pieces.
- Maintain a clean file structure.

## ESLint and Airbnb Rules
The project should use ESLint with the following key rules:
- `react/jsx-filename-extension`: allow `.tsx` for JSX
- `react-hooks/rules-of-hooks`: enforce hook rules
- `react-hooks/exhaustive-deps`: validate hook dependencies
- `no-unused-vars`: avoid unused variables
- `no-console`: avoid `console.log` in production code
- `consistent-return`: ensure consistent return values
- `eqeqeq`: use strict equality `===`
- `import/order`: keep imports grouped and sorted
- `arrow-body-style`: prefer concise arrow functions
- `prefer-const`: use `const` for values that are not reassigned

## Formatting
- Use 2-space indentation.
- Use single quotes for strings.
- Add semicolons where required by TypeScript.
- Keep line lengths reasonable (~100 chars).
- Use trailing commas in multiline objects and arrays.

## Component Design
- Keep one component per file.
- Export components as default or named exports consistently.
- Use explicit return types for component functions when helpful.
- Break UI into presentational and container components when needed.

## Accessibility
- Use semantic HTML tags.
- Ensure all interactive controls have labels.
- Use sufficient color contrast.
- Provide focus states for buttons and links.
- Follow WCAG 2.1 AA accessibility standards.
- Provide keyboard-friendly navigation and skip links.
- Ensure form fields include accessible labels, error hints, and validation feedback.

## Git Practices
- Commit small, incremental changes.
- Use descriptive commit messages.
- Keep feature branches focused.
- Rebase or merge from `develop` regularly.

## Testing Guidance
- Add unit tests for critical business logic.
- Validate authentication flows and dashboard data display.
- Test responsive behavior of core pages.
