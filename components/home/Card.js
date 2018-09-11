import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
            <CardViewWithImage
                width={(340)}
                height={(400)}
                source={this.props.image_file}
                content={'64Gb Ipad Air gold'}
                title={this.props.title}
                roundedImage={false}
                imageWidth={300}
                imageHeight={100}
            />
      </View>
    );
  }
}
