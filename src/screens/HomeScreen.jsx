import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../components/button';
import styles from '../styles/homescreen';
import { auth} from '../services/firebase';
import { signOut } from 'firebase/auth';

const HomeScreen = () => {

    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{
          console.log("logged Out successfully");
        })
        .catch((error) =>{
          console.log(error.message);
        }
      )}

    return(
        <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">        
            <View>
                <Text>Home Screen</Text>
                <Button title="SignOut" onPress={handleSignOut}></Button>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;