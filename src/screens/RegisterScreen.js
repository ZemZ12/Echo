import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import styles from '../styles/registerscreenstyles';
 function RegisterScreen() {
  
  return (
   <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">
    <View>
      <Text>
        Register Screen
      </Text>
    </View>
   </ImageBackground>
  );
}

export default RegisterScreen;
