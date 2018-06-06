import * as React from 'react';
import ListHead from './components/ListHead/ListHead';
import PlayerList from './components/PlayerList/PlayerList';

class App extends React.Component{
  public render(){
    return(
      <div className='ap-app-wrapper'>
        <ListHead />
        <PlayerList />
      </div>
    )
  }
}

export default App;
