import React, { Component } from 'react';
import { ScrollView, Text, Container } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerMode: 'screen',
    color: 'blue'

  };

  render() {
    return (
      <ScrollView>
      <CardViewWithImage
        width={(340)}
        height={(400)}
        source={{ uri: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/ipad/rfb-ipad-air-gold-wifi-2014?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=0' }}
        content={'64Gb Ipad Air gold'}
        title={'iPad Air'}
        imageWidth={300}
        imageHeight={100}
      />
      <CardViewWithImage
        width={(340)}
        height={(400)}
          source={{ uri: 'https://assets.pcmag.com/media/images/330805-dell-inspiron-15-i15rv-6190-blk.jpg?width=1000&height=712' }}
          content={'A new dell laptop we purchased last year, has 512gb ssd drive and pentium processor'}
        title={'Dell Laptop'}
        imageWidth={300}
        imageHeight={100}
      />
      <CardViewWithImage
        width={(340)}
        height={(400)}
          source={{ uri: 'https://images-eu.ssl-images-amazon.com/images/I/51Z0ALvn1wL._SX300_QL70_.jpg' }}
        content={'A 15" Hp laptop with vga and Hdmi inputs'}
        title={'Hp Laptop'}
        imageWidth={300}
        imageHeight={100}
      />
      <CardViewWithImage
        width={(340)}
        height={(400)}
        source={{ uri: 'http://www.prospectmagazine.co.uk/wp-content/uploads/2014/12/feature_cover_assets_large.jpg' }}
        content={'This is a big house home to the Jim family who love to eat pizza and hotdogs and corn.'}
        title={'A whole house'}
        imageWidth={300}
        imageHeight={100}
      />
      <CardViewWithImage
        width={(340)}
        height={(400)}
          source={{ uri: 'https://www.apple.com/v/iphone-x/e/images/meta/og.png?201808151230' }}
        content={'This is an iPhone X that has over 128GigaBytes of giant storage, best phone ever A+ rating'}
        title={'iPhone X'}
        imageWidth={300}
        imageHeight={100}
      />
        <CardViewWithImage
          width={(340)}
          height={(400)}
          source={{ uri: 'https://pbs.twimg.com/profile_images/788823098795536384/IDbV8F5D_400x400.jpg' }}
          content={'The coolest asset tracking company ever'}
          title={'Asset Panda'}
          imageWidth={300}
          imageHeight={100}
        />
        <CardViewWithImage
          width={(340)}
          height={(400)}
          source={{ uri: 'https://www.applecandyco.com/wp-content/uploads/2013/04/kit_cat_36ct.jpg' }}
          content={'Yum candy that you can eat and there is so much of it'}
          title={'Kit Kats'}
          imageWidth={300}
          imageHeight={100}
        />
      </ScrollView>
    );
  }
}
