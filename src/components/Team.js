import React from "react";
import '../App.css';

function Team(props) {
    return (
        <div className="team-box">
            <div className="team-item">
                <h2>{props.name}</h2>
                <h2>{props.goals}</h2>
                {props.gameFinish ? '' :
                <button onClick={() => props.setGoalTeam(props.goalTeam + 1)}>Goal</button>
                }
                <h3>{props.statusTeam}</h3>
            </div>
        </div>
    );
}

export default Team;