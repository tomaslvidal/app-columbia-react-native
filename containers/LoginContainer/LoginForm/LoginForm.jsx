import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import axios from 'axios';

import { PulseIndicator } from 'react-native-indicators';

import t from 'tcomb-form-native';

import _ from 'lodash';

import { withNavigation } from 'react-navigation';

import { onSignIn } from "../../../auth";

import { setLoguedAccount } from "../../../actions";

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.controlLabel.normal.color = '#545454';

stylesheet.textbox.normal.color = '#626262';

stylesheet.textbox.error.color = '#6F6F6F';

const colorError = '#E44545';

stylesheet.textbox.error.borderColor = colorError;

stylesheet.controlLabel.error.color = colorError;

stylesheet.helpBlock.error.color = colorError;

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  contraseña
  : t.String,
});

const options = {
  fields: {
    email: {
      stylesheet: stylesheet,
      error: 'Ingresar email'
    },
    contraseña: {
      stylesheet: stylesheet,
      error: 'Ingresar contraseña',
      secureTextEntry : true
    },
  },
};

class LoginForm extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      form: {},
      loading: false
    }
  }

  enterAccount() {
    const user = this.formRef.getValue();

    if(user!=undefined && user.email!=undefined && user.contraseña!=undefined){
      this.setState({
        loading: true
      });

      let data = {
        client_id: 2,
        client_secret: 'BXFEgz2HtEm2Im2awNgiF8sGmmbIojK2JsiLaYqi',
        grant_type: 'password',
        username: user.email,
        password: user.contraseña,
      };

      axios.post('http://columbiaapp.eviajes.online/oauth/token', data)
      .then(response => {
          let responseData = response.data;

          let now = Date.now();

          responseData.expires_in = responseData.expires_in + now;

          setTimeout(() => {
            this.setState({
              loading: false
            });

            this.props.navigation.replace('Home');

            this.props.navigation.navigate(this.props.navigation.state.params.routeName!=undefined ? this.props.navigation.state.params.routeName : 'Home');
          }, 500);

          this.props.onSetLoguedAccount({
            oauth: responseData
          });
      })
      .catch( () => {
        this.setState({
          loading: false
        });
      })
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.divPulseIndicator, {position: this.state.loading===true ? 'absolute' : null, display: this.state.loading==true ? 'flex' : 'none'}]}>
          <PulseIndicator size={85} color="#D8D8D8"/>
        </View>

        <View style={styles.form}>
          <Form ref={c => this.formRef = c} type={User} options={options}/>

          <TouchableOpacity style={styles.buttonContainer} onPress={ () => this.enterAccount() }>
            <Text style={styles.buttonText}>
              INGRESAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    divPulseIndicator:{
      flex: 1,
      justifyContent: 'center',
      alignItems : 'center',
      bottom: '45%',
      right: '38%'
    },
    form:{
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column', 
      justifyContent: 'center'
    },
    buttonContainer:{
      backgroundColor: '#2CAEE6',
      paddingVertical: 15,
      borderRadius: 5
    },
    buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
    }
});

const mapDispathToProps = dispath => {
  return {
    onSetLoguedAccount: item => {
      dispath(setLoguedAccount(item));
    }
  };
};

export default connect(null, mapDispathToProps)(withNavigation(LoginForm));