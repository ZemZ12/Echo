import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import styles from '../../styles/profile';
import { auth, db} from '../../services/firebase';
import { signOut } from 'firebase/auth';


const ProfileScreen = () => {

      const user = auth.currentUser.displayName;
    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{
          console.log("logged Out successfully");
        })
        .catch((error) =>{
          console.log(error.message);
        }
      )}

      const handleDeleteAccount = () => {
        Alert.alert(
          "Are you sure you want to delete your account?",
          "This action cannot be undone.",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              style: "destructive",
              onPress: async () => {
                try {
                  const user = auth.currentUser;
                  if (user) {
                    await deleteUser(user);
                    Alert.alert("Account deleted successfully.");
                    // Optional: Sign out or navigate away
                    await signOut(auth);
                  }
                } catch (error) {
                  if (error.code === 'auth/requires-recent-login') {
                    Alert.alert(
                      "Login Required",
                      "For security reasons, please log in again to delete your account."
                    );
                    // Redirect to re-authentication screen if you have one
                  } else {
                    Alert.alert("Error", error.message);
                  }
                }
              },
            },
          ],
          { cancelable: true }
        );
      };

    return(
      <ImageBackground source={require('../../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">
  <View style={styles.Tcontainer}>
    <Text style={styles.settingText}>Settings</Text>
    <Text style={styles.profileName}>{user}</Text>
  </View>
  <View style={styles.Bcontainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
      <Text style={styles.deleteButtonText}>Delete Account</Text>
    </TouchableOpacity>
  </View>
</ImageBackground>

    );
}

export default ProfileScreen;