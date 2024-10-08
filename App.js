import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import FirstInstallLoginScreen from './src/screens/FirstInstallLoginScreen'; // Import your screen
import RegisterScreen from './src/screens/RegisterScreen';
import { Text} from 'react-native';
import * as Font from 'expo-font';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'FasterOne': require('./src/assets/fonts/FasterOne-Regular.ttf'), 
      'GasoekOne': require('./src/assets/fonts/GasoekOne-Regular.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstInstallLoginScreen">
                <Stack.Screen options = {{headerShown: false}}name = "Login" component={FirstInstallLoginScreen} />
                 <Stack.Screen options={{headerShown: false}} name = "ForgotPasswordScreen" component={ForgotPasswordScreen} />
                 <Stack.Screen options={{headerShown: false}} name = "Register" component={RegisterScreen} />  
                 <Stack.Screen options={{headerShown: false}} name = "Home" component={HomeScreen}/>
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
