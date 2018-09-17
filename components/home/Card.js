import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import { AppStore } from '../AppStore/AppStore'


export default class Card extends Component {
  constructor(props) {
    super(props)
    let width = Dimensions.get('window').width - 20
    let height = Dimensions.get('window').height / 8
    let my_token = AppStore.client_token
    this.state = {
      width: width,
      height: height,
      token: my_token, 
      asset_id: 1
    };
  };

  componentWillMount(){
    this.fetchAssetGroupID()
  }

  fetchAssetGroupID = () => {
    //Sends credentials to api and stores token, also navigates to Home screen upon success
    let xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://login.assetpanda.com/v2/entities', true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    alert(('Authorization', `Bearer ${this.state.token}`))
    xhr.setRequestHeader('Authorization', `Bearer ${this.state.token}`)
    // xhr.send(JSON.stringify({

    // }))

    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(this.responseText);
        alert(data)

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
                source={this.props.image_file}
                content={'64Gb Ipad Air gold'}
                title={`It's ${this.state.token}`}
                roundedImage={false}
                imageWidth={300}
                imageHeight={this.state.height}
            />
      </View>
    );
  }
}
