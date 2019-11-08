import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import Styles from '../styles/historia.styles';

import { SliderBox } from 'react-native-image-slider-box';
import ItagroImg1 from '../images/logo-itagro.png';


export default class Equipe extends Component {
    render() {
        return (
            <View style={Styles.MainContainer}>
                <Image
                    source={require('../images/itagro1.jpg')}
                    style={{ width: '90%', height: 225, marginTop: 10, borderColor: 'red', borderRadius: 5 }}
                />
                <Text style={{width:'90%', marginTop:10}}>

                    A Itagro conta com uma equipe de profissionais altamente qualificados e experientes dentro do seu quadro de funcionários.
                    Ao total são seis pilotos e dez técnicos agrícolas que também estão com o curso de aviação agrícola em execução com o objetivo de garantir
                    uma aviação de qualidade mantendo o compromisso com a excelência na prestação de seus serviços.
                </Text>
            </View>
        );
    }
}