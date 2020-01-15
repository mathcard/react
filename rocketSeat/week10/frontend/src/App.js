import React from 'react';
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor=""> Usuário do Github</label> 
          <input name="github_username" id="github_username" required/>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
