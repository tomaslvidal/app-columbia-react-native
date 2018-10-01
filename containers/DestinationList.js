import React, { Component } from 'react';
import {View, ListView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import DestinationBox from './DestinationBox.js'

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
    setTimeout( () => {
      
      this.setState({
        artists: [{
          id: 1,
          name: 'Buenos Aires',
          img: 'https://images2.listindiario.com/imagen/2016/12/28/448/448427/680x460/201612280055381/argentina-crea-dos-ministerios-de-economia.jpeg'
        },
        {
          id: 2,
          name: 'Santiago de Chile',
          img: 'https://www.copaair.com/promotions/airtrafix-pics/SCL.jpg'
        },
        {
          id: 3,
          name: 'Montevideo',
          img: 'http://checkinprice.com/wp-content/uploads/2017/07/where-to-stay-in-montevideo.jpg'
        },
        {
          id: 4,
          name: 'España',
          img: 'https://www.ecestaticos.com/imagestatic/clipping/749/37a/74937a71482f58817a5025e47e087025/el-atentado-de-barcelona-aleja-a-espana-de-convertirse-en-el-lider-mundial-del-turismo.jpg?mtime=1503071682'
        },
        {
          id: 5,
          name: 'Estados Unidos',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hZemgdZqRABJrsWBgM_SpmseC_7F9xC7_MT7coT3JsCclVWU'
        }]
      }, () => {
        this.updateDataSource(this.state.artists)
      });
      
    }, 500);
    
    
    
  }

  handlePress(destination){
    Actions.DestinationDetail({ destination: destination })
  }

  render() {

    return (
      <View style={{flex: 1, flexDirection: 'column', paddingTop: 30 }}>
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
      </View>
    );

  }
}

/*
const styles = StyleSheet.create({

});*/