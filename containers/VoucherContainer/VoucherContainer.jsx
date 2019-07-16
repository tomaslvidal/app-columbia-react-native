import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Div from '../../layouts/default';

import FileComponent from '../../components/FileComponent';

import { isSignedIn } from '../../auth';

import axios from 'axios';

class VoucherContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      run: false,
      items: []
    };
  }

  componentWillMount(){
    setTimeout( () => {
      isSignedIn()
      .then(res => {
        if(res==false){
          this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_', {routeName: this.props.navigation.state.routeName});
        }
        else{
          axios.get('http://columbiaapp.eviajes.online/api/vouchers/user', { headers: {"Authorization" : `Bearer ${this.props.access_token}`} })
          .then(response => {
              this.setState({
                items: response.data,
                run: true
              });
          });
        }
      })
      .catch(res => {
        this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_', {routeName: this.props.navigation.state.routeName});
      });
    }, 300);
  }

  render(){
    return(
      <Div name="Vouchers e Initerarios" icon='bar-chart' loading={!this.state.run}>
      {
        !this.state.run ? null :
        (function(items){
          let contentFiles = [];

          let url = "http://columbiaapp.eviajes.online/vouchers_m/download/";

          for(i = 0; i < items.length; i++){
            contentFiles.push(<FileComponent key={i} url={url+items[i].file_name} name={items[i].name} style={styles.fileComponent}/>);
          }

          return contentFiles;
        })(this.state.items)
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

const mapStateToProps = state => {
  return {
    access_token: state.account.oauth.access_token
  };
};

export default connect(mapStateToProps)(VoucherContainer);