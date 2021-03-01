import React, { useEffect, useState } from 'react';
import playersData from '../../Data/playersData.json';

const Information = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(playersData)
        console.log(playersData)
    }, [])

    return (
        <div>
            <h1>Total Players: {players.length}</h1>
            <ul>
                {players.map(player => <li>{player.name}</li>)}
            </ul>
        </div>
    );
};

export default Information;