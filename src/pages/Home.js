
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button } from 'react-native';
import ContatoWhats from '../Componentes/ContatoWhats' 

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/itagroHome.jpg')}
        style={{flex:1, opacity:0.7}}
      >
        <View style={{flex:1, alignItems:'center', marginTop:10}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>Últimas Notícias</Text>
            <ContatoWhats />
        </View>

      </ImageBackground>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});