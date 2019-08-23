import React from 'react';
import './App.css';
import Header from './componentes/header';
import Menu from './componentes/menu';
import Main from './componentes/main';

function App() {
  return (

    

    <div className="App">
 
      
      <Header />
      
      <div className="content">
        <Menu />
        <Main />
      </div>
      

    </div>
  );
}

export default App;
