import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Div from '../../layouts/default';

import FileComponent from '../../components/FileComponent';

import { isSignedIn } from '../../auth';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faPlaneDeparture, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faPlaneDeparture, faTimes);

import { setVouchers } from 'ColumbiaViajes3/actions';

import { withNavigation } from 'react-navigation';

class VoucherContainer extends Component{
    constructor(props){
        super(props);

        this.onRefresh = this.onRefresh.bind(this);

        this.fetchVouchers = this.fetchVouchers.bind(this);
    }

    onRefresh(){
        this.fetchVouchers(true);
    }

    fetchVouchers(is_refreshing = false){
        this.props.setVouchers({
            is_refreshing
        })
        .then(() => {
            axios({
                url: 'https://columbiaapp.eviajes.online/api/vouchers/user',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.props.access_token}`
                }
            })
            .then(res => {
                this.props.setVouchers({
                    items: res.data,
                    loading: false,
                    is_refreshing: false
                });
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
                if(this.props.vouchers.items.length === 0){
                    this.fetchVouchers();
                }
            }
        })
        .catch(res => {
            this.props.navigation.replace('Home');
            
            this.props.navigation.navigate('SignIn_', { routeName: this.props.navigation.state.routeName });
        });
    }

    render(){
        return(
            <Div 
                onRefresh={ this.onRefresh } 
                is_refreshing={ this.props.vouchers.is_refreshing } 
                name="Vouchers e Initerarios" 
                icon='bar-chart' 
                loading={ this.props.vouchers.loading }
            >
                {
                    this.props.vouchers.items.length > 0 ?
                        this.props.vouchers.items.map((item, key) => {
                            return(
                                <FileComponent 
                                    key={ key } 
                                    url={ `https://columbiaapp.eviajes.online/vouchers_m/download/${item.file_name}` }
                                    name={ item.name } 
                                    style={ styles.fileComponent }
                                />
                            )
                        })
                    :
                        (
                            <View style={{ alignItems: 'center' }}>
                                <FontAwesomeIcon 
                                    size={37} 
                                    color={"#10db7a"} 
                                    icon={['fas', 'plane-departure']}
                                />

                                <FontAwesomeIcon 
                                    size={25}
                                    style={{ top: -30 }}
                                    color={"#575958"} 
                                    icon={['fas', 'times']}
                                />

                                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: -17 }}>
                                    Disculpe, no cuenta con vouchers contactese con administracion
                                </Text>
                            </View>
                        )
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
        vouchers: state.vouchers,
        access_token: state.account.oauth.access_token
    };
};

export default connect(mapStateToProps, { setVouchers })(withNavigation(VoucherContainer));