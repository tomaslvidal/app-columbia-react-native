import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            open : false
        };
    }

    render() {
        const img_path = 'ColumbiaViajes3/img/';

        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={[styles.container]}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require(img_path+'logo/logo.png')} />
                </View>

                <LoginForm />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 38,
        width: '75%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    logo: {
        maxWidth: 270
    },
    loginContainer:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        flex: 1,
        marginLeft: 48
    }
});