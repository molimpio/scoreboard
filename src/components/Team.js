import React, { useState, useEffect } from "react";
import './Team.css';

const NUMBER_GOLS_WINNER_TEAM = 3;

function Team(props) {

    const [goal, setGoal] = useState(0);
    const [statusTeam, setStatusTeam] = useState('');

    useEffect(() => {
        if (goal === NUMBER_GOLS_WINNER_TEAM) {
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
                <h2 className="team-title">{props.name}</h2>
                <h2 className="team-goal">{goal}</h2>
                {props.gameFinish ? '' :
                    <button className="button" onClick={() => setGoal(goal + 1)}>Goal</button>
                }
                <h3 className="team-goal">{statusTeam}</h3>
            </div>
        </div>
    );
}

export default Team;