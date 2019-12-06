import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View styles={styles.container}>
        <Text styles={styles.welcome}> Welcome to React Native Math</Text>       
        <View styles={styles.box}>
        </View> 
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