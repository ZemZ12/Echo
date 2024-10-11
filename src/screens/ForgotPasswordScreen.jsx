import { View, Text,ImageBackground} from 'react-native';
import { useState } from 'react';
import styles from '../styles/forgotpasswordscreenstyles';
import Button from '../components/button';
import Input from '../components/input';
import { auth } from '../services/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import LoadingAnimation  from '../components/loading';

const ForgotPasswordScreen = () => {

    const [email,setEmail] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isloading, setIsLoading] = useState(false);


    const handleEmail = (text) => {
        setEmail(text); 
    };

    const handleError = (error) => {
        switch (error.code) {
            case "auth/invalid-email":
                setErrorMessage("Invalid email address. Please try again.");
                break;
            case "auth/user-not-found":
                setErrorMessage("No account found with this email.");
                break;
            default:
                setErrorMessage("Error: " + error.message);
                break;
        }
    }

    const handleForgotPassword = () => {
        if(!email){
            setErrorMessage("Please Enter your email address");
            return;
        }
       
        setIsLoading(true);
        sendPasswordResetEmail(auth,email)
        .then(() => {
            setSuccessMessage("If this email is registered , a password reset email has been sent. Please check your inbox.");
                setErrorMessage('');
                setEmail('');
            setTimeout(() =>{
                setSuccessMessage("");
            }, 5000);
            
        })
        .catch((error) => {
            console.log("error: " + error.message);
            handleError(error)
        })
        .finally(() => {
            setIsLoading(false);
        });
       
    }

return(
    <ImageBackground source={require('../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.textContainer}>
                    <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
                    <Text style={styles.subHeader}>Enter your email So you can reset your password</Text>
                <View style={styles.formContainer}>
                    <Input
                    value={email}
                    onChangeText={handleEmail}
                    placeholder="Email address"
                    >    
                    </Input>
                    {isloading ? <LoadingAnimation></LoadingAnimation> :<Button title='Submit' onPress={handleForgotPassword}></Button> }
                    {errorMessage  ? <Text style={styles.errorMessage}>{errorMessage}</Text> : <Text style={styles.successMessage}>{successMessage}</Text>}
                </View>
            </View>
    </ImageBackground>
);
}

export default ForgotPasswordScreen;