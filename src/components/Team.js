import React, { useState, useEffect } from "react";
import './Team.css';

function Team(props) {

    const [goal, setGoal] = useState(0);
    const [statusTeam, setStatusTeam] = useState('');

    useEffect(() => {
        if (goal === 3) {
            function setWinner() {
                setStatusTeam('Winner!');
                props.setGameFinish(true);
            }
            setWinner();
        }
    });

    return (
        <div className="team-box">
            <div className="team-item">
                <h2>{props.name}</h2>
                <h2>{goal}</h2>
                {props.gameFinish ? '' :
                    <button onClick={() => setGoal(goal + 1)}>Goal</button>
                }
                <h3>{statusTeam}</h3>
            </div>
        </div>
    );
}

export default Team;