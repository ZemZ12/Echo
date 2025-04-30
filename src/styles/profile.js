
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
      },
      

      profileName: {
        position: 'absolute',
        right: 20,
        top: 60,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      

        settingText: {
            color: 'white',
            fontWeight: 'bold',
            top: 20,
            fontSize: 32,
        },


  Tcontainer: {
    position: 'absolute',
    top: 40, // adds space from top (adjust for status bar)
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // center the "Settings" text
    paddingHorizontal: 20,
  },
  

  Bcontainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  
  logoutButton : {
    backgroundColor: '#00073D',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',

  },

  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: '#eb3434',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',

  },

  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
  

});

export default styles;