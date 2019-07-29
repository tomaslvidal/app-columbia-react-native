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

        this.renderItem = this.renderItem.bind(this);

        this.handlePress = this.handlePress.bind(this);
    }

    componentDidMount(){
        axios.get('https://columbiaapp.eviajes.online/api/destinations')
        .then(response => {
            this.setState({
                items: response.data,
                loading: false
            });
        });
    }

    renderItem({item}){
        return(
            <TouchableOpacity onPress={() => this.handlePress(item)}>
                <DestinationBox destination={item}/>
            </TouchableOpacity>
        );
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
        return (
            <Div name="Destinos" icon="wpforms" loading={this.state.loading}>
                <FlatList
                    data={this.state.items}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={10}
                    renderItem={this.renderItem}
                />
            </Div>
        );
    }
}

const styles = StyleSheet.create({

});

export default connect()(DestinationList);