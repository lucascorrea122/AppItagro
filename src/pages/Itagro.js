import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import styles from '../styles/itagro.styles';

import Gallery from 'react-native-image-gallery';
import { SliderBox } from 'react-native-image-slider-box';
import ItagroImg1 from '../images/logo-itagro.png';




export default class Itagro extends Component {
  // source={require('../images/pulverizacao.jpg')}
  
  constructor(props) {
    super(props);
    this.state = {
      images: [
    
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }
  onLayout = e => {
    this.setState({
        width: e.nativeEvent.layout.width
    });
};

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23, fontWeight: 'bold' }}> Sobre Nós </Text>
        <View style={styles.ContainerItagro}>
          <Text>

            A Itagro conta com uma equipe de profissionais altamente qualificados e experientes dentro do seu quadro de funcionários.
            Ao total são seis pilotos e dez técnicos agrícolas que também estão com o curso de aviação agrícola em execução com o objetivo de garantir
            uma aviação de qualidade mantendo o compromisso com a excelência na prestação de seus serviços.
          </Text>
          <View style={{marginTop: 40}}>
          <SliderBox
    images={this.state.images}
    sliderBoxHeight={400}
    onCurrentImagePressed={index =>
        console.warn(`image ${index} pressed`)
    }
/>
              
           
          </View>
      

        
        </View>
      </View>
    );
  }
}

