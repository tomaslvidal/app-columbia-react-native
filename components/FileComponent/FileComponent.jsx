import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FileComponent extends Component{
  constructor(props){
    super(props);
  }

  handlePress(item){
    Linking.openURL(item);
  }

  render(){
    return(
      <View style={(this.props.style!=undefined && this.props.style!="") ? [styles.body, this.props.style] : styles.body}>
        <View>
          <Text style={styles.name}>{this.props.name}</Text>
        </View>
        
        <TouchableOpacity onPress={() => this.handlePress(this.props.url)} style={styles.icon}>
          <Icon name={'cloud-download'} size={20} color={attributes.color}  />
        </TouchableOpacity>
      </View>
    );
  }
}

const attributes = {
  color : '#FFFFFF'
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#404447',
    padding: 10,
  },
  name: {
    color: 'white',
    fontSize: 16
  },
  icon: {

  }
});