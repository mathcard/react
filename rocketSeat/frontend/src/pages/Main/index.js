import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';

export default class Main extends Component {
  // Informa o estado e declara a variavel que será alterada
  state = {
    newBox: '',
  };

  // Ao enviar o form, sa
  handleSubmit = async (event) =>{
    event.preventDefault();
    const response = await api.post('/boxes', {
      title: this.state.newBox
    });
    //console.log(response.data);
    this.props.history.push(`/box/${response.data._id}`);
  }

  // Sempre que o input for alterado, atualiza o valor da variavel newBox
  handleInputChange = (event) => {
    this.setState({ newBox: event.target.value});    
  }
  
  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit} action="">
                <img src={logo} alt=""/>
                <input placeholder="Criar um box"
                  value={this.state.newBox}
                  onChange={this.handleInputChange}
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
  }
}
