
import HomeScreen from '../screens/NavBarScreens/HomeScreen';
import ProfileScreen from '../screens/NavBarScreens/Profile';
import CameraScreen from '../screens/NavBarScreens/Camera';
import CallsScreen from '../screens/NavBarScreens/Calls';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  );
}


  export default NavTabs;

