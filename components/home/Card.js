import React, { Component } from "react"
import { View, Text, Dimensions } from "react-native"
import { CardViewWithImage } from "react-native-simple-card-view"
import { AppStore } from "../AppStore/AppStore"

export default class Card extends Component {
  constructor(props) {
    super(props)
    let width = Dimensions.get("window").width - 20
    let height = Dimensions.get("window").height / 8

    this.state = {
      width: width,
      height: height
    }
  }

  componentWillMount() {}

  render() {
    return (
      <View>
        <CardViewWithImage
          width={this.state.width}
          source={{ uri: AppStore.image_id }}
          content={AppStore.secondary_default}
          title={this.props.title}
          roundedImage={false}
          imageWidth={300}
          imageHeight={this.state.height}
        />
      </View>
    )
  }
}
