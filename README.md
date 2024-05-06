# React Native Expo Products Page

## Overview

This project is a React Native Expo app that displays a products page. It fetches product data from the Fake Store API and presents a list of products. Users can view more details about each product through a collapsible panel.

## Features

- **Initial Display**: Loads an initial set of 5 items from the Fake Store API.
- **Clickable Products**: Each product displays an image and name, and can be clicked to reveal more information.
- **Collapsible Information**: Additional details about each product can be shown or hidden using a collapsible panel with a minus sign.
- **Infinite Scroll Pagination**: Continuously loads more products as the user scrolls down.
- **Sorting**: Bonus feature allowing sorting of products by categories in ascending or descending order.
- **Lazy Loading**: Images are lazy-loaded to improve performance and data usage.

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
