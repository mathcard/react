import React, { Component } from 'react';
import api from '../services/api';
import './Feed.css';

import more from '../assets/more.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';


class Feed extends Component {
  
  // Variavel dentro do componente para armazenar informações que serão alteradas  
  state = {
    feed : [],
  };

  // Executa automaticamente qdo componente e colocado em tela
  async componentDidMount(){
    const response = await api.get('posts');

    // Alterando o valor da variavel com os dados da api
    this.setState({ feed: response.data });
  }
  
  render(){
    return (
      <section id="post-list">
        { this.state.feed.map(post => (          
          <article key={post._id}>
          { /* Sempre que usar map precisa de uma key*/}
          <header>
            <div className="user-info">
              <span> {post.author}</span>
              <span className="place"> {post.place}</span>
            </div>
            <img src={more} alt="Mais"/>
          </header>
          <img src={`http://localhost:3333/files/${post.image}`} alt="" />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />                
            </div>              
            <strong> {post.likes}</strong>
            <p>
              {post.description}
              <span>{post.hashtags}</span>
            </p>
          </footer>
      </article>        
        ))}
        
      </section>
    );
  }
}

export default Feed;