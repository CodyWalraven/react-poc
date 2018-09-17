import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import { AppStore } from '../AppStore/AppStore'


export default class Card extends Component {
  constructor(props) {
    super(props)
    let width = Dimensions.get('window').width - 20
    let height = Dimensions.get('window').height / 8
    
    this.state = {
      width: width,
      height: height,
    };
  };

  componentWillMount(){
    this.fetchAssetGroupID()
    this.fetchGroupInfo(AppStore.asset_id)    
  }

  fetchGroupInfo = (group_id) => {
    let xhr = new XMLHttpRequest();

    refreshComp = () => {
      this.forceUpdate()
    }

    xhr.open("GET", `https://login.assetpanda.com/v2/entities/#{group_id}/objects`, true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${AppStore.client_token}`)
    xhr.send(JSON.stringify({
    }))

    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText);
        AppStore.image_id = data.objects[0].default_attachment.medium
        alert(`The image url is ${AppStore.image_id}`)
        refreshComp()

      }
      else if (xhr.status === 502) {
        alert("502 bad gateway error, please try again in a few minutes")
      }
      else if (xhr.status === 500) {
        alert("Internal server error")
      }
      else{
        alert("Some other error occured")
      }
    }
  }

  fetchAssetGroupID = () => {
    //Sends credentials to api and stores token, also navigates to Home screen upon success
    let xhr = new XMLHttpRequest();

    refreshComp = () => {
      this.forceUpdate()
    }

    xhr.open("GET", 'https://login.assetpanda.com/v2/entities', true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${AppStore.client_token}`)
    xhr.send(JSON.stringify({
    }))

    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText);
        AppStore.asset_id = data[0].id
        alert(`The asset id is ${AppStore.asset_id}`)
        refreshComp()

      }
      else if (xhr.status === 502) {
        alert("502 bad gateway error, please try again in a few minutes")
      }
      else if (xhr.status === 500) {
        alert("Internal server error")
      }
    }
  }


  render() {
    return (
      <View>
            <CardViewWithImage
                width={this.state.width}
                source={AppStore.image_id}
                content={AppStore.asset_id}
                title={this.state.test}
                roundedImage={false}
                imageWidth={300}
                imageHeight={this.state.height}
            />
      </View>
    );
  }
}
