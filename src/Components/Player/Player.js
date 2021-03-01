import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props.player);
    const { image, name, role, salary } = props.player;

    return (
        <div className="player">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>Role: {role}</h4>
                <h4>Salary: {salary}</h4>
                <button className="hire-button"><FontAwesomeIcon icon={faUserPlus} />Hire Player</button>
            </div>
        </div>
    );
};

export default Player;