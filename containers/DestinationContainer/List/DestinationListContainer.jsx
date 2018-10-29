import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, ListView, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import DestinationBox from '../../../components/DestinationBoxComponent'

import BackLeft from '../../../components/BackLeftComponent'

import Div from '../../../layouts/default';

import axios from 'axios';

class DestinationList extends Component {
  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds,
      items: {},
      loading: true
    };
  }

  updateDataSource(data){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  componentDidMount(){
    axios.get('http://columbiaapp.eviajes.online/api/destinations')
    .then(response => {
        response.data.unshift({
          id: 2,
          title: 'Info SUBE',
          image1: 'http://municipiosarmiento.gob.ar/wp-content/uploads/2017/04/FACESUBE-01-800x445.jpg',
          url: 'http://eviajes.online/columbiaAPP/Info_APP_Sura.pdf',
          parseado: true
        });

        this.setState({
          items: response.data,
          loading: false
        }, () => {
          this.updateDataSource(this.state.items);
        });
    });
  }

  handlePress(item){
    if(item.url==undefined){
      this.props.navigation.navigate('DestinationDetail', { item: item });
    }
    else{
      Linking.openURL(item.url)
    }
  }

  render() {
    return (
      <Div name="Destinos" icon="wpforms" loading={this.state.loading}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={ (item) => {
            return (
              <TouchableOpacity onPress={ () => this.handlePress(item) }>
                <DestinationBox destination={item}/>
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

export default connect()(DestinationList);