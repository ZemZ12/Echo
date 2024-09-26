 import { StyleSheet } from "react-native";
 
 
 const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, // The image will take up the entire screen
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      },
      
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        
        flexDirection: 'column',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#00073D',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
    },
    buttonRegister:{
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
       
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        
    },
 
});

export default styles;