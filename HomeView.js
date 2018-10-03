import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking, Plataform, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      
        <View style={[ styles.row1, styles.generalStyle ]}>
          <TouchableOpacity onPress={() => Actions.DestinationList()}>
            <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://www.flyfamilyfly.com/wp-content/uploads/2016/05/prudential-boston-view-1.jpg' }}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                  Destinos
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.row2, styles.generalStyle]}>
          <TouchableOpacity onPress={() => Actions.VoucherView()}>
            <ImageBackground style={ styles.imageBackground } source={{uri: 'http://pixales.net/images/Talento.jpg'}}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text ,{ textAlign: 'left', paddingLeft: 22, fontSize: 25} ]}>
                  Vouchers
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        
        <View style={[styles.row3, styles.generalStyle]}>
          <TouchableOpacity>
            <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://k50.kn3.net/084F07007.jpg' }}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 15, fontSize: 25} ]}>
                  Encuestas
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        

        <View style={[styles.row4, styles.generalStyle]}>
          <View style={{ flexDirection: 'column', flex: 1, marginRight: 2 }}>
            <View style={[styles.onlyColumn4, {flex: 3, backgroundColor: '#00b8d4', marginBottom: 2}]}>
              <TouchableOpacity onPress={() => Linking.openURL('http://www.columbiaviajes.com.ar/contacto.php')}>
                <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: 0}] }>
                  Contacto
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.onlyColumn4 , { flex: 1, backgroundColor: '#004588', marginTop: 2}]}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar')}>
                <Text style={[{color: 'white', textAlign: 'center', fontSize: 15, paddingBottom: 0} ]}>
                  Visitar Sitio Web
                </Text>
              </TouchableOpacity>
            </View> 
          </View>
          
          <View style={(styles.onlyColumn4, [{ flexDirection: 'column', flex: 1, marginLeft: 2, backgroundColor: '#038ec7' }])}>
                <TouchableOpacity style={{justifyContent: 'center', alignSelf: 'center'}} onPress={() => Actions.ClaimsView()}>
                  <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: 0 }]}>
                    Formulario de Reclamos
                  </Text>
                </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  text: {
    color: '#FFF', 
    paddingBottom: 18, 
    textShadowColor: "#000", 
    textShadowRadius: 7, 
    textShadowOffset: { height: 2, width: -0 }
  },
  generalStyle:{
    alignSelf: 'stretch',
    borderRadius: 5, 
    borderWidth: 2.5, 
    borderColor: 'white',
    margin: 1
  },
  row1:{
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
    flex: 2, 
    padding: 0,
    maxHeight: 80
  },
  onlyColumn4:{
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#038ec7', 
    flexWrap: 'wrap', 
    justifyContent:'center'
  }
});

/*

import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {

  render() {
    
    return (
      <View style={styles.container}>
      
        <View style={[ styles.row1, styles.generalStyle ]}>
          <TouchableOpacity onPress={() => Actions.DestinationList()}>
            <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://www.flyfamilyfly.com/wp-content/uploads/2016/05/prudential-boston-view-1.jpg' }}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                  Destinos
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.row2, styles.generalStyle]}>
          <TouchableOpacity onPress={() => Actions.VoucherView()}>
            <ImageBackground style={ styles.imageBackground } source={{uri: 'http://pixales.net/images/Talento.jpg'}}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text ,{ textAlign: 'left', paddingLeft: 22, fontSize: 25} ]}>
                  Vouchers
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        
        <View style={[styles.row3, styles.generalStyle]}>
          <TouchableOpacity>
            <ImageBackground style={ styles.imageBackground } source={{ uri: 'https://k50.kn3.net/084F07007.jpg' }}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 15, fontSize: 25} ]}>
                  Encuestas
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        
        // Columna 4
        <View style={[styles.row4, styles.generalStyle]}>
          <View style={{ flexDirection: 'column', flex: 1, marginRight: 2 }}>
          
              
            <View style={[styles.onlyColumn4, {flex: 3, backgroundColor: '#00b8d4', marginBottom: 2}]}>
              <TouchableOpacity onPress={() => Linking.openURL('http://www.columbiaviajes.com.ar/contacto.php')}>
                <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: '0px'}] }>
                  Contacto
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.onlyColumn4 , { flex: 1, backgroundColor: '#004588', marginTop: 2}]}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar')}>
                <Text style={[{color: 'white', textAlign: 'center', fontSize: 15, paddingBottom: '0px!important'} ]}>
                  Visitar Sitio Web
                </Text>
              </TouchableOpacity>
            </View>
              
          </View>
          
          <View style={(styles.onlyColumn4, [{ flexDirection: 'column', flex: 1, marginLeft: 2, backgroundColor: '#038ec7' }])}>
                <TouchableOpacity style={{justifyContent: 'center', alignSelf: 'center'}} onPress={() => Actions.ClaimsView()}>
                  <Text style={[ styles.text , { textAlign: 'center', fontSize: 25, paddingBottom: '0px' }]}>
                    Formulario de Reclamos
                  </Text>
                </TouchableOpacity>
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
    paddingTop: 330,
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
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  text: {
    color: '#FFF', 
    paddingBottom: 18, 
    textShadowColor: "#000", 
    textShadowRadius: 7, 
    textShadowOffset: { height: 2, width: -0 }
  },
  generalStyle:{
    alignSelf: 'stretch',
    borderRadius: 5, 
    borderWidth: , 
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

*/