import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  // Dispara uma função quando alguma informação alterar
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       // console.log(position);
      const { latitude, longitude} = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);

      },
      (err)=> { 
        console.log(err);
      },
      {
        timeout: 30000,
      }

    );
  }, []);
  
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do Github</label> 
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}              
              onChange={ e=> setGithub_username(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs"> Tecnologias</label> 
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={ e=> setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude"> Latitude</label> 
              <input 
                type="number"
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude"> Longitude </label> 
              <input 
                type="number"
                name="longitude"
                id="longitude" 
                required 
                value={longitude} 
                onChange={e => setLatitude(e.target.value)} 
              />
            </div>
          </div>
          
          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28113945?s=460&v=4" alt="Matheus do Carmo"/>
              <div className="user-info">
                <strong>Matheus do Carmo</strong>
                <span>React Js, React Native, Node.js</span>
              </div>            
            </header>
            <p>Student developer in news tecnologies!</p>
            <a href="https://github.com/mathcard">Acessar perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28113945?s=460&v=4" alt="Matheus do Carmo"/>
              <div className="user-info">
                <strong>Matheus do Carmo</strong>
                <span>React Js, React Native, Node.js</span>
              </div>            
            </header>
            <p>Student developer in news tecnologies!</p>
            <a href="https://github.com/mathcard">Acessar perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28113945?s=460&v=4" alt="Matheus do Carmo"/>
              <div className="user-info">
                <strong>Matheus do Carmo</strong>
                <span>React Js, React Native, Node.js</span>
              </div>            
            </header>
            <p>Student developer in news tecnologies!</p>
            <a href="https://github.com/mathcard">Acessar perfil</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28113945?s=460&v=4" alt="Matheus do Carmo"/>
              <div className="user-info">
                <strong>Matheus do Carmo</strong>
                <span>React Js, React Native, Node.js</span>
              </div>            
            </header>
            <p>Student developer in news tecnologies!</p>
            <a href="https://github.com/mathcard">Acessar perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
