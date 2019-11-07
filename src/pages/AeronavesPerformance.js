import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/aeronaves.styles';
import CardView from 'react-native-cardview'

export default class Aeronavesdd extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <View style={styles.aeronavesContainer}>
                    <View style={{ width: '33.3%', height: 50, backgroundColor: 'powderblue',justifyContent:'center', alignItems:'center' }}>
                        <Text>AirTractor</Text>
                        <Text> AT-402B</Text>
                    </View>
                    <View style={{ width: '33.3%', height: 50, backgroundColor: 'skyblue', justifyContent:'center', alignItems:'center' }}>
                        <Text>Embraer  </Text>
                        <Text>IPANEMA-Gasolina</Text>
                    </View>
                    <View style={{ width: '33.3%', height: 50, backgroundColor: 'steelblue',justifyContent:'center', alignItems:'center' }}>
                        <Text>Embraer </Text>
                        <Text>IPANEMA-Etanol</Text>
                    </View>
                </View>
                <View>
                    <Text>Performance</Text>

                </View>

            </View>

        ); 

    }
}