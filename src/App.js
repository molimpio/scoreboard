import React, { useState } from 'react';
import Team from './components/Team';
import './App.css';

function App() {

  const [gameFinish, setGameFinish] = useState(false);

  return (
    <div className="container">
      
      <div className="row">
        <h1 className="title">Score Board</h1>
      </div>

      {gameFinish ?
        <div className="row">
          <button className="button" onClick={() => setGameFinish(false)}>Reset Game</button>
        </div>
        :
        <div className="row">        
          <Team 
            name="Home Team"
            gameFinish={gameFinish}
            setGameFinish={setGameFinish} />                      

          <div className="team-box-versus">VS</div>

          <Team 
            name="Visiting Team"
            gameFinish={gameFinish}
            setGameFinish={setGameFinish} />
        </div>
      }
            
    </div>
  );
}

export default App;
