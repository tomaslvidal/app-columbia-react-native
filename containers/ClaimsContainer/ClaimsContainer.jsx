import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, Linking, Alert } from 'react-native';

import Div from '../../layouts/default';

import moment from 'moment';

import * as t from 'tcomb-form-native';

import axios from 'axios';

const Form = t.form.Form;

export default class ClaimsContainer extends Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      loading: true,
      types: null,
      value: {},
      options: {}
    };
  }

  componentDidMount(){
    axios.get('http://icolumbia.apteknet.com/services/getMotivos.php')
    .then(response => {
      let data = response.data, reasons = {};

      for (var i = 0; i < data.length; i++) {
        if(data[i].motivo!=null){
          reasons[data[i].idMotivo] = data[i].motivo;
        }
      }

      axios.get('http://icolumbia.apteknet.com/services/getVendedores.php')
      .then(response => {
        data = response.data;

        let sellers = {};

        for (var i = 0; i < data.length; i++) {
          sellers[data[i].idVendedor] = data[i].nombre+" "+data[i].apellido;
        }

        this.setState({
          types: t.struct({
            nombre: t.String,
            apellido: t.String,
            motivo: t.enums(reasons),
            descripcionDelReclamo: t.String,
            prestadorDelServicio: t.String,
            vendedor: t.enums(sellers),
            fechaDelReclamo: t.String
          }),
          value: {
            fechaDelReclamo: new moment().format("DD MMM YYYY")
          },
          options: {
            fields: {
              fechaDelReclamo: {
                editable: false
              }
            }
          }
        }, () => {
          this.setState({
            loading: false
          });
        });
      });
    });
  }

  onPress(){
    let data = this.refs.form.getValue();
  
    if(data){
      this.setState({
        loading: true
      });

      axios.post('http://icolumbia.apteknet.com/services/putReclamos.php', JSON.stringify(data))
      .then(response => {
        setTimeout(() => {
          this.setState({
            loading: false
          });

          Alert.alert('Mensaje', 'Reclamo enviado', [
            {text: 'OK'}
          ]);
        }, 1500);
      })
      .catch( () => {
        setTimeout(() => {
          this.setState({
            loading: false
          });

          Alert.alert('Mensaje', 'No se ha podido enviar', [
            {text: 'OK'}
          ]);
        }, 1500);
      });
    }
  }

  render(){
    return(
      <Div name="Formulario de Reclamos" icon="wpforms" loading={this.state.loading}>
      {
      this.state.loading ? null :
      (function(this_, styles_){
        const return_ =(
          <View>
            <Form ref="form" type={this_.state.types} options={this_.state.options} value={this_.state.value} />

            <TouchableHighlight style={styles_.button} onPress={ (e) => this_.onPress(e) } underlayColor='#99d9f4'>
              <Text style={styles_.buttonText}>Enviar</Text>
            </TouchableHighlight>
          </View>
        );

        return return_;
      })(this, styles)
      }
      </Div>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});