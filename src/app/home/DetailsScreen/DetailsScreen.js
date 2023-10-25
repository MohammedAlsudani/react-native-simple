import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

// Export the 'DetailsScreen' component, making it available for use in the app.
export default DetailsScreen