import React, {Component} from 'react';

import {View, ListView, TouchableOpacity, StyleSheet, Linking} from 'react-native';

import DestinationBox from '../components/DestinationBox.js'

import BackLeft from '../components/BackLeft.js'

import Div from '../layouts/default';

export default class DestinationList extends Component {
  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds,
      artists: null
    }
  }

  updateDataSource(data){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  componentDidMount(){
    this.setState({
      artists: [
      {
        id: 1,
        name: 'Buenos Aires',
        img: 'https://images2.listindiario.com/imagen/2016/12/28/448/448427/680x460/201612280055381/argentina-crea-dos-ministerios-de-economia.jpeg'
      },
      {
        id: 2,
        name: 'Info SUBE',
        img: 'http://municipiosarmiento.gob.ar/wp-content/uploads/2017/04/FACESUBE-01-800x445.jpg',
        url: 'http://eviajes.online/columbiaAPP/Info_APP_Sura.pdf'
      }
      ]}, () => {
        this.updateDataSource(this.state.artists)
      }
    );
  }

  handlePress(destination){
    if(destination.url==undefined){
      this.props.navigation.navigate('DestinationDetail', { destination: destination });
    }
    else{
      Linking.openURL(destination.url)
    }
  }

  render() {
    return (
      <Div name="Destinos" icon="wpforms">
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(destination) => {
            return (
              <TouchableOpacity onPress={() => this.handlePress(destination)}>
                <DestinationBox destination={destination}/>
              </TouchableOpacity>
            )
          }}
        />
      </Div>
    );
  }
}

const styles = StyleSheet.create({

});