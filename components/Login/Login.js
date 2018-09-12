import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'
import { LinearGradient } from 'expo';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerMode: 'screen',
    header: null
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <LinearGradient
          start={[0.5,0.5]}
          colors={['#2d7fd2', '#336699']}
          style={styles.container}>
          <View style={styles.loginContainer}>

            <Text style={styles.logoText}>Operation Mango</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </ LinearGradient>
      </KeyboardAvoidingView >

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#336699',
  },

  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logoText: {
    // alignItems: 'center',
    // flexGrow: 1,
    // justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 0
  },

  logo: {
    position: 'absolute',
    width: 650,
    height: 200,
    padding: 20
  },
  formContainer: {
    alignItems: 'stretch'
  }
})
