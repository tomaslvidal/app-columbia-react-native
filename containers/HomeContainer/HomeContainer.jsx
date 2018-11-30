import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking, StatusBar, Alert } from 'react-native';

import axios from 'axios';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      version: "4.0"
    };
  }

  componentWillMount(){
    axios.get('http://icolumbia.apteknet.com/services/getUpdate.php')
    .then(response => {
      let data = response.data, reasons = {}, url = data.url ? data.url : 'http://www.columbiaviajes.com.ar/descarga/columbiaviajes.apk';

      // http://icolumbia.apteknet.com/services/setUpdate.php?estado=1&version=4.0

      if(data.estado=="1" && (this.state.version.toString()!=data.version)){
        Alert.alert('Mensaje', 'Hay una nueva actualización, ¿quieres descargarla?', [
            {text: 'No', onPress: () => null},
            {text: 'Actualizar', onPress: () => Linking.openURL(url)}
        ]);
      }
    });
  }

  render(){
    const img_path = '../../img/';

    return(
      <View style={styles.body}>
        <StatusBar backgroundColor={attributes.statusBarColor} />

        <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Voucher')}>
              <ImageBackground style={styles.imageBackground} source={require(img_path+'vouchers.jpg')}>
                <View style={[styles.viewText]}>
                  <Text style={[styles.text]}>
                    Mis Viajes
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DestinationList')}>
              <ImageBackground style={styles.imageBackground} source={require(img_path+'destinos.jpg')}>
                <View style={[styles.viewText]}>
                  <Text style={[styles.text]}>
                    Destinos
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar/landing/3/Web-Check-in/')}>
            <ImageBackground style={styles.imageBackground} source={require(img_path+'checkin.jpg')}>
              <View style={[styles.viewText]}>
                <Text style={[styles.text]}>
                  Check In
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Surveys')}>
            <ImageBackground style={styles.imageBackground} source={require(img_path+'encuestas.jpg')}>
              <View style={[styles.viewText]}>
                <Text style={[styles.text]}>
                  Encuesta
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>

          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar')}>
            <ImageBackground style={styles.imageBackground} source={require(img_path+'web.jpg')}>
              <View style={[styles.viewText]}>
                <Text style={[styles.text]}>
                  Web
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.row1, {flexDirection: 'row'}]}>
          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Claims')}>
              <ImageBackground style={styles.imageBackground} source={require(img_path+'reclamos.jpg')}>
                <View style={[styles.viewText]}>
                  <Text style={[styles.text]}>
                    Reclamo
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={[styles.row1, styles.separation]}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.columbiaviajes.com.ar/contacto.php')}>
              <ImageBackground style={styles.imageBackground} source={require(img_path+'contacto.jpg')}>
                <View style={[styles.viewText]}>
                  <Text style={[styles.text]}>
                    Contacto
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Image source={require(img_path+'footer.jpg')} style={styles.footerImage} />
        </View>
      </View>
    );
  }
}

const attributes = {
  statusBarColor : '#2CAEE6'
};

const styles = StyleSheet.create({
  body:{
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: '#252525'
  },
  row1: {
    flex: 1
  },
  separation: {
    padding: 1
  },
  footer: {
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
  imageBackground: {
    height: '100%',
    width: '100%'
  },
  viewText:{
    flex: 1, 
    justifyContent: 'flex-end'
  },
  text: {
    color: '#FFF', 
    paddingBottom: 18, 
    textShadowColor: "#000", 
    textShadowRadius: 7, 
    textShadowOffset: { height: 2, width: -0 },
    textAlign: 'right', 
    paddingRight: 22, 
    fontSize: 25
  }
});