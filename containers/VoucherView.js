import React, {Component} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Div from '../layouts/default';

import FileComponent from '../components/FileComponent.js';

import { isSignedIn } from '../auth';

export default class VoucherView extends Component{
  constructor(props){
    super(props);

    this.state = {
      run: false
    };
  }

  componentWillMount(){
    isSignedIn()
    .then(res => {
      if(res==false){
        this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_');
      }
      else{
        this.setState({
          run: true
        });
      }
    })
    .catch(res => {
      this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_');
    });
  }

  render(){
    return(
      <Div name="Voucher e Initerarios" icon='bar-chart'>
      {
        !this.state.run ? null :
        (function(){
          let contentFiles = [];

          // for(i = 0; i < 1; i++){
            contentFiles.push(<FileComponent key={1} url="http://eviajes.online/columbiaAPP/Reserva_de_viaje_10_octubre.pdf" name="Reserva viajes 10 de octubre" style={styles.fileComponent}/>);

            {/*contentFiles.push(<FileComponent key={2} url="http://eviajes.online/columbiaAPP/Info_APP_Sura.pdf" name="Info SUBE" style={styles.fileComponent}/>);*/}
          // }

          return contentFiles;
        })()
      }
      </Div>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
    color: 'white'
  },
  fileComponent: {
    marginTop: 6,
    marginBottom: 6
  }
});