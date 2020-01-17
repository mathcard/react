import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';

function App() {
  // Atribua uma variavel a uma função, insere os dados atraves do estado 
  const [devs, setDevs] = useState([]);
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
  
// Dispara uma função quando alguma informação alterar
useEffect(() => {
  async function loadDevs(){
    const response = await api.get('/devs');
    setDevs(response.data);
  }
  loadDevs();
}, []);


async function handleAddDev(e){
  e.preventDefault();
  
  const response = await api.post('/devs', {
    github_username,
    techs,
    latitude,
    longitude,
  })
  //console.log(response.data);

  // Limpando os formularios
  setGithub_username('');
  setTechs('');
  
  // Chamando a função que lista os dados e adicionando na ultima posição
  setDevs([...devs, response.data]);
}

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
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
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev}/>
        ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
