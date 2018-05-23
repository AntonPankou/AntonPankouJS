import React, { Component } from 'react';
import './ListHeadSlyle.css'

class ListHead extends Component {    
    render() {
        return(
            <div className='ap-list-head'>
                <div className='ap-list-head--wrapper'>                    
                    <div className='ap-list--player-name'>Nickname</div>
                    <div className='ap-list--player-status'>Status</div>
                    <div className='ap-list--player-kills'>Kills</div>
                    <div className='ap-list--player-deaths'>Deaths</div>
                </div>
           </div>
        )
    }
}

export default ListHead;
