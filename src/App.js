import React, { useState } from 'react';
import Team from './components/Team';
import './App.css';

function App() {

  const [gameFinish, setGameFinish] = useState(false);

  return (
    <div>
      
      <div className="row">
        <h1>Score Board</h1>
      </div>
      
      <div className="row">        
        <Team 
          name="Home Team"
          gameFinish={gameFinish}
          setGameFinish={setGameFinish} />                      

        <div className="team-box-versus">X</div>

        <Team 
          name="Visiting Team"
          gameFinish={gameFinish}
          setGameFinish={setGameFinish} />
      </div>
            
    </div>
  );
}

export default App;
