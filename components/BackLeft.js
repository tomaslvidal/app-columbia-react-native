import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class BackLeft extends Component {
  
  changePage()
  {
    Actions.pop();
  }
  
  render() {
    return (
      <View style={[styles.boxDefault, { backgroundColor: '#48BBEC', alignSelf: 'stretch'}]}>
        <TouchableOpacity onPress={() => this.changePage()}>
          <Text>
            Volver
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxDefault: {
    height: 55
  },
});
