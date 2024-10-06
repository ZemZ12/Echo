
import { View ,TouchableOpacity,Text, TextInput} from "react-native";
import styles from '../styles/input'


const Input = ({value,onChangeText,placeholder}) => {
    return(
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        value={value}
        onChangeText={onChangeText}
        >
        </TextInput>
      </View>
    );
}

export default Input;