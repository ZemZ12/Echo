import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../styles/homescreen';

const HomeScreen = () => {

    return(
        <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">        
            <View>
                <Text>Home Screen</Text>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;