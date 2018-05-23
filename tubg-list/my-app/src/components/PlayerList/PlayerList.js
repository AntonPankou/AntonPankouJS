import React, { Component } from 'react';
import tankstore from '../Stores/store';
import'./PlayerListStyle.css';

let playerData = tankstore[0].name;

let listItems = tankstore.map((player) =>
    <div key={Math.random()}>
        <div className='ap-list-wrapper'>            
            <div className='ap-list--player-name'>{player.name}</div>
            <div className='ap-list--player-status'>{player.active ? 'In fight' : 'R.I.P'}</div>
            <div className='ap-list--player-kills'>{player.kills}</div>
            <div className='ap-list--player-deaths'>{player.deaths}</div>
        </div>
    </div>
)

PlayerData

class PlayerList extends Component{    
    render() {
        return(
            <div className='ap-list'>{playerData}</div>
        )
    }
}

export default PlayerList;