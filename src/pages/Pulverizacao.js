import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/servicosPages.styles';

export default class Adubacacao extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.containerBox}>
                    <Text style={styles.title}>Pulverização</Text>
                    <Image style={styles.image}
                        source={require('../images/pulverizacao.jpg')}
                    />
                    <Text style={styles.texto}>
                    Utilizamos todos os tipos de bicos e atomizadores com o intuito de garantir a melhor eficiência das aplicações dos defensivos 
                    agrícolas de acordo com as vazões e exigências das diversas culturas conforme as recomendações técnicas.

                    </Text>

                </View>


            </View>
        );
    }

}