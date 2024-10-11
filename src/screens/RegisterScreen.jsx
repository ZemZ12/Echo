import {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ImageBackground, SafeAreaView,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import styles from '../styles/registerscreenstyles';
import {createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {auth ,db } from '../services/firebase';
import { collection ,setDoc,doc ,getDocs} from "firebase/firestore"; 
import LoadingAnimation  from '../components/loading';

 function RegisterScreen() {
  // useStates Inputs
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // useStates Inputs

  // useStates DoF
  const [month,setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  // useStates DoF

  // useStates Messages
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hideErrorMessage, setHideErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState('');
  // useStates Messages
  const [loading, setLoading] = useState(false);

  //Functions 
  const visiblePassword = () => setShowPassword(!showPassword);
  const handleEmail = (text) => setEmail(text);
  const handleUsername = (text) => setUsername(text);
  const handlePassword = (text) => setPassword(text);
  const handleConfirmPassword = (text) => setConfirmPassword(text);
  
  const resetInputs = () => {
    setEmail('');
    setUsername('');
    setMonth('');
    setDay('');
    setYear('');
  }
 
  const resetPasswordInputs = () => {
    setPassword('');
    setConfirmPassword('');
  }

  const handleYear = (numericYear) => {
    if(/^\d+$/.test(numericYear)) { // Only allow whole numbers
      const yearValue = parseInt(numericYear);
      
      if(yearValue <= 2030 && yearValue >= 1) {
          setYear(numericYear);
      } else {
          setYear('');
          setErrorMessage("Please enter a valid year (between 1 and 2030).");
      }
  } else {
      setYear(''); // Clear input if a decimal or invalid character is found
      setErrorMessage("Decimals are not allowed.");
  }

  setTimeout(() => {
      setErrorMessage('');
      setHideErrorMessage(true);
  }, 3000);
    
  }

  const handleMonth = (numericMonth) => {

    if(/^\d+$/.test(numericMonth)){
      const monthValue = parseInt(numericMonth);
        if (monthValue <= 12 && monthValue >= 1) {
          setMonth(numericMonth);
      } else{
        setMonth('');
        setErrorMessage("Please enter a valid month (between 1 and 12).");
      }
    }
    else{
      setMonth('');
      setErrorMessage("No Decimals, Try again");
    }
    setTimeout(() =>{
      setErrorMessage('');
      setHideErrorMessage(true);
    }, 3000);
  };

  const handleDay = (numericDay) =>{
    if(/^\d+$/.test(numericDay)){
      const dayValue = parseInt(numericDay);
      if(dayValue <= 31 && dayValue >= 1){
         setDay(dayValue);
      }else {
        setDay('');
        setErrorMessage("larger than 31, try again");
      }
    } else{
      setDay('');
      setErrorMessage("No Decimals, Try again");
    }
    setTimeout(() =>{
      setErrorMessage('');
      setHideErrorMessage(true);
    }, 3000);
  } 

  const handleError = (error) => {
    let message;
    // Check for specific error codes or messages
    if (error.code === 'auth/invalid-email') {
      message = "Invalid email format. Please enter a valid email.";
    } else if (error.code === 'auth/email-already-in-use') {
      message = "This email is already in use. Please use a different email.";
    } else if (error.code === 'auth/weak-password') {
      message = "Password is too weak. Please choose a stronger password.";
    } else {
      message = "An unexpected error occurred. Please try again.";
    }

    setErrorMessage(message);
    setHideErrorMessage(false)

    setTimeout(() => {
      setHideErrorMessage(true);
      setErrorMessage('');
    }, 4000);
    
  };

  const handleRegister = async () => {

    if (!email || !username || !password || !confirmPassword || !month || !day || !year) {
      setErrorMessage("Please fill in all fields.");
      setHideErrorMessage(false)
      setTimeout(() => {
        setHideErrorMessage(true);
        setErrorMessage('');
      }, 4000);
      resetInputs();
      return;
    }
    if(password !== confirmPassword){
      setErrorMessage("Password does not match!");
      setHideErrorMessage(false)
      setTimeout(() => {
      setHideErrorMessage(true);
        setHideErrorMessage('');
      }, 4000);
     
      resetPasswordInputs();
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
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
      // Store user data in Firestore

      // Send email verification
      await sendEmailVerification(user);
      setSuccessMessage("Registration Successful!, Verification email sent!")
      resetPasswordInputs();
      resetInputs();
      setLoading(false);
      // Send email verification
    } catch (error) {
      handleError(error);
      resetInputs();
      setLoading(false);
    }
  })
    

  }  
  return (
    
   <ImageBackground source={require('../assets/Home1Background.jpg')} style={styles.backgroundImage} resizeMode="cover">
    
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
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          autoCapitalize="none"
          onChangeText={handleUsername}
          value={username}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
            secureTextEntry = {!showPassword}
            onChangeText={handlePassword}
            value={password}
          />
          <TouchableOpacity onPress={visiblePassword} style={styles.iconWrapper}>
                  {showPassword ? (
                  <Image source={require('../assets/hide.png')} style={styles.icon} />
                ) : (
                  <Image source={require('../assets/show.png')} style={styles.icon} />
                )}
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          secureTextEntry = {!showPassword}
          onChangeText={handleConfirmPassword}
          value={confirmPassword}
        />
        {/* Alert Mesage*/}
          {successMessage ? (<Text style={styles.success}>{successMessage}</Text>) : (<Text style={styles.error}>{errorMessage}</Text>) }
        {/* Alert Mesage*/}

        {/* Date of Brith */}
        <View style={styles.dofContainer}>
          <TextInput 
          style={styles.dof}
          placeholder='Month'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleMonth}
          keyboardType="numeric"
          maxLength={2}
          value={month}
          />
          <TextInput 
          style={styles.dof}
          placeholder='Day'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleDay}
          keyboardType="numeric"
          maxLength={2}
          value={day}
          />
         
          <TextInput 
          style={styles.dof}
          placeholder='Year'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={handleYear}
          keyboardType="numeric"
          maxLength={4}
          value={year}
          />
        </View>
        {/* Date of Brith */}
      </View>
            
      {loading ? <LoadingAnimation></LoadingAnimation> 
      : 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText} >Register</Text>
        </TouchableOpacity>
      </View>}
    
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
   </ImageBackground>
  );
}

export default RegisterScreen;
