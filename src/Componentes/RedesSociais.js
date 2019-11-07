
import React, { Component } from 'react';
import { View, Text, ImageBackground, Button, Linking, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import cores from '../constaints/colors'
import Styles from '../styles/contato.styles';


export default class ContatoWhats extends Component {
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

            <View style={{ marginTop: 30, justifyContent: 'space-around', flexDirection: 'row', width: '80%' }}>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(
                            'http://api.whatsapp.com/send?phone=55' + 53984572137
                        );
                    }}
                >
                    {/* <Icon name='logo-whatsapp' type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} /> */}
                    <Image source={require('../images/whatsapp.png')} style={Styles.ImagemContato} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Icon name='logo-facebook' type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} /> */}
                    <Image source={require('../images/facebook.png')} style={Styles.ImagemContato} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Icon name='logo-youtube' type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} /> */}
                    <Image source={require('../images/youtube.png')} style={Styles.ImagemContato} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Icon name="logo-instagram" type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} /> */}
                    <Image source={require('../images/instagram.png')} style={Styles.ImagemContato} />
                </TouchableOpacity>


            </View>


        );
    }
}
