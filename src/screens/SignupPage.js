import { StyleSheet, Text, View, SafeAreaView,Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { CustomTextInput, CustomButton } from '../component'

const SignupPage = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.welcome}>Sign Up</Text>
        <Image source={require('../../assets/image/add-user.png')}
          style={styles.image}
         />
      </View>
      <View style={styles.inputBoxContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          onChangeText={setName}
          value={name}
        />
        <CustomTextInput
          title="Email"
          isSecureText={false}
          onChangeText={setEmail}
          value={email}
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          onChangeText={setPassword}
          value={password} />
      </View>
      <View style={styles.footer}>
        <CustomButton
          title="Sign Up"
          setWidth="80%"
          buttonColor="lightcoral"
          pressedButtonColor="lightgray"
          onPress={() => console.log("Sign Up")}
        />

        <Pressable
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Already have an account? Sign in</Text>
        </Pressable>
      </View>


    </SafeAreaView>
  )
}

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },

  inputBoxContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },

  footer: {
    justifyContent: 'space-between',
    flex: 3,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,  
  },

  image: {
    width: 100,
    height: 100,
  },
})