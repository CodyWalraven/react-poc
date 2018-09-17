import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import { AppStore } from '../AppStore/AppStore'

export default class Card extends Component {
  constructor(props) {
    super(props)
    let width = Dimensions.get('window').width - 20
    let my_token = AppStore.client_token
    this.state = {
      width: width,
      token: my_token
    };
  };


  render() {
    return (
      <View>
            <CardViewWithImage
                width={this.state.width}
                height={(400)}
                source={this.props.image_file}
                content={'64Gb Ipad Air gold'}
                title={`It's ${this.state.token}`}
                roundedImage={false}
                imageWidth={300}
                imageHeight={100}
            />
      </View>
    );
  }
}
