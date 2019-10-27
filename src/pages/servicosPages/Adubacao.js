import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../../styles/servicosPages.styles';

export default class Adubacao extends Component{
    
    render(){
       
        return(
            <View style={styles.MainContainer}>
            <View style={styles.containerBox}>
                <Text style={styles.title}>Adubação</Text>
                <Image style={styles.image}
                        source={require('../../images/adubacao.jpg')}
                    />
                <Text style={styles.texto}>
                A adubação é realizada com o uso do difusor "Swathmaster" para garantir uma maior uniformidade e precisão com o melhor custo benefício.

                </Text>

            </View>


        </View>
    );
        
    }

}