import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.jsx';
import './App.css';

class App extends Component {
  constructor(){
    // super calls the constructor method on the Component class
    super();

    this.state = {
      monsters : []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({monsters:users}));
  }



  render() {
    return (
      <div className="App">
      <CardList name='J'>
      {
        this.state.monsters.map(monster =>
        <h1 key={monster.id}>{monster.name}</h1>)
      }
      </CardList>

      </div>
    )
  }
}

export default App;
