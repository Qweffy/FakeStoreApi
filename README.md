# React Native Expo Products Page

## Overview

This project is a React Native Expo app that displays a products page. It fetches product data from the Fake Store API and presents a list of products. Users can view more details about each product and add them to the cart.

## Features

- **Initial Display**: Loads an initial set of 5 items from the Fake Store API.
- **Clickable Products**: Each product displays an image and name, and can be clicked to reveal more information.
- **Lint and Prettier**: Configured to maintain code consistency. Run the linter with yarn lint.
- **Infinite Scroll Pagination**: Continuously loads more products as the user scrolls down.
- **Top Navigation**: Implemented for better user experience.
- **Sorting**: Bonus feature allowing sorting of products by categories in ascending or descending order.
- **Lazy Loading**: Images are lazy-loaded to improve performance and data usage.
- **Loading Handler**: Page that loads the products before the app initializes.
- **System Design**: Variables and configurations are modularized for better maintainability.

## Installation

To run this project, follow these steps:

1. Clone the repo
2. Install dependencies: "yarn install"
3. Start the Expo server: "npx expo start -c"

## Usage

Simply run the app and browse through the list of products. Click on any product to view more details. Scroll down to automatically load more products.

## Technologies Used

- React Native
- Expo
- Redux Toolkit (for state management and API calls with RTK Query)
- UI Kitten
- Fake Store API
- Redux Persist: To persist the cart state.
- Lint and Prettier: Tools for code linting and formatting.

## Useful Commands
- Start the project:
yarn start

- Run on Android:
yarn android

- Run on iOS:
yarn ios

- Linting:
yarn lint

## Cart Persistence
redux-persist has been implemented to ensure cart data is saved and restored automatically when the app is closed and reopened. This is handled in store.ts using AsyncStorage for persistent data storage.
