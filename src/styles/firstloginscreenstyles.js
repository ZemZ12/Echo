 import { StyleSheet } from "react-native";
 
 const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 100,
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    Title_Subtitle:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        color: 'white',
        marginBottom: 10,
        fontFamily: 'GasoekOne',
        
    },
    EchoText:{
        fontFamily: 'FasterOne',
        justifyContent: 'center',
        color: 'white',
        fontSize: 48,
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: 'white',
    },
    forgotPassword: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
  
    error: {
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },
    buttonLogin: {
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