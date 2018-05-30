import * as React from 'react';
import playersStore from '../Stores/playersStore'
import './ListHeadStyle.css'


class ListHead extends React.Component<{},{}> {
    constructor(props: {}){
        super(props);
        this.sortByDeaths = this.sortByDeaths.bind(this);
        this.sortBykills = this.sortBykills.bind(this);
        this.state = {playersStore}
    }

    public sortByDeaths(){

    }

    public sortBykills(){
        
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