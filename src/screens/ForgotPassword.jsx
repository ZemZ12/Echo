import { View, Text,ImageBackground} from 'react-native'
import styles from '../styles/forgotpasswordscreenstyles';
import Button from '../components/button';




const ForgotPassword = () => {
return(
    <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <View>
            <Text>Forgot Password Screen</Text>
            <Button></Button>
        </View>
    </ImageBackground>
);
}

export default ForgotPassword;