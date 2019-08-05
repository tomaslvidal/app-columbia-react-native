import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, FlatList, TouchableOpacity, StyleSheet, Linking, RefreshControl, ActivityIndicator } from 'react-native';

import DestinationBox from 'ColumbiaViajes3/components/DestinationBoxComponent'

import Div from 'ColumbiaViajes3/layouts/default';

import { setDestinations } from "ColumbiaViajes3/actions";

import { withNavigation } from 'react-navigation';

import axios from 'axios';

class DestinationList extends Component {
    constructor(props){
        super(props);

        this.handlePress = this.handlePress.bind(this);

        this.fetchDestinations = this.fetchDestinations.bind(this);

        this.renderFooter = this.renderFooter.bind(this);

        this.handleLoadMore = this.handleLoadMore.bind(this);

        this.onRefresh = this.onRefresh.bind(this);
    }

    fetchDestinations(page = 1, concat = true){
        axios.get('https://columbiaapp.eviajes.online/api/destinations', {
            params: {
                new_version: true,
                page
            }
        })
        .then(res => {
            this.props.setDestinations({
                items: concat ? this.props.destinations.items.concat(res.data.data) : res.data.data,
                loading: false,
                pending: false,
                is_refreshing: false,
                empty: res.data.data.length === 0 ? true : false,
                page
            })
        });
    }

    componentDidMount(){
        if(this.props.destinations.items.length === 0){
            this.fetchDestinations();
        }
    }

    handlePress(item){
        if(typeof item.url === 'undefined'){
            this.props.navigation.navigate('DestinationDetail', item);
        }
        else{
            Linking.openURL(item.url)
        }
    }

    renderFooter(){
        return(
            !this.props.destinations.empty ?
                <View style={{ marginTop: 5, width: '100%', justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size="large" color="#2b8fd6"/>
                </View>
            : null
        );
    }

    handleLoadMore(){
        if(!this.props.destinations.empty && !this.props.destinations.pending){
            let page = this.props.destinations.page;

            page++;

            this.props.setDestinations({
                page,
                pending: true
            })
            .then(() => {
                this.fetchDestinations(this.props.destinations.page);
            });
        }
    }

    onRefresh(){
        this.props.setDestinations({
            page: 1,
            is_refreshing: true,
            pending: true,
            empty: false
        })
        .then(() => {
            this.fetchDestinations(this.props.destinations.page, false);
        })
    }

    render() {
        const renderItem = ({item, index}) => (
            <TouchableOpacity onPress={() => this.handlePress({ key: index })}>
                <DestinationBox destination={item}/>
            </TouchableOpacity>
        );

        return (
            <Div name="Destinos" icon="wpforms" loading={this.props.destinations.loading} state_scroll_view={false}>
                <FlatList
                    data={this.props.destinations.items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.destinations.is_refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.handleLoadMore}
                />
            </Div>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
    destinations: state.destinations
});

export default connect(mapStateToProps, { setDestinations })(withNavigation(DestinationList));