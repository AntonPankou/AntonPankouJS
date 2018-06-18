import * as React from 'react';
import './sidebar.css';

export class Sidebar extends React.Component {
  
  public render() {
      return (
        <div className='ap-sidebar'>
        <div className='ap-sidebar--wrapper'>

            <div className='ap-sidebar-topwrapper'>
              <div className="ap-sidebar-topwrapper--bar-button"><i className="fas fa-bars" /></div>            
              <div className="ap-sidebar-topwrapper--logo"><i className="fas fa-chalkboard-teacher" /></div>
            </div>

            <div className='ap-buttonsection-wrapper'>
              <div className='ap-buttonsection-wrapper--button-block'>
                <div><i className="fas fa-film" /></div>
                <div className='ap-buttonsection-wrapper--title'>Movies</div>
              </div>

              <div className='ap-buttonsection-wrapper--button-block'>
                <div><i className="fas fa-tv" /></div>
                <div className='ap-buttonsection-wrapper--title'>TV shows</div>
              </div>

              <div className='ap-buttonsection-wrapper--button-block'>
                <div><i className="far fa-file-alt" /></div>
                <div className='ap-buttonsection-wrapper--title'>My Library</div>
              </div>

              <div className='ap-buttonsection-wrapper--button-block'>
              <div ><i className="far fa-question-circle"/></div>
                <div className='ap-buttonsection-wrapper--title'>Support</div>
              </div>

            </div>
        </div>
      </div>
      )
          
  }
}