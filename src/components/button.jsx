
import { View ,TouchableOpacity,Text} from "react-native";
import styles from "../styles/button";


const Button = () => {
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} >Button</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Button;




