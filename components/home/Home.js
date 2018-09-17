import React, { Component } from "react"
import { ScrollView, Text, Container, Dimensions, Keyboard } from "react-native"
import Card from "./Card"
import { CardViewWithImage } from "react-native-simple-card-view"
import { AppStore } from "../AppStore/AppStore"

export default class Home extends Component {
  constructor(props) {
    let screen_width = Dimensions.get("window").width - 20
    super(props)
    this.state = {
      card_width: screen_width
    }
  }

  static navigationOptions = {
    title: "Assets",
    headerMode: "screen",
    color: "blue"
  }

  render() {
    return (
      <ScrollView>
        <Card />
      </ScrollView>
    )
  }
}
