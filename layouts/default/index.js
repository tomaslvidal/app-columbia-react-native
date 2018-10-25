import React, { Component } from 'react';

import { Text, StatusBar, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking, ScrollView } from 'react-native';

import BackLeft from '../../components/BackLeft.js';

import Footer from '../../components/Footer.js';

import Preloader from '../../components/Preloader.js';

class LayoutDefault extends Component{
  constructor(props){
    super(props);

    this.state={
      heightParent: "",
      loading: true
    };
  }

  componentDidMount(){
    setTimeout( () => {
      this.setState({
        loading: false
      });
    }, 300);
  }

  render(){
    return(
      <View style={[{flex: 1, flexDirection: 'column'}, {}]}>
        <StatusBar backgroundColor='#2CAEE6' barStyle='light-content' />
        {
        (this.props.backleft != undefined && this.props.backleft == false)  ? null
        : (<BackLeft name={this.props.name} icon={this.props.icon} />)
        }
        <View style={{display: 'flex', flex: 1}} onLayout={(event) => this.setState({heightParent: event.nativeEvent.layout.height})}>
          <ScrollView style={{display: 'flex'}}>
            <View style={[styles.childrenScrollView, {minHeight: this.state.heightParent!="" ? this.state.heightParent : null}]}>
              <View style={this.state.loading ? [styles.loading, styles.container] : styles.container}>
                <View>
                  <Text>{this.props.title}</Text>
                </View>

                {
                this.state.loading
                  ?
                    <Preloader/>
                  :
                    <View style={(this.props.container != undefined && this.props.container == false) ? [{}, styles.parentContainer] : [styles.propParentContainer, styles.parentContainer]}>
                      {
                      this.props.children
                      }
                    </View>
                }
              </View>

              {
              (this.props.footer != undefined && this.props.footer == false) ? null
              : (<Footer/>)
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  childrenScrollView:{
    display: 'flex',
  },
  container:{
    padding: 10
  },
  loading: {
    flex: 1
  },
  parentContainer: {
    display: 'flex',
    flex: 1,
  },
  propParentContainer:{
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10
  }
});

export default LayoutDefault;