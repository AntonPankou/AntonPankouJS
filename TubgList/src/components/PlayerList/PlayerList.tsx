import * as React from 'react';
import IPlayer from '../Interfaces'
import playersStore from '../Stores/playersStore';
import './PlayerListStyle.css';


function TableBlock(props: any){
    return <div className={props.className}>{props.content}</div>
}

const listItems = playersStore.map((player: IPlayer) =>
    <div key={player.name}>
        <div className='ap-list-wrapper'>            
            <TableBlock  content={player.name} className='ap-list--player-name' />
            <TableBlock  content={player.active ? 'In fight' : 'R.I.P'} className='ap-list--player-status' />
            <TableBlock  content={player.kills} className='ap-list--player-kills' />
            <TableBlock  content={player.deaths} className='ap-list--player-deaths' />            
        </div>
    </div>
)


export default class PlayerList extends React.Component<{},{}>{    
    public render() {
        return(
            <div className='ap-list'>{listItems}</div>
        )
    }
}

