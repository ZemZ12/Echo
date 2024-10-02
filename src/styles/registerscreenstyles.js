import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dofContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensures the inputs are spaced evenly
        alignItems: 'center',
        marginBottom: 20, // Increased bottom margin for overall spacing
        padding: 10,
    },
    dof: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        paddingHorizontal: 15, // Adjusted padding
        height: 50, // Set height for consistency
        width: '30%', // Set a width for consistent spacing
        fontSize: 16, // Increased font size for readability
        fontFamily: 'GasoekOne',
        marginHorizontal: 5, // Added horizontal margin for spacing between dof inputs
        color: 'white',
    },
    container: {
        flex: 1,
        marginTop: 80,
    },
    header: {
        height: 90,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'GasoekOne',
    },
    inputContainer: {
        justifyContent: 'space-evenly', // You can keep this or adjust it
        width: '100%',
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20, // Increased bottom margin for more space between inputs
        color: 'white',
        fontFamily: 'GasoekOne',
    },
    buttonContainer: {
        padding: 20,
    },
    button: {
        backgroundColor: '#00073D',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    error:{
        color:'red',
        fontSize: 13,
        fontFamily: 'GasoekOne',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        
    },
    success:{
        color:'green',
        fontSize: 13,
        fontFamily: 'GasoekOne',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
    },
    icon: {
       height: 30,
       width: 30,
       tintColor: 'rgba(255, 255, 255, 0.3)',
    },

    iconWrapper:{
        position: 'absolute',
        right: 15,  
        padding: 10,
    },

    inputWrapper: {
    flexDirection: 'row',        

   
    }
    
});

export default styles;
