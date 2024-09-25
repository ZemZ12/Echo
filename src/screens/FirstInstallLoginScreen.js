import React, { useState } from 'react'; // Import useState here
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; // Import the Firebase auth instance

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
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Echo!</Text>
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
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity title= "Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#3503fc',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
 
});

export default FirstInstallLoginScreen;

  
  