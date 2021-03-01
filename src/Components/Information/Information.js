import React, { useEffect, useState } from 'react';
import playersData from '../../Data/playersData.json';
import Player from '../Player/Player';
import './Information.css';

const Information = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(playersData)
        console.log(playersData)
    }, [])

    return (
        <div className="information-container">
            <div className="player-container">
                {
                    players.map(player => <Player player={player}> </Player>)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>

        </div>
    );
};

export default Information;