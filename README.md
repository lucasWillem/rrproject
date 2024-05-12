# Geo App

Welcome to Geo App! This is a brief overview of the technologies and features used in this project.

## Technologies and Packages Used

Geo App leverages a variety of technologies and packages to provide a robust, user-friendly experience. Here's an overview of the key technologies and important packages used in the development of Geo App:

- **Material UI**: A popular React UI framework that provides pre-built components and styles for designing beautiful user interfaces. The app utilizes Material UI's pre-built components and styling to create a visually appealing and consistent user interface. Additionally, it has been extended with a custom theme to match the application's design requirements. Styled components are also utilized to overwrite pre-built component styles, ensuring a seamless integration of custom design elements with Material UI's components.
- **Redux Toolkit**: A powerful and opinionated Redux library that simplifies state management by providing a set of utilities and best practices. It is used for efficient state management, providing a predictable and centralized way to manage the application's data. Additionally, Redux Persist is employed to enable the persistence of Redux state in either local or session storage.
- **React Router**: A routing library for React that enables declarative routing and navigation in your single-page application. React Router enables seamless navigation and rendering of different components based on the current URL, allowing for a smooth user experience.
- **React Hook Form**: A library for efficient form validation and state management using React hooks. It simplifies form handling by providing an intuitive API for form validation, handling form state, and managing form submission.
- **React Query**: A powerful data synchronization library for React applications. It provides a set of hooks that enable developers to fetch, cache, and update data in their applications with minimal boilerplate. React Query is particularly well-suited for applications that require efficient data fetching, caching, and synchronization.
- **Cypress**: A comprehensive testing suite that includes component tests, end-to-end tests, and unit tests to ensure the reliability and stability of the application. Cypress is a powerful tool for testing web applications, supporting a wide range of testing types.

This combination of technologies and packages ensures that Geo App is built with efficiency, maintainability, and user experience in mind, providing a solid foundation for future development and scalability.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository by git clone command

2. Install Node.js version 20.12.0

3. Install dependencies:

bash cd geo-app yarn install

4. Start the development server:

bash yarn start

Open your browser and navigate to http://localhost:3000 to see the app

## Authentication Simulation

In Geo App, authentication is simulated through the use of protected and private routes. This approach ensures that only authenticated users can access certain parts of the application. The authentication status is managed by storing and persisting the authenticated user's information in Redux.

## Simulating Authentication

To simulate authentication, users are required to enter valid credentials. The default credentials provided for this purpose are:

Email: testUser@geo-app.com
Password: P@55w0rd@1

These credentials are used to set the user's authentication status, allowing them to access protected routes within the application.

## Cypress Configuration and Test Execution

Cypress is a powerful tool for testing web applications. It supports a wide range of testing types, including component tests, end-to-end tests, and unit tests. This section provides instructions on how to configure and run Cypress tests in your project.

### Installing Cypress

Before running the tests, ensure you have Cypress installed. If you haven't already, you can install Cypress by running:

bash yarn add cypress

### Running Cypress Tests

To run the Cypress tests, use the following command:

bash yarn cypress:open

This command opens the Cypress Test Runner, where you can select and run individual test files.

### Test Types

In this project, we have included examples of different types of tests:

- **End-to-End Tests**: These tests simulate user interactions with the application as a whole, covering scenarios from start to finish. They are located in the `cypress/e2e` directory.
- **Component Tests**: These tests focus on individual components and their behavior. They are located in the same directory as the components they are testing.
- **Unit Tests**: These tests focus on testing individual functions or utilities in isolation. They are also located in the same directory as the function they are testing.

### Design Patterns in Geo App

Geo App employs several design patterns to ensure a clean, maintainable, and scalable codebase. These patterns facilitate the separation of concerns, making the application easier to understand, develop, and test.

#### Container/Presentational Pattern

The Container/Presentational pattern is a widely used pattern in React applications. It involves separating components into two categories:

- **Containers**: These components are concerned with how things work. Containers manage the state, handle data fetching, and contain the business logic of the application. They are often connected to the Redux store or use React's Context API for state management.
- **Presentationals**: These components are concerned with how things look. Presentational components are stateless and purely focused on the presentation layer. They receive data and callbacks exclusively via props.

This pattern enhances the reusability and readability of the code, as it clearly separates the logic from the presentation.

#### Render Prop Pattern

The Render Prop pattern is a technique for sharing code between React components using a prop whose value is a function. Components with a render prop take a function that returns a React element and call it instead of implementing their own render logic.

This pattern is useful for creating reusable and customizable components. It allows you to inject JSX or component logic into another component, making it a powerful tool for abstracting and reusing component logic.

#### Composition Pattern

The Composition pattern in React involves building complex UIs from smaller, reusable components passed as children or props. This approach enhances code reusability and modularity, facilitating the construction of maintainable and comprehensible UIs.

By adopting these design patterns, Geo App ensures a clean separation of concerns, improves code reusability, and enhances the overall maintainability of the application. These patterns provide a structured approach to building React applications, making it easier for developers to work with the codebase and contribute to the project.


## Proposed Optimizations

### Preact Signals for Hooks Replacement

One of the proposed optimizations for the Geo App project is the adoption of Preact Signals to replace traditional React hooks such as `useCallback`, `useEffect`, and others. This change aims to enhance the performance and maintainability of the application by leveraging Preact's efficient state management and side effect handling capabilities.

#### Benefits of Using Preact Signals

- **Performance Improvements:** By replacing React hooks with Preact Signals, the application can benefit from more optimized state updates and side effects, leading to smoother and faster user interactions.
- **Cleaner Code:** Preact Signals allows for a more declarative approach to state management and side effects, resulting in cleaner and more readable code.
- **Efficient State Management:** It provides a set of hooks that are optimized for Preact, ensuring efficient state management without the overhead of React's hooks.


### ESLint, Prettier, Lint-Staged and Husky Integration

Integrating ESLint, Prettier, Lint-Staged and Husky into the Geo App project can significantly improve code quality and consistency. This setup ensures that Lint-Staged checks the code for ESLint errors and performs Prettier formatting before it is committed, helping to maintain a high standard of code quality and preventing common issues from being introduced into the codebase.

#### Benefits of ESLint, Prettier, Lint-Staged and Husky Integration

- **Code Quality:** ESLint helps in identifying and reporting on ECMAScript/JavaScript and React errors, with the goal of making code more consistent and avoiding bugs.
- **Code Formatting:** Prettier enforces a consistent style by parsing your code and re-printing it with its own rules, ensuring that the codebase has a uniform formatting style.
- **Automated Checks:** Husky and lint-staged automate the process of running linters and formatters on files that are about to be committed, ensuring that only quality code is committed to the repository.