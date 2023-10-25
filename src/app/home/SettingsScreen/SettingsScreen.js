import React from 'react';
import { Button, Text, View } from 'react-native';

// The 'SettingsScreen' component represents the screen where users can configure app settings.
// It receives a 'navigation' prop, which allows users to navigate to other screens.

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      {/* Render a button that, when pressed, navigates to the 'Details' screen. */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// Export the 'SettingsScreen' component to make it available for use in the app.
export default SettingsScreen;