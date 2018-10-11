import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default class DestinationBox extends Component {
  
  constructor(props){
      super(props);
  }

  componentDidMount(){
    //this.updateDataSource(this.props.destinations)
  }

/*  componentWillReceiveProps(newProps) {
    
    if(newProps.destinations !== this.props.destinations) {

    }
    
  }*/

  render() {



    return (
        <View style={[styles.boxDefault, { backgroundColor: 'white', alignSelf: 'stretch' }]}>
           <ImageBackground style={[ styles.imageBackground, {} ]} source={{ uri: this.props.destination.img }}>
            <View style={[{flex: 1}]}>
              <Text style={[ styles.text ]}>
                {this.props.destination.name}
              </Text>
            </View>
          </ImageBackground>
        </View>
    );

  }
}


const styles = StyleSheet.create({
    boxDefault: {
      height: 200,
      paddingBottom: 5
    },
    imageBackground:{
      height: '100%',
      width: '100%',
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da'
    },
    text: {
      fontSize: 33,
      paddingTop: 18,
      paddingLeft: 20,
      color: '#FFF', 
      paddingBottom: 18,
      textShadowColor: "#000", 
      textShadowRadius: 7, 
      textShadowOffset: { height: 2, width: -0 }
    }
});