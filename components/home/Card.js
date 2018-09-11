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
                source={{ uri: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/ipad/rfb-ipad-air-gold-wifi-2014?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=0' }}
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
