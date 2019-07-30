import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import DestinationBox from '../../../components/DestinationBoxComponent'

import BackLeft from '../../../components/BackLeftComponent'

import Div from '../../../layouts/default';

import axios from 'axios';

class DestinationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: {},
            loading: true
        };

        this.handlePress = this.handlePress.bind(this);
    }

    componentDidMount(){
        axios.get('https://columbiaapp.eviajes.online/api/destinations', {
            params: {
                new_version: true
            }
        })
        .then(response => {
            this.setState({
                items: response.data,
                loading: false
            });
        });
    }

    handlePress(item){
        if(item.url==undefined){
            this.props.navigation.navigate('DestinationDetail', { item: item });
        }
        else{
            Linking.openURL(item.url)
        }
    }

    render() {
        const renderItem = ({item}) => (
            <TouchableOpacity onPress={() => this.handlePress(item)}>
                <DestinationBox destination={item}/>
            </TouchableOpacity>
        );

        return (
            <Div name="Destinos" icon="wpforms" loading={this.state.loading}>
                <FlatList
                    data={this.state.items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    initialNumToRender={10}
                    windowSize={3}
                />
            </Div>
        );
    }
}

const styles = StyleSheet.create({

});

export default connect()(DestinationList);