import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

//<h1>{match.params.id}</h1> Chamando id passado

export default function Main({ match }){
  return(    
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars0.githubusercontent.com/u/428081?v=4" alt=""/>
          <footer>
            <strong>Matheus do Carmo</strong>
            <p>Developer NodeJs, ReactJs and React Native</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/428081?v=4" alt=""/>
          <footer>
            <strong>Matheus do Carmo</strong>
            <p>Developer NodeJs, ReactJs and React Native</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/428081?v=4" alt=""/>
          <footer>
            <strong>Matheus do Carmo</strong>
            <p>Developer NodeJs, ReactJs and React Native</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/428081?v=4" alt=""/>
          <footer>
            <strong>Matheus do Carmo</strong>
            <p>Developer NodeJs, ReactJs and React Native</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars0.githubusercontent.com/u/428081?v=4" alt=""/>
          <footer>
            <strong>Matheus do Carmo</strong>
            <p>Developer NodeJs, ReactJs and React Native</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}