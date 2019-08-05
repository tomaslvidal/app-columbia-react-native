import React, { Component } from 'react';

import { connect } from 'react-redux';

import { isSignedIn } from 'ColumbiaViajes3/auth';

import { Text, View, Alert, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity, TouchableHighlight, Linking } from 'react-native';

import CollapsibleList from 'react-native-collapsible-list'

import Div from 'ColumbiaViajes3/layouts/default';

import Panel from 'ColumbiaViajes3/components/PanelComponent';

import MultiSelect from 'ColumbiaViajes3/components/MultiSelectComponent';

import * as t from 'tcomb-form-native'

import axios from 'axios';

import { merge } from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faPollH, faTimes } from '@fortawesome/free-solid-svg-icons';

import { withNavigation } from 'react-navigation';

import { setSurveys } from 'ColumbiaViajes3/actions';

library.add(faPollH, faTimes);

const Form = t.form.Form;

let stylesheet = merge(Form.stylesheet, {
    controlLabel: {
        normal: {
            color: '#343434',
            fontSize: 15,
            fontWeight: 'bold'
        },
        error: {
            color: '#E44545'
        }
    },
    textbox: {
        normal: {
            color: 'black'
        }
    },
    helpBlock: {
        error: {
            color: '#E44545'
        }
    },
    select: {}
});

class SurveysContainer extends Component{
    constructor(props){
        super(props);

        this.onPress = this.onPress.bind(this);

        this.onRefresh = this.onRefresh.bind(this);

        this.fetchSurveys = this.fetchSurveys.bind(this);
    }

    async onRefresh(){
        await this.fetchSurveys(true);
    }

    async fetchSurveys(is_refreshing = false){
        this.props.setSurveys({
            is_refreshing
        })
        .then(async () => {
            await axios({
                url: 'https://columbiaapp.eviajes.online/api/surveys/user',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.props.access_token}`
                }
            })
            .then(response => {
                let items = response.data, forms = [];

                for(i = 0; i < items.length; i++){
                    forms[i] = {
                        id: items[i].id,
                        name: items[i].name,
                        types: {},
                        options: {
                            fields: {}
                        }
                    }

                    for (var d = 0; d < items[i].survey_fields.length; d++) {
                        let item_options = {};

                        if(items[i].survey_fields[d].type.toString() == "2"){
                            for (var f = 0; f < items[i].survey_fields[d].survey_options.length; f++) {
                                item_options[items[i].survey_fields[d].survey_options[f].id] = items[i].survey_fields[d].survey_options[f].value;
                            }

                            forms[i].options.fields[items[i].survey_fields[d].id] = {
                                label: items[i].survey_fields[d].name,
                                stylesheet: stylesheet,
                                transformer: {
                                    format: value => {
                                        return(typeof value !== "undefined" ? value : '');
                                    },
                                    parse: value => {
                                        return value || null;
                                    }
                                },
                            };

                            forms[i].types[items[i].survey_fields[d].id] = t.enums(item_options);
                        }
                        else if(items[i].survey_fields[d].type.toString() == "1"){
                            forms[i].options.fields[items[i].survey_fields[d].id] = {
                                label: items[i].survey_fields[d].name,
                                stylesheet: stylesheet,
                                factory: MultiSelect,
                                options: [],
                            };

                            for (var f = 0; f < items[i].survey_fields[d].survey_options.length; f++) {
                                forms[i].options.fields[items[i].survey_fields[d].id].options.push({
                                    value: items[i].survey_fields[d].survey_options[f].id,
                                    text: items[i].survey_fields[d].survey_options[f].value
                                });
                            }

                            forms[i].types[items[i].survey_fields[d].id] = t.list(t.String);
                        }
                        else if(items[i].survey_fields[d].type.toString() == "3"){
                            forms[i].options.fields[items[i].survey_fields[d].id] = {
                                label: items[i].survey_fields[d].name,
                                stylesheet: stylesheet,
                            };

                            forms[i].types[items[i].survey_fields[d].id] = t.String;
                        }
                    }

                    forms[i].types = t.struct(forms[i].types);
                }

                this.props.setSurveys({
                    items: forms,
                    loading: false,
                    is_refreshing: false
                });
            })
            .catch(e => {
                this.props.navigation.replace('Home');
                
                this.props.navigation.navigate('SignIn_', { routeName: this.props.navigation.state.routeName });
            });
        });
    }

    componentDidMount(){
        isSignedIn()
        .then(res => {
            if(!res){
                this.props.navigation.replace('Home');
                
                this.props.navigation.navigate('SignIn_', { routeName: this.props.navigation.state.routeName });
            }
            else{
                if(this.props.surveys.items.length === 0){
                    this.fetchSurveys();
                }
            }
        });
    }

    onPress(id){
        let data = this[`form${id}`].getValue();

        if(data){
            this.props.setSurveys({
                loading: true
            })
            .then(() => {
                axios({
                    url: 'https://columbiaapp.eviajes.online/api/surveysmade',
                    method: 'POST',
                    data: {
                        ...data,
                        id: id
                    },
                    headers: {
                        Authorization: `Bearer ${this.props.access_token}`
                    }
                })
                .then(async res => {
                    this.onRefresh()
                    .then(() => {
                        Alert.alert('Mensaje', 'Encuesta realizada', [
                            {text: 'OK'}
                        ]);
                    })
                })
                .catch(e => {
                    Alert.alert('Mensaje', 'No se ha podido enviar la encuesta', [
                        {text: 'OK'}
                    ]);

                    this.props.setSurveys({
                        loading: false
                    });
                });
            });
        }
    }

    render(){
        return(
            <Div onRefresh={ this.onRefresh } is_refreshing={ this.props.surveys.is_refreshing } name="Encuestas" icon='bar-chart' container={ false } loading={ this.props.surveys.loading }>
            {
                this.props.surveys.items.length > 0 ?
                    this.props.surveys.items.map((item, key) => {
                        return(
                            <Panel key={ key } index={ key } title={ item.name }>
                                <Form 
                                    key={ key}  
                                    ref={r => this[`form${item.id}`] = r} 
                                    type={ item.types } 
                                    options={ item.options }
                                />

                                <TouchableHighlight 
                                    style={ styles.button }
                                    onPress={() => this.onPress(item.id)}
                                    underlayColor={ attributes.underlayColor }
                                >
                                    <Text
                                        style={ [styles.buttonText, {}] }
                                    >
                                        Enviar
                                    </Text>
                                </TouchableHighlight>
                            </Panel>
                        );
                    })
                :
                    (
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesomeIcon 
                                size={37} 
                                color={"#2BB8DD"} 
                                icon={['fas', 'poll-h']}
                            />

                            <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                                No hay encuestas para realizar, intente mas tarde
                            </Text>
                        </View>
                    )
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
        surveys: state.surveys,
        access_token: state.account.oauth.access_token
    };
};

export default connect(mapStateToProps, { setSurveys })(withNavigation(SurveysContainer));