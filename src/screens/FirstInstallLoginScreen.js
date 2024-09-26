import React, { useState } from 'react'; // Import useState here
import { View, TextInput, TouchableOpacity, Text, StyleSheet ,Image,ImageBackground ,StatusBar} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; // Import the Firebase auth instance
import styles from '../styles/firstloginscreenstyles';

const FirstInstallLoginScreen = ({ navigation }) => { // Accept navigation prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        const authInstance = getAuth(); // Initialize the auth instance

        try {
            // Authenticate the user
            await signInWithEmailAndPassword(authInstance, email, password);
            // Navigate to the next screen after successful login
            navigation.navigate('Home'); // Replace 'Home' with the actual name of your next screen
        } catch (error) {
            setError(error.message); // Set error message if login fails
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Navigate to the registration screen
    };

    return (
        <ImageBackground
            source={require('../assets/BackgroundScreenLogin.jpg')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to Echo!</Text>
                <Text>Chat, connect, or just hang out. Tap below to get started!</Text>
                 {/* Input Container */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                 {/* Input Container */}
                {error ? <Text style={styles.error}>{error}</Text> : null}
                {/* Button Container */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity title="Register" style={styles.buttonRegister} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                {/* Button Container */}
            </View>
        </ImageBackground>
    );
};


export default FirstInstallLoginScreen;

  
  