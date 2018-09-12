import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
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
          underlineColorAndroid=  'transparent'
          placeholderTextColor='rgba(225,225,225,0.8)' />

        <TextInput style={styles.input}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='Password'
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(225,225,225,0.8)'
          secureTextEntry />

        <TouchableOpacity  style={styles.buttonContainer}
         onPress={  () => this.props.navigation.navigate('Home')} >
          <Text style={styles.buttonText}>LOGIN</Text>
          
        </TouchableOpacity> 
      </View>
    );s
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
    alignContent: 'center',
    color: 'rgba(225,225,225,0.8)'
    
  },
  buttonContainer: {
    backgroundColor: '#009933',
    paddingVertical: 15,
    borderRadius: 15,


  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20
  }
})

export default withNavigation(LoginForm)