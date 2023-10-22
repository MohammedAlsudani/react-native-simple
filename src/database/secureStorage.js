import * as SecureStore from 'expo-secure-store';

// Save data to SecureStore
const setItem = async (key, value) => {
    try {
        await SecureStore.setItemAsync(key, value);
        console.log(`Successfully set ${key} in SecureStore`);
    } catch (error) {
        console.error(`Error setting ${key} in SecureStore: ${error.message}`);
    }
};

// Retrieve data from SecureStore
const getItem = async (key) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        if (value !== null) {
            console.log(`Successfully retrieved ${key} from SecureStore`);
        } else {
            console.log(`${key} not found in SecureStore`);
        }
        return value;
    } catch (error) {
        console.error(`Error getting ${key} from SecureStore: ${error.message}`);
        return null;
    }
};

// Delete data from SecureStore
const deleteItem = async (key) => {
    try {
        await SecureStore.deleteItemAsync(key);
        console.log(`Successfully deleted ${key} from SecureStore`);
    } catch (error) {
        console.error(`Error deleting ${key} from SecureStore: ${error.message}`);
    }
};

export { setItem, getItem, deleteItem };