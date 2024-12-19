# React Native App - Rewards Collection

## Overview

This project is a basic React Native app built using **TypeScript**. It integrates **Redux** for state management to handle the collection of rewards. The app fetches rewards from an API and allows users to collect them while managing the state of collected rewards. 

## Features

- **Typescript-based Project**: The app is developed using TypeScript for strong typing and better code maintainability.
- **Redux Store**: A Redux store is set up to manage the collected rewards data.
- **Reward Collection Flow**: Users can collect rewards and see them in a separate list.
- **Optimized UI**: UI optimizations to avoid unnecessary re-renders and handle loading/error states properly.
- **UI/UX**: Thoughtfully designed list item UI with a “Collect” button and state changes when rewards are collected.

## Requirements

- **React Native CLI**: The project is based on the community CLI (not Expo).
- **Redux**: State management for handling rewards data.
- **TypeScript**: Strong typing support for better development practices.
  
## Tools & Libraries

- **React Native**: The main framework for building mobile apps.
- **Redux**: Used for state management to hold collected rewards data.
- **React Navigation**: For handling navigation within the app.
- **Axios**: For making API requests to fetch available rewards.
- **React Redux**: To integrate Redux into React Native.
- **React-Redux Hooks**: For using Redux with React functional components.

## Setup

To run the project locally, follow these steps:

### 1. Install Dependencies

Make sure you have **Node.js** installed, and then run:

```bash
# using npm

npm install

# OR using Yarn
yarn android
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
