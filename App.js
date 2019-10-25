import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import cores from './src/constaints/colors';
import { Icon } from 'react-native-elements'

import Home from './src/pages/Home';
import Itagro from './src/pages/Itagro';
import Valores from './src/pages/Valores';
import Servicos from './src/pages/Servicos';

//import Icon from 'react-native-vector-icons/FontAwesome';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./src/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Itagro - Aviação de Qualidade',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Itagro_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Itagro,
    navigationOptions: ({ navigation }) => ({
      title: 'Sobre Nós',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Valores_StackNavigator = createStackNavigator({
  
  Third: {
    screen: Valores,
    navigationOptions: ({ navigation }) => ({
      title: 'Nosso Valores',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});


const Servicos_StackNavigator = createStackNavigator({
  fourth: {
    screen: Servicos,
    navigationOptions: ({ navigation }) => ({
      title: 'Serviços',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator({
 
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <Icon name="home" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Itagro: {
    screen: Itagro_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Sobre Nós',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Valores: {
    screen: Valores_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Nossos Valores',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Servicos: {
    screen: Servicos_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Serviços',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Aeronaves: {
    screen: Servicos_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Aeronaves',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Noticias: {
    screen: Servicos_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notícias',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Contato: {
    screen: Servicos_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contato',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);