
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import cores from '../constaints/colors'



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

            <View style={{ marginTop: 30, justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                        'http://api.whatsapp.com/send?phone=55' + 53984572137
                    );
                }}
                >
                    <Icon name='logo-whatsapp' type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='logo-facebook' type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='logo-youtube'
                        type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="logo-instagram" type='ionicon' size={40} color={cores.cores.colorNumeroClassificado} />
                </TouchableOpacity>


            </View>


        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});