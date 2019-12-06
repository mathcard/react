import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../services/api';

export default class Main extends Component{
    static navigationOptions = {
        title: "JS Hunt"
    };

    //state = {}
/*
    componentDidMount(){ // Disparado automaticamente
        this.loadProducts();        
    }

    loadProducts = () => {
        const response = await api.get('/products');

        const { docs } = response.data;
        
        console.log(docs);
    };*/

    render(){
        return(
            <View>
                <Text> Página Main Math</Text>
            </View>
        );
    }
}