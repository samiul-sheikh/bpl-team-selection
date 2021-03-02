import React, { useEffect, useState } from 'react';
import playersData from '../../Data/playersData.json';
import Player from '../Player/Player';
import './Information.css';

const Information = () => {
    const [players, setPlayers] = useState([])
    const [hirePlayer, setHirePlayer] = useState([]);

    useEffect(() => {
        setPlayers(playersData)
        console.log(playersData)
    }, [])

    const handleAddPlayer = (player) => {
        // console.log('player added', player);
        const newHirePlayer = [...hirePlayer, player];
        setHirePlayer(newHirePlayer);
    }

    return (
        <div className="information-container">
            <div className="player-container">
                {
                    players.map(player => <Player
                        handleAddPlayer = {handleAddPlayer}
                        player={player}>
                    </Player>)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
                <h5>Selected Players: {hirePlayer.length}</h5>
            </div>

        </div>
    );
};

export default Information;