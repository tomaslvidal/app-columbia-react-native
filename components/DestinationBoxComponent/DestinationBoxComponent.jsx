import React, { Component } from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import { createImageProgress } from 'react-native-image-progress';

import Progress from 'react-native-progress/Bar';

import FastImage from 'react-native-fast-image';

const Image = createImageProgress(FastImage);

export default class DestinationBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const url = this.props.destination.parseado!= undefined ? this.props.destination.image1 : "https://columbiaapp.eviajes.online/destinations_m/download/"+this.props.destination.image1;

        return(
            <View style={[styles.boxDefault]}>
                <Image
                    indicatorProps={{
                        size: 100,
                        color: 'rgba(150, 150, 150, 1)',
                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                    }} 
                    indicator={Progress} 
                    source={{
                        uri: url,
                        cache: FastImage.cacheControl.immutable,
                        priority: FastImage.priority.high
                    }}
                    style={{
                        width: '100%', 
                        height: '100%',
                        backgroundColor: "#F2F2F2"
                    }}
                >
                    <View style={{flex: 1}}>
                        <Text style={[styles.text]}>
                        {this.props.destination.title}
                        </Text>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxDefault:{
        height: 175,
        paddingBottom: 5
    },
    imageBackground:{
        height: '100%',
        width: '100%',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    text:{
        fontSize: 33,
        paddingTop: 18,
        paddingLeft: 20,
        color: '#FFF', 
        paddingBottom: 18,
        textShadowColor: "#000", 
        textShadowRadius: 23, 
        textShadowOffset: {height: 2, width: 1}
    }
});