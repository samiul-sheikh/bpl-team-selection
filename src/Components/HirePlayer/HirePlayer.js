import React from 'react';

const HirePlayer = (props) => {
    const hirePlayer = props.hirePlayer;
    console.log(hirePlayer);
    // const total = hirePlayer.reduce((total, pl) => total + pl.salary, 0)

    let total = 0;
    for(let i = 0; i <hirePlayer.length; i ++){
        const player = hirePlayer[i]
        total = total + player.salary;
    }

    return (
        <div>
            <h2>Total Information</h2>
            <h4>Selected Players : {hirePlayer.length}</h4>
            <h4>Total Cost : {total}</h4>
        </div>
    );
};

export default HirePlayer;