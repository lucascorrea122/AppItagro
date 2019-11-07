import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/contato.styles';
import CardView from 'react-native-cardview'
import RedesSociais from '../Componentes/RedesSociais';

export default class Contato extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
                
                    <RedesSociais />
                    
               
            </View>
        );
    }
}