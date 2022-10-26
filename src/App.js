import React, { useState, useEffect } from 'react';
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
        <div className="team-box">
          <div className="team-item">
            <h2>Home Team</h2>
            <h2>{goalHomeTeam}</h2>
            {gameFinish ? '' :
              <button onClick={() => setGoalHomeTeam(goalHomeTeam + 1)}>Goal</button>
            }
            <h3>{statusHomeTeam}</h3>
          </div>
        </div>

        <div className="team-box-versus">X</div>

        <div className="team-box">
          <div className="team-item">
            <h2>Visiting Team</h2>
            <h2>{goalVisitingTeam}</h2>            
            {gameFinish ? '' :
              <button onClick={() => setGoalVisitingTeam(goalVisitingTeam + 1)}>Goal</button>
            }
            <h3>{statusVisitingTeam}</h3>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
