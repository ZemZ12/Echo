import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    textContainer:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70,
        marginTop: 130,
        
    },

    formContainer:{
        marginTop: 50,
    },

    forgotPassword: {
        fontFamily: 'GasoekOne',
        color: 'white',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },

    subHeader:{
        fontFamily: 'GasoekOne',
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
    },

    errorMessage: {
        color:'red',
        fontSize: 13,
        fontFamily: 'GasoekOne',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
    },

    successMessage: {
        color:'green',
        fontSize: 13,
        fontFamily: 'GasoekOne',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
    },

})

export default styles;