import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../../components/button';
import styles from '../../styles/homescreen';
import { auth} from '../../services/firebase';
import { signOut } from 'firebase/auth';


const CallsScreen = () => {


    return(
        <ImageBackground source={require('../../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">        
            <View >
                <Text>Calls</Text>
            </View>
        </ImageBackground>
    );
}

export default CallsScreen;