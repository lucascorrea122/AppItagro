import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/contato.styles';
import CardView from 'react-native-cardview'
import RedesSociais from '../Componentes/RedesSociais';
import { Icon } from 'react-native-elements'

export default class Contato extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>

                <RedesSociais />

                <CardView style={styles.ItensCont}>
                    <View style={styles.ItensContent}>
                        <Icon name="globe" type="simple-line-icon" size={20} />
                        <Text style={styles.TextContent}>http://www.itagro.ag</Text>
                    </View>

                    <View style={styles.ItensContent}>
                        <Icon name="md-mail" type="ionicon" size={20} />
                        <Text style={styles.TextContent}>itagro@itagro.ag</Text>
                    </View>

                    <View style={styles.ItensContent}>
                        <Icon name="location-on" type="material" size={20} />
                        <View style={styles.TextContent}>
                            <Text >Alegrete - RS: ROD RS 377</Text>
                            <Text>KM 398/202 - 1º Distrito Palma</Text>
                            <Text>Cx. Postal 305 - CEP 97541-970 </Text>
                        </View>
                    </View>

                    <View style={styles.ItensContent}>
                        <Icon name="radio" type="feather" size={20} />
                        <Text style={styles.TextContent}>151.410 </Text>
                    </View>

                    <View style={styles.ItensContent}>
                        <Icon name="phone-call" type="feather" size={20} />
                        <View style={styles.TextContent}>
                            <Text>(55) 99696-6986</Text>
                            <Text>(55) 99962-1960</Text>
                            <Text>(55) 99974-1960</Text>
                        </View>
                    </View>
                </CardView>

            </View>
        );
    }
}