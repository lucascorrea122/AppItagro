import React, { Component } from 'react';
import {  View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../styles/valores.styles';


export default class Valores extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        
        <ScrollView>

        <Card title="Missão">
          
          <Text style={styles.paragraph}>
          Priorizar a qualidade de nossos serviços, visando atender as expectativas e necessidades de nossos clientes.
        
          </Text>
          <Text style={styles.paragraph} >
          Contribuir para o incremento de produtividade nas lavouras atendidas.
          </Text>
        </Card>

        <Card title="Visão">
          
          <Text style={styles.paragraph}>
          Melhoria constante na prestação de serviços aéreos, utilizando as melhores técnicas e equipamentos. Utilização da  melhor sistemática
          de trabalho disponível, visando sempre a segurança operacional.
          </Text>
        </Card>

        <Card title="Valores">
          
          <Text style={styles.paragraph}>
          Ética Profissionalismo Responsabilidade técnica e social Respeito ao meio ambiente
          </Text>
        </Card>
        </ScrollView>
        
      </View>
    );
  }
}
 
