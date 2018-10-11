import React, { Component } from 'react';

import {Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity, TouchableHighlight, Linking} from 'react-native';

import {Scene,Router, Actions} from 'react-native-router-flux';

import CollapsibleList from 'react-native-collapsible-list'

import Div from './ModelContainer/index.js';

import Panel from '../components/PanelComponent.js';

import * as t from 'tcomb-form-native'

import * as tvalidation from 'tcomb-validation';

const Form = t.form.Form, validate = tvalidation.validate;

const Person = t.struct({
  '¿Lorem ipsum dolor sit amet?': t.String,
  '¿Lorem ipsum dolor sit amet2?': t.String,
  '¿Lorem ipsum dolor sit amet3?': t.String,
  '¿Lorem ipsum dolor sit amet4?': t.String,
  '¿Lorem ipsum dolor sit amet5?': t.String,
  '¿Lorem ipsum dolor sit amet6?': t.String,
});

const myFormatFunction = (format,date) => {
  return moment(date).format(format);
}

const options={
  fields:{
  }
};

export default class PollsView extends Component{
  constructor(props){
    super(props);
    
    this.state={
    };
  }

  onPress(){
    let value = this.refs.form.getValue();
  
    if(value){
      console.log(value);
    }
  }

  render(){
    return(
      <Div name="Encuesta" icon="bar-chart" container={false}>
        <Panel title="Encuesta de calidad 1">
          <Form ref="form" type={Person} options={options}/>

          <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor={attributes.underlayColor}>
            <Text style={[styles.buttonText, {}]}>Enviar</Text>
          </TouchableHighlight>
        </Panel>

        <Panel title="Encuesta de calidad 2">
          <Form ref="form" type={Person} options={options}/>

          <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor={attributes.underlayColor}>
            <Text style={[styles.buttonText, {}]}>Enviar</Text>
          </TouchableHighlight>
        </Panel>
      </Div>
    );
  }
}

const attributes = {
  underlayColor: '#99d9f4'
};

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