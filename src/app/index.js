import React from 'react';
import AppNavigator from './navigation/AppNavigator';

// This is the entry point of your React Native application.
// The 'App' component is the starting point of your app.
// It imports the 'AppNavigator' from the 'navigation' directory.

export default function App() {
  return (
    // In the return statement, we render the 'AppNavigator' component,
    // which defines the overall navigation structure for the app.
    // The 'AppNavigator' component is responsible for managing navigation
    // between different screens and sections of the app.
    <AppNavigator/>
  );
}