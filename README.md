# Simple React Native App

## Introduction

This is a simple React Native app that demonstrates best practices in app development. It uses MVVM (Model-View-ViewModel) architecture to separate concerns and enhance maintainability. Axios is used for making network requests, and Expo SecureStore for secure storage.

## Features

- MVVM architecture for structured and maintainable code.
- Axios for making HTTP requests.
- Secure storage with Expo SecureStore.
- A clean project structure that promotes scalability and readability.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- Expo CLI installed (`npm install -g expo-cli`).
- A running Expo development environment (Expo Go app or emulator).

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/MohammedAlsudani/react-native-simple.git
   ```

2. Navigate to the project directory:

   ```shell
   cd react-native-simple
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   expo start
   ```

5. Scan the QR code with the Expo Go app on your mobile device or run the app in an emulator.

## MVVM Architecture

The app follows the MVVM (Model-View-ViewModel) architecture for structured and maintainable code. Key components:

- **Model**: Represents the data and business logic. Data retrieval and manipulation should be implemented in this layer.

- **View**: Represents the UI elements and layout.

- **ViewModel**: Acts as an intermediary between the Model and View, providing data from the Model to the View.

## Axios for Network Requests

We use Axios to make network requests. The network-related code is separated from the ViewModel to keep the code clean and maintainable. Axios also handles error management.

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

export default instance;
```

## Secure Storage with Expo SecureStore

We use Expo SecureStore for secure storage of sensitive information such as authentication tokens or API keys. Ensure you store sensitive data securely:

```javascript
import * as SecureStore from 'expo-secure-store';

// Save data securely
await SecureStore.setItemAsync('key', 'value');

// Retrieve data securely
const data = await SecureStore.getItemAsync('key');
```

## Best Practices

This app follows best practices for clean and maintainable code:

- Code structure and organization.
- Proper separation of concerns with MVVM.
- Error handling for network requests.
- Secure data storage with Expo SecureStore.

## Contribution

Contributions are welcome! If you find a bug or have an improvement suggestion, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
