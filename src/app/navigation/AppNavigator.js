import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../home/MainScreen/MainScreen';
import SettingsScreen from '../home/SettingsScreen/SettingsScreen';
import DetailsScreen from '../home/DetailsScreen/DetailsScreen';

// Create a navigation stack for the Home section
const HomeStack = createNativeStackNavigator();

// Define the HomeStackScreen component
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      {/* Create a screen named "Home" and associate it with the MainScreen component */}
      <HomeStack.Screen name="Home" component={MainScreen} />
      {/* Create a screen named "Details" and associate it with the DetailsScreen component */}
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// Create a navigation stack for the Settings section
const SettingsStack = createNativeStackNavigator();

// Define the SettingsStackScreen component
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      {/* Create a screen named "Settings" and associate it with the SettingsScreen component */}
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* Create a screen named "Details" and associate it with the DetailsScreen component */}
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define the root navigation component
const AppNavigator = () => (
  <NavigationContainer independent={true}>
    {/* Create the tab navigator and hide the header */}
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Create a tab screen named "Home" and associate it with the HomeStackScreen component */}
      <Tab.Screen name="Home" component={HomeStackScreen} />
      {/* Create a tab screen named "Settings" and associate it with the SettingsStackScreen component */}
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

// Export the root navigation component
export default AppNavigator;