import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import { AppStore } from '../AppStore/AppStore'

export default class Card extends Component {
  constructor(props) {
    super(props)
    var { height, width } = Dimensions.get('window')
    let AppStore = new AppStore
    this.state = {
    };
  }

  render() {
    return (
      <View>
            <CardViewWithImage
                width={width}
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
