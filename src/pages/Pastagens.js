import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import styles from '../styles/servicosPages.styles';

export default class Pastagens extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
            <View style={styles.containerBox}>
                <Text style={styles.title}>Pastagens</Text>
                <Image style={styles.image}
                    source={require('../images/pastagem.jpg')}
                />
                <Text style={styles.texto}>
                Utilização do difusor "Swathmaster" para maior homogeinização e uniformidade das sementes lançadas através do avião. 
                Podemos semear aveia, azevém, milheto, braquiárias, soja, milho, dentre outras. Com base nisto o agricultor acaba ganhando no mínimo 30 
                dias para a germinação, pois não há necessidade de esperar a colheita para efetuar a semeadura.
    
            </Text>

            </View>


        </View>
        );
    }

}