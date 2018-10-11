import React, { Component } from 'react';

import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking, Plataform, StatusBar} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#252525'}}>
        <StatusBar backgroundColor='#2CAEE6' barStyle='light-content' />

        <View style={[styles.row1, {flex: 4, padding: 1}]}>
            <TouchableOpacity onPress={() => Actions.VoucherView()}>
              <ImageBackground style={ styles.imageBackground } source={require('./img/vouchers.jpg')}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                    Vouchers
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Actions.DestinationList()}>
              <ImageBackground style={ styles.imageBackground } source={require('./img/destinos.jpg')}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                    Destinos
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar/landing/3/Web-Check-in/')}>
            <ImageBackground style={ styles.imageBackground } source={require('./img/checkin.jpg')}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                  Check In
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Actions.PollsView()}>
            <ImageBackground style={ styles.imageBackground } source={require('./img/encuestas.jpg')}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                  Encuesta
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>

          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar')}>
            <ImageBackground style={ styles.imageBackground } source={require('./img/web.jpg')}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                  Web
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Actions.ClaimsView()}>
              <ImageBackground style={ styles.imageBackground } source={require('./img/reclamos.jpg')}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                    Reclamo
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={[styles.row1, {padding: 1}]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar/contacto.php')}>
              <ImageBackground style={ styles.imageBackground } source={require('./img/contacto.jpg')}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[ styles.text , { textAlign: 'right', paddingRight: 22, fontSize: 25 } ]}>
                    Contacto
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer1}>
          <Image source={require('./img/footer.jpg')} style={styles.footerImage} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row1:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  footer1:{
    height: 85, 
    marginTop: 'auto', 
    backgroundColor: '#48BBEC',
    borderRadius: 1
  },
  footerImage:{
    flex: 1,
    alignSelf: 'center',
    justifyContent:'center',
    width:'100%',
    height: '100%',
    paddingTop: 10,
    marginTop: 'auto',
    marginBottom:'auto'
  },
  container : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageBackground: {
    height: '100%',
    width: '100%'
  },
  imagenColumn5: {
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
  generalStyle: {
    alignSelf: 'stretch',
    borderRadius: 5, 
    borderWidth: 2.5, 
    borderColor: 'white',
    margin: 1
  },
  row1: {
    flex: 4
  },
  row2: {
    flex: 4, 
  },
  row3: {
    flex: 2, 
  },
  row4: {
    flex: 3, 
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row5: {
    flex: 2, 
    padding: 0,
    maxHeight: 80
  },
  onlyColumn4: {
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#038ec7', 
    flexWrap: 'wrap', 
    justifyContent:'center'
  }
});