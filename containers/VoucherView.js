import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import BackLeft from '../components/BackLeft'
import Footer from '../components/Footer'
import moment from 'moment';
import * as t from 'tcomb-form-native'
var Form = t.form.Form;

// here we are: define your domain model

var motivos = t.enums({
  1:"Demoras en las respuestas de los vendedores",
  2:"Errores en el tarifario",
  3:"Precio de un servicio distinto al acordado con los vendedores",
  4:"Problemas con el hotel",
  5:"Problemas con el traslado",
  6:"Problemas con la línea aérea",
  7:"Problemas con las excursiones",
  8:"Servicio cancelado previamente y facturado",
  9:"Problemas con compañías de cruceros"
});

var vendedores = t.enums({
  1: "Gomez",
  2: "Perez",
  3: "Silva"
})

var Person = t.struct({
  nombre: t.String,              // a required string
  apellido: t.maybe(t.String),  // an optional string
  motivo: motivos ,               // a required number
  descripcionDelReclamo: t.String,
  prestadorDelServicio: t.String,
  vendedor: vendedores,
  fechaDelReclamo: t.Date
});

let myFormatFunction = (format,date) =>{
    return moment(date).format(format);
}
var fechaDelReclamo = {
    label: 'Fecha del reclamo',
    mode:'date',
    config:{
        format:(date) => myFormatFunction("DD MMM YYYY",date)
    }
};
let options = {
    fields: {
       "fechaDelReclamo":fechaDelReclamo
    }
};

export default class VoucherView extends Component {
  
  constructor(props, context) {
    super(props, context)
      this.state = {
        form: {
          Nombre: 'Marco Polo',
          Apellido: false,
        }
      }
  }
  
  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }
  
  onPress(){
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF' , flexDirection: 'column', justifyContent: 'flex-start'}}>
        <BackLeft/>
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'space-between', padding: 8}}>
              <Form
                ref="form"
                type={Person}
                options={options}
              />
              <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableHighlight>
          </View>
          <Footer/>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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

