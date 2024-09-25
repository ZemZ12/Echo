import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import FirstInstallLoginScreen from './src/screens/FirstInstallLoginScreen'; // Import your screen

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstInstallLoginScreen">
                <Stack.Screen name = "Login" component={FirstInstallLoginScreen} />
                {/* Add other screens here, e.g., Home screen */}
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
