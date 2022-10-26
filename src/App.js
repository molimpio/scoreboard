import React, { useState, useEffect } from 'react';
import Team from './components/Team';
import './App.css';

function App() {
  
  const [goalHomeTeam, setGoalHomeTeam] = useState(0);
  const [goalVisitingTeam, setGoalVisitingTeam] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);

  const [statusHomeTeam, setStatusHomeTeam] = useState('');
  const [statusVisitingTeam, setStatusVisitingTeam] = useState('');

  useEffect(() => {
    if (goalHomeTeam === 3) {
      function setWinnerHomeTeam() {
        setStatusHomeTeam('Winner!');
        setGameFinish(true);
      }
      setWinnerHomeTeam();

    } else if (goalVisitingTeam === 3) {
      function setWinnerVisitingTeam() {
        setStatusVisitingTeam('Winner!');
        setGameFinish(true);
      }
      setWinnerVisitingTeam();
    }
  });

  return (
    <div>
      
      <div className="row">
        <h1>Score Board</h1>
      </div>
      
      <div className="row">        
        <Team 
          name="Home Team" 
          goals={goalHomeTeam}
          gameFinish={gameFinish}
          goalTeam={goalHomeTeam}
          statusTeam={statusHomeTeam}
          setGoalTeam={setGoalHomeTeam} />                      

        <div className="team-box-versus">X</div>

        <Team 
          name="Visiting Team"
          goals={goalVisitingTeam}
          gameFinish={gameFinish}
          goalTeam={goalVisitingTeam}
          statusTeam={statusVisitingTeam}
          setGoalTeam={setGoalVisitingTeam} />
      </div>
            
    </div>
  );
}

export default App;
