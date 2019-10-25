import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/servicos.styles';
import { SliderBox } from 'react-native-image-slider-box';
import { Card } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation";
import CardView from 'react-native-cardview'

export default class Servicos extends Component {

    render() {

        const preventDoubleTapHack = (component: any, doFunc: Function) => {
            if (!component.wasClickedYet__ULJyRdAvrHZvRrT7) {
              //  eslint-disable-next-line no-param-reassign
              component.wasClickedYet__ULJyRdAvrHZvRrT7 = true;
              setTimeout(() => {
                //  eslint-disable-next-line no-param-reassign
                component.wasClickedYet__ULJyRdAvrHZvRrT7 = false;
              }, 700);
              doFunc();
            }
          };
        return (
            <View style={styles.MainContainer}>

                <View >

                    <CardView
                        style={{ marginTop: 10 }}
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={5}>
                        <ImageBackground source={require('../images/pulverizacao.jpg')}
                            style={{ width: 320, height: 120 }}
                            onPress={() =>
                                preventDoubleTapHack(this, () => this.props.navigation.navigate("Itagro"))
                              }
                            >

                        </ImageBackground>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 22 }}>Pulverização</Text>
                        </View>
                    </CardView>

                </View>

                <View style={styles.containerBox}>
                    
                    <TouchableOpacity style={{padding:10}}
                        onPress={() =>
                            preventDoubleTapHack(this, () => this.props.navigation.navigate("Itagro"))
                          }
                    >
                        <CardView
                            style={{ marginTop: 10 }}
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <ImageBackground source={require('../images/adubacao.jpg')}
                                style={{ width: 150, height: 150 }}>

                            </ImageBackground>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 22 }}>Adubação</Text>
                            </View>
                        </CardView>
                    </TouchableOpacity>
                    <View style={{padding:10}}>
                        <CardView
                            style={{ marginTop: 10 }}
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <ImageBackground source={require('../images/pastagem.jpg')}
                                style={{ width: 150, height: 150 }}>

                            </ImageBackground>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 22 }}>Pastagens</Text>
                            </View>
                        </CardView>
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <View style={{padding:10}}>
                        <CardView
                            
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <ImageBackground source={require('../images/incendio.jpg')}
                                style={{ width: 150, height: 150 }}
                                >

                            </ImageBackground>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Combate à Incêncios</Text>
                            </View>
                        </CardView>
                    </View>
                    <View style={{padding:10}}>
                        <CardView
                           
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <ImageBackground source={require('../images/plantacao.jpg')}
                                style={{ width: 150, height: 150 }}>

                            </ImageBackground>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Platação de Arroz</Text>
                            </View>
                        </CardView>
                    </View>
                </View>






            </View>
        );
    }
}

