import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login/Login"
import {createStackNavigator} from 'react-navigation'

/*const App2 = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: Home }
})
*/

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

