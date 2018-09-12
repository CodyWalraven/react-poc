import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "default"
    };
  }

  validateLogin = () => {
  let validEmail = 'test@gmail.com'
  let validPassword = 'test'

  if ((this.state.email === validEmail) && (this.state.password === validPassword)) {
    this.props.navigation.navigate('Home')
  }
  else if (this.state.email === undefined && this.state.password === undefined){
    alert("Please enter a username and password")
  }
  else {
    alert("Username or password is incorrect")
  }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={(email) => this.setState({email: email})}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          underlineColorAndroid=  'transparent'
          placeholderTextColor='rgba(225,225,225,0.8)' />

        <TextInput style={styles.input}
          onChangeText={(password) => this.setState({ password: password })}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='Password'
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(225,225,225,0.8)'
          secureTextEntry />

        <TouchableOpacity  style={styles.buttonContainer}
         onPress={  () => this.validateLogin()} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity> 
  
      </View>
    );s
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 55
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 15,
    padding: 10,
    borderRadius: 15,
    fontSize: 15,
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