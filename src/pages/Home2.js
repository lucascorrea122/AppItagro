import React from 'react';
import {View, Button, Text} from 'react-native';



// const Page1 = ({ navigation}) => (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home </Text>
//     <Button 
//       title="Ir para Itagrso"
//       onPress={() => navigation.navigate('Itagro') }
//     />
//   </View>

// );

export default class Home extends React.Component{
    static navigationOptions = {
        draweLabel: 'Home',
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Tex>oi</Tex>
            </View>
        );
    }
}


// Page1.navigationOptions = {
//     title: 'Home2',
// }

// export default Page1;
