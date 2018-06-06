import * as React from 'react';
import './header.css';

export class Header extends React.Component{

    public render() {
        return (
        <div className='ap-header'>
            <div className='ap-header--wrapper'>                              
                <div className='ap-search'>
                    <div className='ap-search--block'>
                        <div className='ap-search-title'>Search</div>
                        <input type="text" placeholder='search...'/>
                        <div><i className="fas fa-sign-in-alt" /></div>
                    </div>
                </div>

                <div className='ap-header--navigation'>
                    <div className='ap-navigation'>
                        <div className='ap-navigation--wrapper'>
                            <div className='ap-navigation--page'>Add</div>
                            <div className='ap-navigation--page'>About</div>
                            <div className='ap-navigation--page'>Pricing</div>
                            <div className='ap-navigation--page'>Blog</div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        )
            
    }
}