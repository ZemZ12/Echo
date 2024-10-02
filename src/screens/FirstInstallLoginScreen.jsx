import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/firstloginscreenstyles';

const FirstInstallLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        const authInstance = getAuth();
        try {
            await signInWithEmailAndPassword(authInstance, email, password);
            navigation.navigate('Home');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    return (
        <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.overlay}>
                {/* Logo */}
                <Image source={require('../assets/alien1.png')} style={styles.logo}></Image>
                {/* Title and Subtitle */}
                <View style ={styles.Title_Subtitle}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style = {styles.EchoText}>Echo</Text>
                    <Text style={styles.subtitle}>Chat, connect, or just hang out. Tap below to get started!</Text>
                </View>
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

                {/* Forgot Password Link */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword} onPress={handleForgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Button Container */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        </ImageBackground>
    );
};



export default FirstInstallLoginScreen;
