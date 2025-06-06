
import { View ,TouchableOpacity,Text} from "react-native";
import styles from "../styles/button";


const Button = ({title, onPress}) => {
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress} >
          <Text style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Button;




