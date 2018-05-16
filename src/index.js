import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      deals: [],
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }  

  render() {
    return (
      <div>
        <h2>Deal with it!</h2>
        <ListOfCases deals={this.state.deals} onClick={this.handleClick}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>            
          </label>
            <input 
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.content}
            />
            <button>New deal</button>
        </form>        
      </div>
    )
  }  
  
  handleClick () {
    this.setState({deals:[]})
  }

  handleChange(e){
    this.setState({content: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();  

    if (!this.state.content.length){
      return;
    };

    const newItem = {
      content: this.state.content,
      id: Math.random()
    };

    this.setState(prevState =>({
      deals: prevState.deals.concat(newItem),
      content: ''
    }));
  }
}

class ListOfCases extends React.Component{
  let onclick = props.onClick
  render () {
    return (
      <ol>
        {this.props.deals.map(deal => (
        <li key={deal.id}>{deal.content}   <DeleteButton onClick={onclick} /></li>
      ))}
      </ol>
    )
  }
}

class DeleteButton extends React.Component{   
  constructor(props){
    super(props);
  }
  let onclick = props.onClick
  render(){
  return <button onClick={this.onclick}>x</button>
  }    
}

ReactDOM.render(
  <App />,
  document.getElementById(`root`)
)