import * as React from 'react';
import './arrowslider.css'

export class ArrowSlider extends React.Component{
    public render(){
        return(
            <div className='ap-arrowslider'>
                <div className='ap-arrowslider--arrow'><i className="fas fa-long-arrow-alt-down"/></div>                
            </div>
        )
    }
}
