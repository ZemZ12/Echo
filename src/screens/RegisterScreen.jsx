import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, SafeAreaView,ScrollView,KeyboardAvoidingView,Platform, Alert} from 'react-native';
import styles from '../styles/registerscreenstyles';
import {getAuth ,createUserWithEmailAndPassword, onAuthStateChanged,sendEmailVerification} from "firebase/auth";
import { app,auth ,db } from '../services/firebase';
import { collection, addDoc ,setDoc,doc ,getDocs} from "firebase/firestore"; 



 function RegisterScreen() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [month,setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();

  const handleEmail = text => {
    console.log("email : " + text);
    setEmail(text);
  }
  const handleUsername = text => {
    console.log("username : " + text);
    setUsername(text);
  }

  const handlePassword = text => {
    console.log("password : " + text);
    setPassword(text);
  }

  const handleConfirmPassword = text =>{
    console.log("ConfirmedPass : " + text);
    setConfirmPassword(text);
  }

  const handleMonth = text =>{
    console.log("month : " + text);
    setMonth(text);
  }
  const handleDay = text =>{
    console.log("day : " + text);
    setDay(text);
  }
  const handleYear = text =>{
    console.log("year : " + text);
    setYear(text);
  }
   
  const handleRegister = async () => {
    if(password != confirmPassword){
      Alert.alert("Error","Password does not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);

      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        dob: `${month}/${day}/${year}`,
        email: user.email,
      });

      const snapshot = await getDocs(collection(db, 'users'));
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
      console.log("User data stored successfully!");
      
      // Send email verification
      await sendEmailVerification(user);
      Alert.alert("Success", "Registration Successful!, Verification email sent!");
    } catch (error) {
      console.error("Error creating user:", error);
      Alert.alert("Error", error.message);
    }
    

  }

  
  
  return (
   <ImageBackground source={require('../assets/BackgroundScreenLogin.jpg')} style={styles.backgroundImage} resizeMode="cover">
    
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Your Echo Account</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          autoCapitalize="none"
          onChangeText={handleUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          secureTextEntry
          onChangeText={handlePassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          secureTextEntry
          onChangeText={handleConfirmPassword}
        />
        {/* Date of Brith */}
        <View style={styles.dofContainer}>
          <TextInput 
          style={styles.dof}
          placeholder='Month'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleMonth}
          />
          <TextInput 
          style={styles.dof}
          placeholder='Day'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleDay}
          />
         
          <TextInput 
          style={styles.dof}
          placeholder='Year'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleYear}
          />
        </View>
        {/* Date of Brith */}
      </View>
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText} >Register</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
   </ImageBackground>
  );
}

export default RegisterScreen;
