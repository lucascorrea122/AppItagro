import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button, ScrollView } from 'react-native';
import styles from '../styles/aeronaves.styles';
import CardView from 'react-native-cardview'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";





export default class Aeronaves extends Component {
 
    render() {
        return (
            <View style={styles.MainContainer}>
            <View style={styles.aeronavesContainer}>

                <Image source={require('../images/at402B-1.jpg')}
                    style={{ width: 320, height: 120, marginTop: 10, borderRadius: 10, marginBottom: 5 }}

                >

                </Image>
                <ScrollView>
                    <Collapse >
                        <CollapseHeader style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textTitleCollapse}>Especificação</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ width: '100%', justifyContent: 'center', backgroundColor: '#EDEDED',  borderRadius:5 }}>
                            <View >
                                <Text style={styles.textDefinicao}>Tipo de Motor: </Text>
                                <Text style={styles.textItem}>Lycoming IO-540-K1J5, 300HP, 2.700RPM</Text>
                                <Text style={styles.textItem}>6 cilindros(Motor a Gasolina)</Text>
                            </View>
                            
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Hélice:</Text>
                                <Text style={styles.textItem}>Hartzell tripá com velocidade constante</Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Comprimento total: </Text>
                                <Text style={styles.textItem}>7,43m</Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Altura:</Text>
                                <Text style={styles.textItem}>2,22m</Text>
                            </View>

                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Envergadura: </Text>
                                <Text style={styles.textItem}>11,07m</Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Peso máximo: </Text>
                                <Text style={styles.textItem}>1800 kg </Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Categoria restrita: </Text>
                                <Text style={styles.textItem}>Decolagem e Pouso</Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Capacidade de combustível: </Text>
                                <Text style={styles.textItem}> 292L (77USgal) </Text>
                            </View>
                            <View >
                                <Text style={styles.textDefinicao}>Capacidade de combustível utilizável:  </Text>
                                <Text style={styles.textItem}>264 litros (70US gal)</Text>
                            </View>
                            <View >
                                <Text style={styles.textDefinicao}>Tanque de produtos químicos (Hopper): </Text>
                                <Text style={styles.textItem}> Volume total de 950litros</Text>
                            </View>
                            <View style={styles.viewItem}>
                                <Text style={styles.textDefinicao}>Área da asa: </Text>
                                <Text style={styles.textItem}>306 sq ft (28,45m2) </Text>
                            </View>

                        </CollapseBody>
                    </Collapse>
                    <Collapse >
                        <CollapseHeader style={{ justifyContent: 'center', alignItems: 'center', borderTopWidth: 1 }}>
                            <Text style={styles.textTitleCollapse}>Performance</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ justifyContent: 'center', backgroundColor: '#EDEDED', borderRadius:5 }}>
                            <View >
                                <Text style={styles.textDefinicao}>Cruzeiro a 75% da PMC:</Text>
                                <Text style={styles.textItem}>213km/h(133mph) Va (Motor a gasolina)</Text>
                            </View>
                            <View>
                                <Text style={styles.textDefinicao}>Cruzeiro a 65% da PMC: </Text>
                                <Text style={styles.textItem}>198km/h(123mph) Va (Motor a gasolina) </Text>
                            </View>
                            <View >
                                <Text style={styles.textDefinicao}>Estol com flapa a 30%:</Text>
                               <Text style={styles.textItem}>88km/h(55mph) </Text>
                            </View>
                           



                        </CollapseBody>
                    </Collapse>
                </ScrollView>



            </View>
        </View>
      
   


        );

    }
}


