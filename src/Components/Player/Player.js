import React from 'react';
import './Player.css';

const Player = (props) => {
    // console.log(props.player);
    const { image, name, role, salary, id } = props.player;

    return (
        <div className="player">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>Role: {role}</h4>
                <h3>Salary: {salary}</h3>
                <h5>Jersey No: {id}</h5>
            </div>
        </div>
    );
};

export default Player;