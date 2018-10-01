import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
          <View style={{height: 45, justifySelf: 'flex-end', backgroundColor: 'blue'}}>
            <Image source={{ uri: 'https://codifiedlondon.blob.core.windows.net/storage/2016/02/reactive-nativingitup.png.800x600_q96.png' }} style={ styles.footerImage }>
            </Image>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  footerImage:{
    flex: 1,
    width:'100%',
    height: '100%',
    paddingTop: 10,
    marginTop: 'auto',
    marginBottom:'auto'
  }
});
