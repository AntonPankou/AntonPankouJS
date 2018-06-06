import { action } from 'mobx';
import * as React from 'react';
import { playersStore, sortPropertyDeaths, sortPropertyKills  } from '../Stores/playersStore';
import './ListHeadStyle.css';

class ListHead extends React.Component {
        
    @action
    public sortByDeaths(){
        playersStore.sort(sortPropertyDeaths);        
    }

    @action
    public sortBykills(){
        playersStore.sort(sortPropertyKills);        
    }    

    public render() {
        return(
            <div className='ap-list-head'>
                <div className='ap-list-head--wrapper'>                    
                    <div className='ap-list--player-name'>Nickname</div>
                    <div className='ap-list--player-status'>Status</div>
                    <div onClick={this.sortBykills} className='ap-list--player-kills'>Kills</div>
                    <div onClick={this.sortByDeaths} className='ap-list--player-deaths'>Deaths</div>
                </div>
           </div>
        )
    }
}

export default ListHead;