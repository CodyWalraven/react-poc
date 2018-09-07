import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/NewMango.png')} />
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </View>
      </KeyboardAvoidingView >

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },


  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 650,
    height: 200,
    paddingTop: 200
  },
  formContainer: {
    alignItems: 'stretch'
  }
})
