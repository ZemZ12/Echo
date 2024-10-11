import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../../components/button';
import styles from '../../styles/homescreen';
import { auth} from '../../services/firebase';
import { signOut } from 'firebase/auth';


const HomeScreen = () => {


    return(
        <ImageBackground source={require('../../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">        
            <View >
                <Text>Echo</Text>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;