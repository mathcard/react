import React, { Component } from 'react'; 
import api from '../services/api';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


export default class Main extends Component{
    // Titulo da appBar
    static navigationOptions = {
        title: "JSHunt Math"       
    };
    
    // ESTADO Objeto que serve para armazenar toda informação manipulada dentro da classe.
    // Sempre que houver modificação no estado, o React executa o render.
    state = {
        productInfo: {},
        counter: 0,
        docs: [],
        page: 1,
    };

    // Chamando a API
    componentDidMount(){
        this.loadProducts();
    }

    // Funções que não são do React precisam ser arrow function para localizar o this
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        console.log(docs);
        this.setState({  docs: [...this.state.docs, ...docs], productInfo, page}); // Manter as informações e adicionar as novas
        
    };
    
    loadMore = () => {
        const {page, productInfo} = this.state;
        if(page == productInfo.pages) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };


    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.productButton} onPress={() => { //Fica mais claro ao clicar
                this.props.navigation.navigate('Product', {product: item});
            } }>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    data={this.state.docs} // variavel armazena os dados
                    keyExtractor={item => item._id} // Key obrigatorio quando utiliza o map
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}     
                    onEndReachedThreshold={0.1} // 10% para carregar a proxima pagina
                 />
            </View>            
        );
    }
    /*<View>
        <Text>Página Main: {this.state.counter}</Text>
            {this.state.docs.map(product => (
            <Text key={product._id}>{product.title}</Text>
        ))}
    </View> */
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //Ocupa a tela toda
        backgroundColor: "#fafafa"
    },

    list:{
        padding: 20
    },

    productContainer:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription:{
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552f",
        backgroundColor: "transparent",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    },

    productButtonText:{
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }

});