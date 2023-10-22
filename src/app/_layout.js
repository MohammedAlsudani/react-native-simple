import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'index',
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../../src/assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../../src/assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../../src/assets/fonts/DMSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return <Stack />;
};

export default Layout;