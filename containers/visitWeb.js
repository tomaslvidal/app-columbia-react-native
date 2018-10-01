import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import {Scene,Router} from 'react-native-router-flux';

export default class visitWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={[ styles.row1, styles.generalStyle ]}>
          <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://www.flyfamilyfly.com/wp-content/uploads/2016/05/prudential-boston-view-1.jpg' }}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                Destinos
              </Text>
            </View>
          </ImageBackground>
        </View>
        
        <View style={[styles.row2, styles.generalStyle]}>
          <ImageBackground style={ styles.imageBackground } source={{uri: 'http://pixales.net/images/Talento.jpg'}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={[ styles.text ,{ textAlign: 'left', paddingLeft: 22, fontSize: 25} ]}>
                Vouchers
              </Text>
            </View>
          </ImageBackground>
        </View>

        
        <View style={[styles.row3, styles.generalStyle]}>
          <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://k50.kn3.net/084F07007.jpg' }}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={[ styles.text , { textAlign: 'right', paddingRight: 15, fontSize: 25} ]}>
                Encuestas
              </Text>
            </View>
          </ImageBackground>
        </View>
        
        // Columna 4
        <View style={[styles.row4, styles.generalStyle]}>
          <View style={{ flexDirection: 'column', flex: 1, marginRight: 2 }}>
              <View style={[styles.onlyColumn4, {flex: 3, backgroundColor: '#00b8d4', marginBottom: 2}]}>
                <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: '0px'}] }>
                  Contacto1
                </Text>
              </View>
            
              <View style={[styles.onlyColumn4 , { flex: 1, backgroundColor: '#004588', marginTop: 2}]}>
                <Text style={[ styles.text , { textAlign: 'center', fontSize: 15, paddingBottom: '0px!important'} ]}>
                  Visitar Sitio Web
                </Text>
              </View>
          </View>
          
          <View style={{ flexDirection: 'column', flex: 1, marginLeft: 2 }}>
              <View style={[styles.onlyColumn4 , { flex: 1, backgroundColor: '#038ec7'} ]}>
                <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: '0px' }]}>
                  Formulario de Reclamos
                </Text>
              </View>
          </View>
        </View>
        
        <View style={[styles.row5, styles.generalStyle]}>
          <Image source={{ uri: 'https://codifiedlondon.blob.core.windows.net/storage/2016/02/reactive-nativingitup.png.800x600_q96.png' }} style={ styles.imagenColumn5 }>
          </Image>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageBackground:{
    height: '100%',
    width: '100%'
  },
  imagenColumn5:{
    flex: 1,
    width:'100%',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  text: {
    color: '#FFF', 
    paddingBottom: 18, 
    textShadowColor: "#000", 
    textShadowRadius: 1, 
    textShadowOffset: { height: 1, width: -0 }
  },
  generalStyle:{
    alignSelf: 'stretch',
    borderRadius: '5px', 
    borderWidth: '2.5px', 
    borderColor: 'white',
    margin: 1
  },
  row1 : {
    flex: 4
  },
  row2:{
    flex: 4, 
  },
  row3:{
    flex: 2, 
  },
  row4:{
    flex: 3, 
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row5:{
    flex: 1, 
    padding: 0
  },
  onlyColumn4:{
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#038ec7', 
    flexWrap: 'wrap', 
    justifyContent:'center'
  }
});

