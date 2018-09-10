import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems: 'stretch', paddingLeft: 20, paddingRight: 20, paddingBottom: 55}}>
        <TextInput style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)' />

        <TextInput style={styles.input}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />

        <TouchableOpacity  style={styles.buttonContainer}  >
          <Text style={styles.buttonText}>LOGIN</Text>
          
        </TouchableOpacity> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    alignContent: 'center'
    

  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
})