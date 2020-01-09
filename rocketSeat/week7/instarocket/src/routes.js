import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

/*import { Image } from 'react-native';
//import 'react-native-gesture-handler';


import Feed from './pages/Feed';
import New from './pages/New';

//import logo from './assets/logo.png';

export default createAppContainer(
  createStackNavigator({
    Feed, 
    New,
  })
); */

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);