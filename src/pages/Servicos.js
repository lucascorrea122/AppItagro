import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/servicos.styles';
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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.MainContainer}>

                {/* CARD DE PULVERIZAÇÃO */}
                <TouchableOpacity
                    onPress={() =>
                        preventDoubleTapHack(this, () => this.props.navigation.navigate("Pulverizacao"))
                    }
                >
                    <CardView
                        style={{ marginTop: 10 }}
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={5}>
                        <ImageBackground source={require('../images/pulverizacao.jpg')}
                            style={{ width: 320, height: 120 }}

                        >

                        </ImageBackground>
                        <View style={{ alignItems: 'center' }}>

                            <Text style={{ fontSize: 22 }}>Pulverização</Text>
                        </View>
                    </CardView>

                </TouchableOpacity>

                {/* VIEW PARA CARDS LATERAIS */}
                <View style={styles.containerBox}>

                    {/* CARD DE ADUBAÇÃO */}
                    <TouchableOpacity style={{ padding: 10 }}
                       onPress={() =>navigate('Adubacao')}
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

                    {/* CARD PARA PASTAGENS */}
                    <TouchableOpacity style={{ padding: 10 }}
                    onPress={() =>
                        preventDoubleTapHack(this, () => this.props.navigation.navigate("Pastagens"))
                    }
                    >
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
                    </TouchableOpacity>
                </View>

                {/* SEGUNDA VIEW PARA CARDS LATERAIS */}
                <View style={styles.containerBox}>

                    {/* CARD PARA COMBATENS INCÊNCIDIOS */}
                    <TouchableOpacity style={{ padding: 10 }}
                     onPress={() =>navigate('Incendio')}
                    >
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
                    </TouchableOpacity>

                    {/* CARD PARA PLANTAÇÃO DE ARROZ */}
                    <TouchableOpacity style={{ padding: 10 }}
                    onPress={() =>
                        preventDoubleTapHack(this, () => this.props.navigation.navigate("Plantacao"))
                    }
                    >
                        <CardView

                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <ImageBackground source={require('../images/plantacao.jpg')}
                                style={{ width: 150, height: 150 }}>

                            </ImageBackground>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>Plantação de Arroz</Text>
                            </View>
                        </CardView>
                    </TouchableOpacity>
                    
                </View>






            </View>
        );
    }
}

