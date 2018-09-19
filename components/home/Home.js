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

  fetchApiData(url, dataStore, requestType) {
    let xhr = new XMLHttpRequest()
    let apiURL = `https://login.assetpanda.com/${url}`

    xhr.open(requestType, apiURL, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.setRequestHeader("Authorization", `Bearer ${AppStore.client_token}`)
    xhr.send(JSON.stringify({}))

    setDataState = data => {
      this.setState({ data: data })
    }

    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText)
        AppStore.asset_id = data[0].id
        alert(`The group id is ${AppStore.asset_id}`)
        refreshComp()
        getGroupInfo()
      } else if (xhr.status === 502) {
        alert("502 bad gateway error, please try again in a few minutes")
      } else if (xhr.status === 500) {
        alert("Internal server error")
      }
    }
  }

  fetchAssetGroupID = () => {
    //Sends credentials to api and stores token, also navigates to Home screen upon success
    let xhr = new XMLHttpRequest()

    refreshComp = () => {
      this.forceUpdate()
    }

    getGroupInfo = group_id => {
      this.fetchGroupData(group_id)
    }

    xhr.open("GET", "https://login.assetpanda.com/v2/entities", true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.setRequestHeader("Authorization", `Bearer ${AppStore.client_token}`)
    xhr.send(JSON.stringify({}))

    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText)
        AppStore.asset_id = data[0].id
        alert(`The group id is ${AppStore.asset_id}`)
        refreshComp()
        getGroupInfo()
      } else if (xhr.status === 502) {
        alert("502 bad gateway error, please try again in a few minutes")
      } else if (xhr.status === 500) {
        alert("Internal server error")
      }
    }
  }
  render() {
    return (
      <ScrollView>
        <Card />
      </ScrollView>
    )
  }
}
