import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import Styles from '../styles/historia.styles';

import { SliderBox } from 'react-native-image-slider-box';
import ItagroImg1 from '../images/logo-itagro.png';


export default class Historia extends Component {
    render() {
        return (
            <View style={Styles.MainContainer}>
                <View style={Styles.ItensCont}>
                    <ScrollView>
                        <Text style={Styles.TextContent}>
                            Como um sonho, o piloto agrícola Marcos Antonio Camargo, exercendo suas funções a bordo das aeronaves da empresa Aero Agrícola Santos Dumont, radicou-se com sua família na cidade de Alegrete, 3º produtor de arroz da fronteira oeste do Rio Grande do Sul, no ano de 1991. A empresa – Itapororó Aviação Agrícola Ltda, iniciou suas atividades com a aquisição da primeira aeronave agrícola EMB 201-A, de prefixo PT-GXZ, no ano de 1994. Com o passar dos anos e com a demanda por seus serviços crescendo foram sendo adquiridas outras aeronaves agrícolas e equipamentos, sendo a primeira empresa a operar efetivamente o DGPS no município de Alegrete e região. No ano de 1999 foram iniciadas as obras da sua base de operações, estabelecendo-se em aeródromo privado onde mantém sua sede a RST 377 km 398, estrada Alegrete/Manoel Viana, onde construiu hangares, escritórios, alojamentos, entre outras obras facilitadoras das operações da empresa.
                         </Text>

                         <Text style={Styles.TextContent}>
                         Com a conclusão das obras deu-se inicio a modernização da empresa, passando a investir em aeronaves novas, em substituição às mais antigas, investindo pesadamente, também, em equipamentos de última geração, tais como DGPS, atomizadores e difusores de sólidos denominados “swathmaster”, entre outros equipamentos ligados ás atividades aeroagrícolas.
                         </Text>

                         <Text style={Styles.TextContent}>
                         Paralelamente a isto desenvolveu programa de formação e especialização do seu quadro funcional, implantou sistemáticas próprias de trabalho, para melhor atender seus clientes. Criou sistemas de gerenciamento, gestão e controle dos seus serviços e conta hoje, com 16 colaboradores efetivos. A empresa está comprometida com sua responsabilidade técnica e sócio-ambiental. Em 2005 estendeu suas atividades ao estado de Goiás, onde mantém em operação uma aeronave, onde seu sócio-proprietário desenvolve atividades agrícolas, também. Possui hoje 7 aeronaves, sendo três EMB 202, duas EMB 201-A, retrofitadas, uma aeronave AT-402B e uma aeronave RV-10 para apoio nas operações.
                         </Text>

                         <Text style={Styles.TextContent}>
                         Na safra 2010/2011, operou em 120.000 (cento e vinte mil há) contabilizando 2.500 horas de vôo. Operando nas culturas de arroz, soja, milho, feijão, pastagens e florestas, principalmente. Desenvolveu durante anos arrojado programa de segurança operacional e manutenção de suas aeronaves o que permite comemorar mais de 14 anos sem acidentes ou incidentes. Tem como metas a continuidade da modernização de sua frota, o investimento em novas tecnologias, capacitação profissional de seus colaboradores, visando, via de conseqüência, a excelência de seus serviços.
                         </Text>
                    </ScrollView>

                </View>
            </View>
        );
    }
}