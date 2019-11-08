
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button } from 'react-native';
import ContatoWhats from '../Componentes/ContatoWhats'
import Styles from '../styles/home.styles'; 
import CardView from 'react-native-cardview'

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/itagroHome.jpg')}
        style={{flex:1, opacity:0.7}}
      >
        <View style={Styles.MainContainer}>
            <Text style={Styles.TextTitle}>Últimas Notícias</Text>
            <CardView style={Styles.HomeNotices}>
                
            </CardView>
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