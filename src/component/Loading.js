import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Pressable } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Pressable 
       style={styles.closeButtonConteiner}

       onPress ={()=> props.changeIsLoading()}
       >

       <Text style ={styles.closeButton}>X</Text>
      </Pressable>  
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex:1,
    backgroundColor: 'tomato',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginTop: 20,
    alignContent: 'center',
    justifyContent: 'center'
    
  },
  closeButtonConteiner: {
    backgroundColor:'black',
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    position: 'absolute',
    top:50,
    right:10,
  },
  closeButton: {
    color:'white',
    fontWeight:'bold',
    fontSize:16,
  }
});

export default Loading;