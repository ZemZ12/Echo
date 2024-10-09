import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import FirstInstallLoginScreen from './src/screens/FirstInstallLoginScreen'; // Import your screen
import RegisterScreen from './src/screens/RegisterScreen';
import { Text} from 'react-native';
import * as Font from 'expo-font';
import { onAuthStateChanged} from '@react-native-firebase/auth';
import { auth } from '../EchoApp/src/services/firebase';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user)=> {
        if(user) {
          setUser(user);
          console.log("user logged in Succesfuly: " + JSON.stringify(user,null, 2))
        }else {
          setUser(null);
          console.log("user logged out:" + user);
        }
        setLoading(false);
      });
      return () => unsubscribe();

  }, []);


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
          
            <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
              {user ? ( 
                <Stack.Screen options={{headerShown: false}} name = "Home" component={HomeScreen}/> 
              ) : ( 
              <>
                <Stack.Screen options = {{headerShown: false}} name = "Login" component={FirstInstallLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name = "ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen options={{headerShown: false}} name = "Register" component={RegisterScreen} />  
              </>
              )}
            
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
