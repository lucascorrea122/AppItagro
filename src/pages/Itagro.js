import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
        {/* <Text style={{ fontSize: 23, fontWeight: 'bold' }}> Sobre Nós </Text> */}
        <View style={styles.ContainerItagro}>
          
          
          <View style={{ width: '100%', }}>
            <TouchableOpacity style={{ padding: 10 }}
              onPress={() => navigate('Historia')}
            >
              <ImageBackground
                style={{
                  marginTop: 20,
                  width: '100%',
                  height: 80,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
                imageStyle={{
                  borderRadius: 10,
                  opacity: 0.8,
                  backgroundColor: 'darkgreen'
                }}
                source={require('../images/historia.jpg')}
              >
                <Text style={styles.TextCardButton}>Nossa História</Text>
              </ImageBackground>
            </TouchableOpacity>


            <TouchableOpacity style={{ padding: 10 }}
              onPress={() => navigate('Diferenciais')}
            >
              <ImageBackground
                style={{
                  marginTop: 20,
                  width: '100%',
                  height: 80,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
                imageStyle={{
                  borderRadius: 10,
                  opacity: 0.8,
                  backgroundColor: 'darkgreen'
                }}
                source={require('../images/diferenciais.jpg')}
              >
                <Text style={styles.TextCardButton}>Diferenciais</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10 }}
              onPress={() => navigate('Equipe')}
            >
              <ImageBackground
                style={{
                  marginTop: 20,
                  width: '100%',
                  height: 80,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
                imageStyle={{
                  borderRadius: 10,
                  opacity: 0.8,
                  backgroundColor: 'darkgreen'
                }}
                source={require('../images/itagro1.jpg')}
              >
                <Text style={styles.TextCardButton}>Equipe</Text>
              </ImageBackground>
            </TouchableOpacity>


          </View>







        </View>
      </View>
    );
  }
}

{/* <SliderBox
images={this.state.images}
sliderBoxHeight={400}
onCurrentImagePressed={index =>
  console.warn(`image ${index} pressed`)
}
/> */}