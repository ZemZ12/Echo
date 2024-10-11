import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import * as Font from 'expo-font';
import { onAuthStateChanged} from '@react-native-firebase/auth';
import { auth } from '../EchoApp/src/services/firebase';
import { enableScreens } from 'react-native-screens';

import FirstInstallLoginScreen from './src/screens/FirstInstallLoginScreen'; // Import your screen
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/NavBarScreens/HomeScreen';
import CallsScreen from './src/screens/NavBarScreens/Calls';
import CameraScreen from './src/screens/NavBarScreens/Camera';
import ProfileScreen from './src/screens/NavBarScreens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavTabs = () => {

  return(
      <Tab.Navigator  screenOptions={({route}) => ({
        tabBarStyle: { height: "9%", borderTopWidth: 2, borderColor : "#3326B5",backgroundColor: "#1b1464"},
        tabBarIcon: ({focused ,color, size}) => {
          switch(route.name) {
            case 'Message':
              return focused? <Ionicons name="chatbubble" size={size} color={color} /> : <Ionicons name="chatbubble-outline" size={size} color="#696969" />;
            case 'Calls':
              return focused? <Ionicons name="call" size={size} color={color} /> : <Ionicons name="call-outline" size={size} color="#696969" />;
            case 'Camera':
              return focused? <Ionicons name="camera" size={size} color={color} /> : <Ionicons name="camera-outline" size={size} color="#696969" />;
            case 'Profile':
              return focused? <Ionicons name="person" size={size} color={color} /> : <Ionicons name="person-circle-outline" size={size} color="#696969" />;
          }
        }
        })} // Customize tab bar style
      >
        <Tab.Screen  options={{headerShown: false}} name = "Message" component={HomeScreen}></Tab.Screen>
        <Tab.Screen  options={{headerShown: false}} name = "Calls" component={CallsScreen}></Tab.Screen>
        <Tab.Screen  options={{headerShown: false}} name = "Camera" component={CameraScreen}></Tab.Screen>
        <Tab.Screen  options={{headerShown: false}} name = "Profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
  );}
  

  

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
            <Stack.Navigator screenOptions={{navigationBarColor: '#1b1464'}} initialRouteName={user ? "Home" : "Login"}>
              {user ? ( 
                <Stack.Screen  options={{headerShown: false}} name = "Home" component={NavTabs}/> 
              ) : ( 
              <>
                <Stack.Screen options = {{headerShown: false}} name = "Login" component={FirstInstallLoginScreen} />
                <Stack.Screen options={{headerShown: false}} name = "ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen options={{headerShown: false}} name = "Register" component={RegisterScreen} />  
              </>
              )}
            
            </Stack.Navigator>
            <StatusBar style='light' />
            
        </NavigationContainer>
    );
}
