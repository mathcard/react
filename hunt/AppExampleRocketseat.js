import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'

/* Componente - geralmente escrito como classe e é exportado. 1 por arquivo */
export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>      
        <View style={styles.box}/>

      </View> 
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,    
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "#F00",    
  }
});
/* justifyContent: "flex-start" ou flex-end
Comandos faltando: npm add react-navigation
Pasta src

*/