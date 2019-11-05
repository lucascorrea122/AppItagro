
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button, Linking } from 'react-native';


export default class ContatoWhats extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>

                <Text
                    style={{ marginTop: 30 }}
                    onPress={() => {
                        Linking.openURL(
                            'http://api.whatsapp.com/send?phone=55' + 53984572137
                        );
                    }}>
                    Send WhatsApp Message
             </Text>
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