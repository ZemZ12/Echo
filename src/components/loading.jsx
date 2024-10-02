import LottieView from 'lottie-react-native';
import { View } from 'react-native';


const LoadingAnimation = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: 15}}>
        <LottieView  
        source={require("../assets/animations/loadingAnimation.json")}
        style={{width: 75, height: 75 }}
        autoPlay
        loop
        >          
        </LottieView>
        </View>
    );
}

export default LoadingAnimation;