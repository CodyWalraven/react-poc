import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerMode: 'screen',
    color: 'blue'

  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> The Home screen </Text>
      </View>
    );
  }
}
