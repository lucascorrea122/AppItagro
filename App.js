import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import cores from './src/constaints/colors';
import { Icon } from 'react-native-elements'

import Home from './src/pages/Home';
import Itagro from './src/pages/Itagro';
import Valores from './src/pages/Valores';
import Servicos from './src/pages/Servicos';
import Aeronaves from './src/pages/Aeronaves';
import AeronaveIpanemaG from './src/pages/AeronaveIpanemaG';
import AeronaveIpanemaE from './src/pages/AeronaveIpanemaE';
import Contato from './src/pages/Contato';

import Historia from './src/pages/Historia';
import Diferenciais from './src/pages/Diferenciais';
import Equipe from './src/pages/Equipe';

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
  Itagro: {
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
  Historia: {
    screen: Historia,
    navigationOptions: ({ navigation }) => ({
      title: 'Nossa História',
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Diferenciais: {
    screen: Diferenciais,
    navigationOptions: ({ navigation }) => ({
      title: 'Nossos Diferenciais',
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Equipe: {
    screen: Equipe,
    navigationOptions: ({ navigation }) => ({
      title: 'Nossa Equipe',
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
  TabScreen: {
    screen: Aeronaves,
    navigationOptions: ({ navigation }) => ({
      title: 'AirTractor AT-402B',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  
});

const AeronaveIpanemaG_StackNavigator = createStackNavigator({
  TabScreen: {
    screen: AeronaveIpanemaG,
    navigationOptions: ({ navigation }) => ({
      title: 'Embraer - Ipanema-Gasolina',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  
});

const AeronaveIpanemaE_StackNavigator = createStackNavigator({
  TabScreen: {
    screen: AeronaveIpanemaE,
    navigationOptions: ({ navigation }) => ({
      title: 'Embraer - Ipanema-Etanol',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  
});

const Contato_StackNavigator = createStackNavigator({
  TabScreen: {
    screen: Contato,
    navigationOptions: ({ navigation }) => ({
      title: 'Contate-nos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  
});

const TabArenonaves = createBottomTabNavigator({
      ' AT-402B': Aeronaves_StackNavigator,
      'Ipanema G.': AeronaveIpanemaG_StackNavigator,
      'Ipanema E.': AeronaveIpanemaE_StackNavigator,
    }, 
    {
    tabBarOptions: {
      initialRouteName: 'Airtractor AT-402B',
      labelStyle: {
        fontSize: 18,
      },
      style: {
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        
      },
      
    },
   
  }
);

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
  Pulverizacao:{
    screen: Pulverizacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Pulverização',
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Adubacao:{
    screen: Adubacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Adubação',
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Pastagens:{
    screen: Pastagens,
    navigationOptions: ({ navigation }) => ({
      title: 'Pastagens',
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Incendio:{
    screen: Incendio,
    navigationOptions: ({ navigation }) => ({
      title: 'Combate à Incêndios',
      headerStyle: {
        backgroundColor: cores.cores.ColorHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  Plantacao:{
    screen: Plantacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Plantação de Arroz',
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
      drawerIcon: <Icon name="information-variant" type='material-community' size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Valores: {
    screen: Valores_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Nossos Valores',
      drawerIcon: <Image source={require('./src/images/value.png')} style={{width:20, height:20, color:'#176eef'}}/>
    },
  },
  Servicos: {
    screen: Servicos_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Serviçoss',
      drawerIcon: <Icon name='gears' type='font-awesome' size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },
  Aeronaves: {
    screen: TabArenonaves,
    navigationOptions: {
      drawerLabel: 'Aeronaves',
      drawerIcon: <Icon name='plane' type='font-awesome' size={20} color={cores.cores.colorNumeroClassificado} />
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
    screen: Contato_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contato',
      drawerIcon: <Icon name="contacts" type='antdesign' size={20} color={cores.cores.colorNumeroClassificado} />
    },
  },

},{
  drawerType: "front",
  drawerWidth: 230,
  gestureHandlerProps: true
}
);
 
export default createAppContainer(DrawerNavigatorExample);