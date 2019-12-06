import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
//export default createStackNavigator({
    
export default createAppContainer({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    },
});