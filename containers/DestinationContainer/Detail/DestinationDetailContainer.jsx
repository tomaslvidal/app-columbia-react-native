import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, RefreshControl } from 'react-native';

import HTML from 'react-native-render-html';

import Progress from 'react-native-progress/Bar';

import Div from '../../../layouts/default';

import axios from 'axios';

import { createImageProgress } from 'react-native-image-progress';

import { updateDestination } from "ColumbiaViajes3/actions";

import { withNavigation } from 'react-navigation';

import FastImage from 'react-native-fast-image';

const Image = createImageProgress(FastImage);

let COORDINATES = {};

class DestinationDetail extends Component {
    constructor(props){
        super(props);

        this.state = { 
            item: this.props.destinations[this.props.navigation.state.params.key],
            maxWidth: 0,
            loading: true,
            is_refreshing: false
        };

        this.setMaxHeight = this.setMaxHeight.bind(this);

        this.scrollView = this.scrollView.bind(this);

        this.onLinkPress = this.onLinkPress.bind(this);

        this.onRefresh = this.onRefresh.bind(this);
    }

    fetchDestination(is_refreshing = false){
        return new Promise((resolve, reject) => {
            this.setState({
                is_refreshing
            }, () => {
                axios.get(`https://columbiaapp.eviajes.online/api/destinations/${this.state.item.id}`)
                .then(res => {
                    this.props.updateDestination({
                        key: this.props.navigation.state.params.key,
                        data: res.data
                    })
                    .then(() => {
                        this.setState({
                            item: this.props.destinations[this.props.navigation.state.params.key],
                            is_refreshing: false
                        }, () => {
                            resolve(true);
                        });
                    });
                })
                .catch(e => {
                    reject(e);
                })
            })
        });
    }

    async componentDidMount(){
        if(typeof this.state.item.description === "undefined"){
            await this.fetchDestination();
        }

        this.setState({
            loading: false
        });
    }

    onRefresh(){
        this.fetchDestination(true);
    }

    setMaxHeight(e){
        this.setState({
            maxWidth: e.nativeEvent.layout.width
        });
    }

    scrollView(e){
        this.div.scroll_view.scrollTo({
            x: 0,
            y: COORDINATES[e]-80
        });
    }

    onLinkPress(href){
        Linking.openURL(href);
    }

    render() {
        const url = "https://columbiaapp.eviajes.online/destinations_m/download/";

        return (
        <Div
            onRefresh={ this.onRefresh }
            is_refreshing={ this.state.is_refreshing } 
            ref={ref => this.div = ref}
            name="Formulario de Reclamos"
            icon="wpforms"
            loading={ this.state.loading }
        >
            <View onLayout={e => this.setMaxHeight(e)}>
                <View style={{ marginLeft: -20, marginRight: -20 }}>
                    <Image
                        source={{
                            uri: url+this.state.item.image1, 
                            cache: FastImage.cacheControl.cacheOnly,
                            priority: FastImage.priority.high
                        }}
                        indicatorProps={{
                            size: 100,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }} 
                        indicator={Progress}
                        style={[styles.footerImage]}
                    />
                </View>

                <View style={styles.box}>
                    <Text style={styles.textTitle}>{this.state.item.title}</Text>

                    <HTML 
                        imagesMaxWidth={this.state.maxWidth ? this.state.maxWidth : null}
                        staticContentMaxWidth={this.state.maxWidth ? this.state.maxWidth : null}
                        html={typeof this.state.item.description !== 'undefined' ? this.state.item.description : '<div></div>'}
                        tagsStyles={tagsStyles}
                        textSelectable={true}
                        alterChildren = { (node) => {
                                if(node.name === 'p'){
                                    if(typeof node.attribs['style'] !== "undefined"){
                                        let arrayProperties = node.attribs['style'].split(';').map(item => item.trim());

                                        if(arrayProperties.length>0){
                                            ['start', 'end'].forEach(value => {
                                                let find_index = arrayProperties.findIndex(item => typeof item !== 'undefined' ? (item.indexOf(value) != -1 && item.indexOf('text-align') != -1) : false);

                                                if(find_index != -1){
                                                    delete arrayProperties[find_index];
                                                }
                                            });

                                            node.attribs['style'] = arrayProperties.join(';');
                                        }
                                    }
                                }

                                return node.children;
                            }
                        }
                        renderers = {{
                            img: parameters => {
                                const key = Math.random().toString(36).substr(2, 5);

                                return(
                                    <Image
                                        key={key}
                                        source={{
                                            uri: parameters.src,
                                            cache: FastImage.cacheControl.immutable,
                                            priority: FastImage.priority.normal
                                        }}
                                        indicatorProps={{
                                            size: 100,
                                            color: 'rgba(150, 150, 150, 1)',
                                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                        }} 
                                        indicator={ Progress } 
                                        style={{
                                            backgroundColor: "#F2F2F2",
                                            width: (parameters => {
                                                if(typeof parameters.width !== "undefined"){
                                                    return !isNaN(Number(parameters.width)) ? Number(parameters.width) : '100%';
                                                }

                                                if(typeof parameters.style !== "undefined"){
                                                    let array = parameters.style.split(';');

                                                    array = array.map(item => item.trim());

                                                    array = array.filter(item => item.indexOf('width')!=-1);

                                                    if(array.length>0){
                                                        array = array[0].split('width:');

                                                        array = array.map(item => item.trim());

                                                        return !isNaN(Number(array[1].slice(0, -2))) ? Number(array[1].slice(0, -2)) : '100%';
                                                    }
                                                }

                                                return '100%';
                                            })(parameters),
                                            height: (parameters => {
                                                if(typeof parameters.height !== "undefined"){
                                                    return !isNaN(Number(parameters.height)) ? Number(parameters.height) : 180;
                                                }

                                                if(typeof parameters.style !== "undefined"){
                                                    let array = parameters.style.split(';');

                                                    array = array.map(item => item.trim());

                                                    array = array.filter(item => item.indexOf('height')!=-1);

                                                    if(array.length>0){
                                                        array = array[0].split('height:');

                                                        array = array.map(item => item.trim());

                                                        return !isNaN(Number(array[1].slice(0, -2))) ? Number(array[1].slice(0, -2)) : 180;
                                                    }
                                                }

                                                return 180;
                                            })(parameters),
                                        }}
                                    />
                                );
                            },
                            a: (parameters, two, three, four) => {
                                let key = Math.random().toString(36).substr(2, 5);

                                if(typeof parameters.href !== "undefined"){
                                    if(parameters.href === "#"){
                                        if(typeof parameters.id !== "undefined"){
                                            if(parameters.id.length !== 0){
                                                    return(
                                                        <View 
                                                            key={key} 
                                                            ref={ (ref) => this[parameters.id] = ref } 
                                                            onLayout={ ({nativeEvent}) => {
                                                                if(this[parameters.id]) {
                                                                    this[parameters.id].measure((x, y, width, height, pageX, pageY) => {
                                                                        COORDINATES[parameters.id] = pageY;
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            <Text>
                                                                {two}
                                                            </Text>
                                                        </View>
                                                    );
                                            }
                                        }
                                    }
                                    else if(parameters.href.indexOf('#') === 0){
                                        return(
                                            <TouchableOpacity 
                                                key={ key } 
                                                onPress={() => { this.scrollView(parameters.href.slice(1)) } }
                                            >
                                                <Text>{ two }</Text>
                                            </TouchableOpacity>
                                        );
                                    }
                                    else{
                                        return(
                                            <TouchableOpacity 
                                                key={ key } 
                                                onPress={() => { this.onLinkPress(parameters.href) } }
                                            >
                                                <Text>{ two }</Text>
                                            </TouchableOpacity>
                                        );
                                    }
                                }

                                return two;
                            }
                        }}
                    />
                </View>
            </View>
        </Div>
        );
    }
}

const tagsStyles = {
    img: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-between',
    }
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 8
    },
    footerImage: {
        flex: 1,
        alignSelf: 'center',
        justifyContent:'center',
        paddingTop: 10,
        marginTop: 'auto',
        marginBottom:'auto',
        height: 200,
        width: '100%',
        marginTop: -27,
        backgroundColor: "#F2F2F2"
    },
    box: {
        backgroundColor: 'white',
        marginTop: 6,
        padding: 5
    },
});

const mapStateToProps = state => ({
    destinations: state.destinations.items
});

export default connect(mapStateToProps, { updateDestination })(withNavigation(DestinationDetail));