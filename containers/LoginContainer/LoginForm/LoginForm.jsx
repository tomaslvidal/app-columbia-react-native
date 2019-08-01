import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import axios from 'axios';

import { PulseIndicator } from 'react-native-indicators';

import t from 'tcomb-form-native';

import { merge } from 'lodash';

import { withNavigation } from 'react-navigation';

import { onSignIn } from "ColumbiaViajes3/auth";

import { setLoguedAccount } from "ColumbiaViajes3/actions";

const Form = t.form.Form;

let stylesheet = merge(Form.stylesheet, {
    controlLabel: {
        normal: {
            color: '#545454'
        },
        error: {
            color: '#E44545'
        }
    },
    textbox: {
        normal: {
            color: '#626262'
        },
        error: {
            color: '#626262'
        }
    },
    helpBlock: {
        error: {
            color: '#E44545'
        }
    }
});

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                struct: t.struct({
                    email: t.String,
                    contraseña: t.String
                }),
                options: {
                    fields: {
                        email: {
                            stylesheet: stylesheet,
                            error: 'Ingresar email'
                        },
                        contraseña: {
                            stylesheet: stylesheet,
                            error: 'Ingresar contraseña',
                            secureTextEntry : true
                        }
                    }
                }
            },
            loading: false
        };
    }

    enterAccount() {
        const user = this.form.getValue();

        if(user){
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

            axios.post('https://columbiaapp.eviajes.online/oauth/token', data)
            .then(res => {
                const now = Date.now();

                let responseData = res.data;

                responseData.expires_in = responseData.expires_in + now;

                setTimeout(() => {
                    this.setState({
                        loading: false
                    });

                    this.props.navigation.replace('Home');

                    typeof this.props.navigation.navigate(this.props.navigation.state.params.routeName !== "undefined" ? this.props.navigation.state.params.routeName : 'Home');
                }, 500);

                this.props.onSetLoguedAccount({
                    oauth: responseData
                });
            })
            .catch( () => {
                this.setState({
                    loading: false
                });
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={[ styles.divPulseIndicator, { position: this.state.loading ? 'absolute' : null, display: this.state.loading ? 'flex' : 'none' }]}>
                    <PulseIndicator size={85} color="#D8D8D8"/>
                </View>

                <View style={styles.form}>
                    <Form ref={r => this.form = r} type={ this.state.form.struct } options={ this.state.form.options }/>

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
    container: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    divPulseIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        bottom: '45%',
        right: '31%'
    },
    form: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#2CAEE6',
        paddingVertical: 15,
        borderRadius: 5
    },
    buttonText: {
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