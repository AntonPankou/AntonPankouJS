import * as React from 'react';
import './App.css';

import { ArrowSlider} from './components/arrowslider/arrowslider';
import { Content } from './components/content/content';
import { Header } from './components/header/header';
import  { Sidebar }  from './components/sidebar/sidebar';

export default class App extends React.Component {
  public render() {
    return (
      <div className='ap-global-container'>
        <div className='ap-global-container--wrapper'>
            <div className='ap-global-container--sidebar'>
              <Sidebar />
            </div >

            <div className='ap-global-container--content-wrapper'>
              <div className='ap-global-container--header'>
                <Header />
              </div>              
              <div className='ap-global-container--content'>
                <Content />
              </div>
              <div className='ap-global-container--arrowslider'>
                <ArrowSlider />
              </div>
            </div>
        </div>        
      </div>
    );
  }
}