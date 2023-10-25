import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View, StyleSheet } from "react-native";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'index',
};

// The 'Layout' component is responsible for setting up the initial layout of the app.
// It includes loading fonts using 'useFonts' and defining the main app structure.
const Layout = () => {
    // Load custom fonts using 'useFonts' from 'expo-font'.
    const [fontsLoaded] = useFonts({
        DMBold: require("../../src/assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../../src/assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../../src/assets/fonts/DMSans-Regular.ttf"),
    });

    // If fonts are not loaded yet, return 'null' to prevent rendering until fonts are ready.
    if (!fontsLoaded) {
        return null;
    }

    // Render the main app structure.
    return (
        <View style={StyleSheet.absoluteFill}>
            {/* Create a stack navigator for managing the app's screens and navigation. */}
            <Stack>
                {/* Define the initial screen named "index" with no header. */}
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </View>
    );
};

// Export the 'Layout' component, making it available for use in other parts of the app.
export default Layout;