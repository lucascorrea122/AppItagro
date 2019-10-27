import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../../styles/servicosPages.styles';

export default class Plantacao extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
            <View style={styles.containerBox}>
                <Text style={styles.title}>Plantação de Arroz</Text>
                <Image style={styles.image}
                    source={require('../../images/plantacao.jpg')}
                />
                <Text style={styles.texto}>
                Realizamos Semeadura de sementes de arroz pré-germinados ou sementes normais. Garantindo ótimos resultados.
    
            </Text>

            </View>


        </View>
        );
    }

}