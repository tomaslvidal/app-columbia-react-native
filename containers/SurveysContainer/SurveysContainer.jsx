import React, { Component } from 'react';

import { connect } from 'react-redux';

import { isSignedIn } from '../../auth';

import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity, TouchableHighlight, Linking } from 'react-native';

import CollapsibleList from 'react-native-collapsible-list'

import Div from '../../layouts/default';

import Panel from '../../components/PanelComponent';

import MultiSelect from '../../components/MultiSelectComponent';

import * as t from 'tcomb-form-native'

import axios from 'axios';

import _ from 'lodash';

const Form = t.form.Form;

const stylesheet = _.cloneDeep(Form.stylesheet);

stylesheet.controlLabel.normal = {
  color: '#343434',
  fontSize: 15,
  fontWeight: 'bold',
}

stylesheet.select.normal = {
  color: undefined,
}

stylesheet.textbox.normal.color = 'black';

const colorError = '#E44545';

stylesheet.controlLabel.error.color = colorError;

stylesheet.helpBlock.error.color = colorError;

class SurveysContainer extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      run: false,
    };

    this.onPress = this.onPress.bind(this);
  }

  componentWillMount(){
    setTimeout( () => {
      isSignedIn()
      .then(res => {
        if(res==false){
          this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_', {routeName: this.props.navigation.state.routeName});
        }
        else{
          axios.get('http://columbiaapp.eviajes.online/api/surveys', { headers: {"Authorization" : `Bearer ${this.props.access_token}`} })
          .then(response => {
            let items = response.data, forms = [];

            for(i = 0; i < items.length; i++){
              forms[i] = {
                id: items[i].id,
                name: items[i].name,
                types: {},
                options: {
                  fields: {

                  }
                }
              }

              for (var d = 0; d < items[i].survey_fields.length; d++) {
                let item_options = {};

                if(items[i].survey_fields[d].type.toString() == "2"){
                  for (var f = 0; f < items[i].survey_fields[d].survey_options.length; f++) {
                    item_options[items[i].survey_fields[d].survey_options[f].id] = items[i].survey_fields[d].survey_options[f].value;
                  }

                  forms[i].options.fields[items[i].survey_fields[d].name] = {
                    label: items[i].survey_fields[d].name,
                    stylesheet: stylesheet,
                  };

                  forms[i].types[items[i].survey_fields[d].name] = t.enums(item_options);
                }
                else if(items[i].survey_fields[d].type.toString() == "1"){
                  forms[i].options.fields[items[i].survey_fields[d].name] = {
                    label: items[i].survey_fields[d].name,
                    stylesheet: stylesheet,
                    factory: MultiSelect,
                    options: [],
                  };

                  for (var f = 0; f < items[i].survey_fields[d].survey_options.length; f++) {
                    forms[i].options.fields[items[i].survey_fields[d].name].options.push({
                      value: items[i].survey_fields[d].survey_options[f].id,
                      text: items[i].survey_fields[d].survey_options[f].value
                    });
                  }

                  forms[i].types[items[i].survey_fields[d].name] = t.list(t.String);
                }
                else if(items[i].survey_fields[d].type.toString() == "3"){
                  forms[i].options.fields[items[i].survey_fields[d].name] = {
                    label: items[i].survey_fields[d].name,
                    stylesheet: stylesheet,
                  };

                  forms[i].types[items[i].survey_fields[d].name] = t.String;
                }
              }

              forms[i].types = t.struct(forms[i].types);
            }

            this.setState({
              forms: forms,
              run: true
            });
          })
          .catch(res => {
            this.props.navigation.replace('Home'); this.props.navigation.navigate('SignIn_', {routeName: this.props.navigation.state.routeName});
          });
      }

    });

    }, 300);
  }

  onPress(id){
    let value = this.refs["form"+id.toString()].getValue();

    if(value){
      console.log(value);
    }
  }

  render(){
    return(
      <Div name="Encuestas" icon='bar-chart' container={false} loading={!this.state.run}>
      {
      !this.state.run ? null :
      this.state.forms.map( (item, key) => {
        return (
          <Panel key={key} title={item.name}>
            <Form key={key+"f"} ref={"form"+item.id} type={item.types} options={item.options}/>

            <TouchableHighlight key={key+"th"} style={styles.button} onPress={() => this.onPress(item.id)} underlayColor={attributes.underlayColor}>
              <Text key={key+"t"} style={[styles.buttonText, {}]}>Enviar</Text>
            </TouchableHighlight>
          </Panel>
        );
      })
      }
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

const mapStateToProps = state => {
  return {
    access_token: state.account.oauth.access_token
  };
};

export default connect(mapStateToProps)(SurveysContainer);