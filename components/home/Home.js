import React, { Component } from "react"
import { ScrollView, Text, Container, Dimensions, Keyboard } from "react-native"
import Card from "./Card"
import { AppStore } from "../AppStore/AppStore"

export default class Home extends Component {
  constructor(props) {
    let screen_width = Dimensions.get("window").width - 20
    super(props)
    this.state = {
      card_width: screen_width,
      display_names: []
    }
  }

  static navigationOptions = {
    title: "Assets",
    headerMode: "screen",
    color: "blue"
  }

  componentWillMount() {
    this.fetchAssetGroupID(() => {
      this.fetchGroupData()
    })
  }

  fetchGroupData = group_id => {
    let xhr = new XMLHttpRequest()
    var _ = require("lodash")

    refreshComp = () => {
      this.forceUpdate()
    }

    setDataState = data => {
      this.setState({ data: data })
    }

    getDataState = () => {
      let objects = this.state.data.objects
      for (let x = 0; x < objects.length; x++) {
        let current_item = objects[x].display_name
        //let image_url = objects[x].default_attachment.url

        this.state.display_names.push(current_item)
        console.log(this.state.display_names)
      }
    }

    xhr.open(
      "GET",
      `https://login.assetpanda.com/v2/entities/${
        AppStore.main_entity_id
      }/objects`,
      true
    )
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.setRequestHeader("Authorization", `Bearer ${AppStore.client_token}`)
    xhr.send(JSON.stringify({}))

    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText)
        setDataState(data)
        console.log(`The display name is ${getDataState()}`)
        refreshComp()
      } else if (xhr.status === 502) {
        alert("502 bad gateway error, please try again in a few minutes")
      } else if (xhr.status === 500) {
        alert("Internal server error")
      } else {
        alert(`Some other error occured code ${xhr.status}`)
      }
    }
  }

  fetchAssetGroupID = callback => {
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
        var data_full = JSON.parse(this.responseText)
        AppStore.main_entity_id = data_full[0].id
        alert(`The group id is ${AppStore.main_entity_id}`)
        callback()
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
        {this.state.display_names.map(display_name => (
          <Card key={Math.random()} title={display_name} />
        ))}
      </ScrollView>
    )
  }
}
