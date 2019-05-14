import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';

import HTML from 'react-native-render-html';

import AsyncImageAnimated from 'react-native-async-image-animated';

import BackLeft from '../../../components/BackLeftComponent';

import Footer from '../../../components/FooterComponent';

import Div from '../../../layouts/default';

const COORDINATES = {};

export default class DestinationDetail extends Component {
  constructor(props){
    super(props);

    this.state = { 
        item: this.props.navigation.state.params.item,
        maxWidth: 0
    };

    this._setMaxHeight = this._setMaxHeight.bind(this);

    this.scrollView = this.scrollView.bind(this);

    this.onLinkPress = this.onLinkPress.bind(this);
  }

  _setMaxHeight(e){
    this.setState({
        maxWidth: e.nativeEvent.layout.width
    });
  }

  scrollView(e){
    this.div.scroll_view.scrollTo({ x: 0, y: COORDINATES[e]-80});
  }

    onLinkPress(href){
        Linking.openURL(href);
    }

  render() {
    const img_path = '../../img/', url = "http://columbiaapp.eviajes.online/destinations_m/download/";

    return (
      <Div ref={(ref) => this.div = ref} name="Formulario de Reclamos" icon="wpforms">
        <View onLayout={(e) => this._setMaxHeight(e)}>
          <View style={{ marginLeft: -20, marginRight: -20 }}>
            <Image source={{uri: url+this.state.item.image1}} style={[styles.footerImage]} />
          </View>

          <View style={styles.box}>
            <Text style={styles.textTitle}>{this.state.item.title}</Text>

            <ScrollView ref={(scroll_view) => this.scroll_view = scroll_view} style={{ flex: 1 }}>
              <HTML imagesMaxWidth={this.state.maxWidth ? this.state.maxWidth : null} staticContentMaxWidth={this.state.maxWidth ? this.state.maxWidth : null} html={this.state.item.description!=undefined ? this.state.item.description : '<div></div>'} tagsStyles={tagsStyles} alterChildren = { (node) => {
                        if(node.name === 'p'){
                            if(typeof node.attribs['style'] != "undefined"){
                                let arrayProperties = node.attribs['style'].split(';').map(item => item.trim());

                                if(arrayProperties.length>0){
                                    ['start', 'end'].forEach(value => {
                                        let find_index = arrayProperties.findIndex(item => typeof item != 'undefined' ? (item.indexOf(value) != -1 && item.indexOf('text-align') != -1) : false);

                                        if(find_index != -1){
                                            delete arrayProperties[find_index];
                                        }
                                    });

                                    node.attribs['style'] = arrayProperties.join(';');
                                }
                            }
                        }

                        return node.children;
                    }
                }
                renderers = {{
                    img: (parameters) => {
                        return(
                            <AsyncImageAnimated
                                source={{
                                    uri: parameters.src
                                }}
                                key={parameters.src}
                                placeholderColor={'#404447'}
                                style={{
                                    height: 180,
                                    width: '100%'
                                }}
                            />
                        );
                    },
                    a: (parameters, two, three, four) => {
                        let key = Math.random().toString(36).substr(2, 5);

                        if(typeof parameters.href != "undefined"){
                            if(parameters.href == "#"){
                                if(typeof parameters.id != "undefined"){
                                    if(parameters.id.length != 0){
                                            return(
                                                <View key={key} ref={ (ref) => this[parameters.id] = ref } onLayout={ ({nativeEvent}) => {
                                                    if(this[parameters.id]) {
                                                        this[parameters.id].measure((x, y, width, height, pageX, pageY) => {
                                                            COORDINATES[parameters.id] = pageY;
                                                        });
                                                    }
                                                }}>
                                                    <Text >
                                                        {two[0]}
                                                    </Text>
                                                </View>
                                            );
                                    }
                                }
                            }
                            else if(parameters.href.indexOf('#')==0){
                                return(
                                    <TouchableOpacity key={key} onPress={() => { this.scrollView(parameters.href.slice(1)) } }>
                                        <Text>{two[0]}</Text>
                                    </TouchableOpacity>
                                );
                            }
                            else{
                                return(
                                    <TouchableOpacity key={key} onPress={() => { this.onLinkPress(parameters.href) } }>
                                        {two}
                                    </TouchableOpacity>
                                );
                            }
                        }

                        return(two);
                    }
                }}
                />
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