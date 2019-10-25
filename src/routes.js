import React from 'react';

import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();


import Home from './pages/Home';
import Itagro from './pages/Itagro';
import Notices from './pages/Notices';

 
  
//   const App = createAppContainer(MainNavigator);
  
//   export default App;

// const mainNavigation = createStackNavigator({
//     Home: {screen: Home},
//     Itagro: {screen: Itagro},
//   });


const mainNavigation = createDrawerNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        drawerIcon: <Icon name="adn" size={20} color="#7159c1" />,
        
      }),
    },
    Itagro: {
      screen: Itagro,
      navigationOptions: () => ({
        
        drawerIcon: <Icon name="rocket" size={20} color="#7159c1" />,
      }),
    },
  });
  
  export default createAppContainer(mainNavigation);





// const MainNavigator = createStackNavigator({
//     Home: {screen: Home},
//     Itagro: {screen: Itagro},
//   });
  
//   const App = createAppContainer(MainNavigator);
  
//   export default App;

// const Routes = createAppContainer(
    
//     createStackNavigator({
//         Home,
//         Itagro,
//         Notices

//     }
//     )



// );


// export default Routes;


// const Routes = createAppContainer(
    
//     createAnimatedSwitchNavigator({
//         Home,
//         Itagro,
//         Notices

//     },
//         {
//             transition: (
//                 <Transition.Together>
//                     <Transition.Out
//                         type="slide-bottom"
//                         durationMs={800}
//                         interpolation="easeIn"
//                     />
//                     <Transition.In type="fade" durationMs={1000} />
//                 </Transition.Together>
//             ),
//         }
//     )



// );

// const Routes = createAppContainer(
//     createStackNavigator({
//       Home: Home,
//       About: Itagro,
//     })
//   );
