import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import cores from './src/constaints/colors';
import { Icon } from 'react-native-elements'

import Home from './src/pages/Home';
import Itagro from './src/pages/Itagro';
import Valores from './src/pages/Valores';
import Servicos from './src/pages/Servicos';
import Aeronaves from './src/pages/Aeronaves';
import Contato from './src/pages/Contato';

import Pulverizacao from './src/pages/Pulverizacao';
import Adubacao from './src/pages/servicosPages/Adubacao';
import Incendio from './src/pages/Incendio';
import Pastagens from './src/pages/Pastagens';
import Plantacao from './src/pages/servicosPages/Plantacao';


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

const Aeronaves_StackNavigator = createStackNavigator({
  fourth: {
    screen: Aeronaves,
    navigationOptions: ({ navigation }) => ({
      title: 'Aeronaves',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  
});



const Servicos_StackNavigator = createStackNavigator({
  sixth: {
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

const Pulverizacao_Stack = createStackNavigator({
  seventh:{
    screen: Pulverizacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Pulverização',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Adubacao_Stack = createStackNavigator({
  eith:{
    screen: Adubacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Adubação',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Pastagens_Stack = createStackNavigator({
  seventh:{
    screen: Pastagens,
    navigationOptions: ({ navigation }) => ({
      title: 'Pastagens',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Incendio_Stack = createStackNavigator({
  seventh:{
    screen: Incendio,
    navigationOptions: ({ navigation }) => ({
      title: 'Combate à Incêndios',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Plantacao_Stack = createStackNavigator({
  ninth:{
    screen: Plantacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Plantação de Arroz',
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
    screen: Aeronaves_StackNavigator,
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
  Pulverizacao: {
    screen: Pulverizacao_Stack,
    navigationOptions: {
      drawerLabel: 'Pulverização',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Adubacao: {
    screen: Adubacao_Stack,
    navigationOptions: {
      drawerLabel: 'Adubação',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Pastagens: {
    screen: Pastagens_Stack,
    navigationOptions: {
      drawerLabel: 'Pastagens',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Incencio: {
    screen: Incendio_Stack,
    navigationOptions: {
      drawerLabel: 'Combate à Incêndio',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Plantacao: {
    screen: Plantacao_Stack,
    navigationOptions: {
      drawerLabel: 'Plantação de Arroz',
      drawerIcon: <Icon name="adn" size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);