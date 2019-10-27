import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import styles from '../styles/servicosPages.styles';

export default class Incendio extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
            <View style={styles.containerBox}>
                <Text style={styles.title}>Combates a Incêncios</Text>
                <Image style={styles.image}
                        source={require('../images/incendio.jpg')}
                    />
                <Text style={styles.texto}>
                Para o combate à incêndios utilizamos a aeronave Air Tractor, que tem sido utilizada em vários países.
                No Brasil também é amplamente usada devido a sua alta capacidade de carga e rapidez. Assim chegando aos focos de incêndio e locais de difícil acesso com muita eficiência.

                </Text>

            </View>


        </View>
        );
    }

}