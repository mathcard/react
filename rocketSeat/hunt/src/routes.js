import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

//const MainNavigator = createStackNavigator({ Main, Product });

//const MainNavigator = createStackNavigator({ Main, Product });

const MainNavigator = createStackNavigator({ Main },{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#DA552F",
        },
        headerTintColor: "#FFF",
    },

});  

const App = createAppContainer(MainNavigator);
export default App;
