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
  }  

  render() {
    return (
      <div>
        <h2>Deal with it!</h2>
        <ListOfCases deals={this.state.deals} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>            
          </label>
            <input 
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.content}
            />
            <button>Add #{this.state.deals.length + 1}</button>
        </form>        
      </div>
    )
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
  render () {
    return (
      <ul>
        {this.props.deals.map(deal => (
        <li key={deal.id}>{deal.content}</li>
      ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById(`root`)
)