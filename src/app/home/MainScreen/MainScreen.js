import React from 'react';
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { images } from '../../theme'
import styles from '../../home/MainScreen/MainScreen.style';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      
      {/* Display an image */}
      <Image
        source={images.android}
        style={styles.image}
      />
      
      {/* Additional text */}
      <Text style={styles.description}>Welcome to the Home screen. This is a sample text.</Text>

       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;