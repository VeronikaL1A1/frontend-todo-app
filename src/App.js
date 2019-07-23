import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import Todo from './Todo.js';

function App() {
  return (
    <div className="App p-3">
      
      <Todo title="Nakupny zoznam" createdAt="23.5.2017" finished={true}>
        <ul>
          <li>Cokolada</li>
          <li>Pralinky</li>
          <li>Vino</li>
       </ul>
      </Todo>
      <Todo title="Uprac byt" createdAt="5.7.2019" finished={false}/>
    </div>
  );
}

export default App;
