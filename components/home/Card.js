import React, { Component } from "react"
import { View, Text, Dimensions } from "react-native"
import { CardViewWithImage } from "react-native-simple-card-view"
import { AppStore } from "../AppStore/AppStore"

export default class Card extends Component {
  constructor(props) {
    super(props)
    let width = Dimensions.get("window").width - 20
    let height = Dimensions.get("window").height / 6

    this.state = {
      width: width,
      height: height
    }
  }

  setImage = () => {
    if (this.props.image == undefined) {
      return {
        uri:
          "https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640"
      }
    } else {
      return { uri: this.props.image }
    }
  }

  render() {
    return (
      <View>
        <CardViewWithImage
          width={this.state.width}
          source={this.setImage()}
          content={this.props.content}
          title={this.props.title}
          roundedImage={false}
          imageWidth={300}
          imageHeight={this.state.height}
        />
      </View>
    )
  }
}
