import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';

import HTML from 'react-native-render-html';

import BackLeft from '../../../components/BackLeftComponent';

import Footer from '../../../components/FooterComponent';

import Div from '../../../layouts/default';

const DEFAULT_PROPS = {
    onLinkPress: (evt, href) => { Linking.openURL(href); }
};

export default class DestinationDetail extends Component {
  constructor(props){
    super(props);

    this.state = { 
      item: this.props.navigation.state.params.item,
      maxWidth: 0
    };

    this._setMaxHeight = this._setMaxHeight.bind(this);
  }

  _setMaxHeight(e){
    this.setState({
      maxWidth: e.nativeEvent.layout.width
    });
  }

  render() {
    const img_path = '../../img/', url = "http://columbiaapp.eviajes.online/destinations_m/download/";

    return (
      <Div name="Formulario de Reclamos" icon="wpforms">
        <View onLayout={(e) => this._setMaxHeight(e)}>
          <View style={{ marginLeft: -20, marginRight: -20 }}>
            <Image source={{uri: url+this.state.item.image1}} style={[styles.footerImage]} />
          </View>

          <View style={styles.box}>
            <Text style={styles.textTitle}>{this.state.item.title}</Text>

            <ScrollView style={{ flex: 1 }}>
              <HTML {...DEFAULT_PROPS} imagesMaxWidth={this.state.maxWidth ? this.state.maxWidth : null} staticContentMaxWidth={this.state.maxWidth ? this.state.maxWidth : null} html={this.state.item.description!=undefined ? this.state.item.description : '<div></div>'} tagsStyles={tagsStyles} />
            </ScrollView>
          </View>
        </View>
      </Div>
    );
  }
}

const tagsStyles = {
  img: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
  }
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 8
  },
  footerImage: {
    flex: 1,
    alignSelf: 'center',
    justifyContent:'center',
    paddingTop: 10,
    marginTop: 'auto',
    marginBottom:'auto',
    height: 200,
    width: '100%',
    marginTop: -27
  },
  box: {
    backgroundColor: 'white',
    marginTop: 6,
    padding: 5
  },
});