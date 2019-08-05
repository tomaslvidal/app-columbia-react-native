import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Div from '../../layouts/default';

import FileComponent from '../../components/FileComponent';

import { isSignedIn } from '../../auth';

import axios from 'axios';

class VoucherContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            items: []
        };
    }

    componentDidMount(){
        isSignedIn()
        .then(res => {
            if(!res){
                this.props.navigation.replace('Home');
                
                this.props.navigation.navigate('SignIn_', { routeName: this.props.navigation.state.routeName });
            }
            else{
                axios({
                    url: 'https://columbiaapp.eviajes.online/api/vouchers/user',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${this.props.access_token}`
                    }
                })
                .then(response => {
                    this.setState({
                        items: response.data,
                        loading: false
                    });
                });
            }
        })
        .catch(res => {
            this.props.navigation.replace('Home');
            
            this.props.navigation.navigate('SignIn_', { routeName: this.props.navigation.state.routeName });
        });
    }

    render(){
        return(
            <Div name="Vouchers e Initerarios" icon='bar-chart' loading={ this.state.loading }>
                {
                    this.state.items.map((item, key) => {
                        return(
                            <FileComponent 
                                key={ key } 
                                url={ `https://columbiaapp.eviajes.online/vouchers_m/download/${item.file_name}` }
                                name={ item.name } 
                                style={ styles.fileComponent }
                            />
                        )
                    })
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