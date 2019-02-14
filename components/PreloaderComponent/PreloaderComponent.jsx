import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import { BallIndicator } from 'react-native-indicators';

export default class Preloader extends Component{
  constructor(props){
    super(props);
    
    this.state = {
    };
  }

  render(){
    return(
		<View style={styles.body}>
			<BallIndicator size={40} color={"#404447"}/>
		</View>
    )
  }
}

const styles = StyleSheet.create({
	body: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});