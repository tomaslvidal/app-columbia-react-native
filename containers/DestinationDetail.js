import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import SwipeableParallaxCarousel, {ScrollView, SwipeableCarousel} from 'react-native-swipeable-parallax-carousel';
import BackLeft from '../components/BackLeft.js'
import Footer from '../components/Footer.js'

export default class DestinationDetail extends Component {
  
  
  constructor(props){
    super(props);
    
    this.state = {
      datacarousel: [
      {
          "id": 339964,
          "title": "Valerian and the City of a Thousand Planets",
          "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
      },
      {
          "id": 315635,
          "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
      },
      {
          "id": 339403,
          "title": "Baby Driver",
          "subtitle": "More than just a trend",
          "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
      },
      ],
      loremText : "lorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdf"
    }
  }
  
  changePage(){
    Actions.pop();
  }

  render() {
  
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 30}}>

          <BackLeft/>

          <View style={{height: 210, backgroundColor: 'blue', paddingTop: 5}}>
            <SwipeableParallaxCarousel
              data={this.state.datacarousel}
              navigation={true}
              navigationType="bars"
            />
          </View>
          
          <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <Text style={{ fontSize: 26, paddingLeft: 4, paddingTop: 13}}> Title {this.props.title} </Text>
            <Text style={{ paddingLeft: 12}}> { this.state.loremText } {this.props.text} </Text>
          </View>
          
          <Footer/>
          
      </View>
    );

  }
}


const styles = StyleSheet.create({
  boxDefault: {
    height: 55
  },
  imageBackground:{
    height: '100%',
    width: '100%'
  }
});