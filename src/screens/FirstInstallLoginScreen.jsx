import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword , sendEmailVerification } from 'firebase/auth';
import styles from '../styles/firstloginscreenstyles';
import { ScrollView  } from 'react-native';


const FirstInstallLoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    /* Handling Errors functionality*/
    const handleError = (error) => {
        if (!email || !password) {
            setError("Please enter email and password.");
            setEmail('');
            setPassword('');
        }

        if(error.code === "auth/invalid-credential"){
            setError("Invalid email or password. Please try again.");
        }
         setTimeout(() => {
            setError('');
            }, 9000);

        return;
    }
    /* Handling Errors functionality*/

    /* Handling Login functionality*/
    const handleLogin = async () => {
        const authInstance = getAuth();
        try {
         await signInWithEmailAndPassword(authInstance, email, password);
         
        } catch (error) {
            handleError(error);
        }

    };
    /* Handling Login functionality*/


    return (
        
        <ImageBackground source={require('../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">
           
           <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
            <View style={styles.overlay}>
                {/* Logo */}
                <Image source={require('../assets/alien1.png')} style={styles.logo}></Image>
                {/* Logo */}

                {/* Title and Subtitle */}
                <View style ={styles.Title_Subtitle}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style = {styles.EchoText}>Echo</Text>
                    <Text style={styles.subtitle}>Chat, connect, or just hang out. Tap below to get started!</Text>
                </View>
                {/* Title and Subtitle */}
                
                {/* Input Container */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="rgba(0, 0, 0, 0.3)"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="rgba(0, 0, 0, 0.3)"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                {/* Input Container */}

                {/* Forgot Password Link */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPasswordScreen")}>Forgot Password?</Text>
                </TouchableOpacity>
                {/* Forgot Password Link */}

                {/*  Buttons */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Register") }>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                {/*  Buttons */}

                {/* Error Text */}
                {error ? <Text style={styles.error}>{error}</Text> : null}
                {/* Error Text */}
            </View>
            </ScrollView>
        </ImageBackground>
    );
};



export default FirstInstallLoginScreen;
