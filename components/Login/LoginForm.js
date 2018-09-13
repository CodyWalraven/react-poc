import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard} from 'react-native'
import { withNavigation} from 'react-navigation'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  apiLogin = () => {
    //Sends credentials to api and stores token, also navigates to home screen upon success
    let xhr = new XMLHttpRequest();

    let NavigateToHomeScreen = () => {
      this.props.navigation.navigate('Home')
    }

    xhr.open("POST", 'https://login.assetpanda.com/v2/session/token', true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({
      email: this.state.email,
      password: this.state.password
    }))

    xhr.onload = function () {
      if (xhr.status === 200){
        var data = JSON.parse(this.responseText);
        let token = data.access_token
        Keyboard.dismiss()
        NavigateToHomeScreen()
      }
      else if (xhr.status === 422){
        alert("Username or password is incorrect")
      }
      else if (xhr.status === 502){
        alert("502 bad gateway error, please try again in a few minutes")
      }
      else if (xhr.status === 500){
        alert("Internal server error")
      }
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
         onPress={  () => this.apiLogin()} >
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