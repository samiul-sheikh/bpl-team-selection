import React from 'react';

const Player = (props) => {
    console.log(props.player);
    return (
        <div>
            {/* <h3>This is player</h3> */}
            <h4>{props.player.name}</h4>
            <p>{props.player.role}</p>
        </div>
    );
};

export default Player;