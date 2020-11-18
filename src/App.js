import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    // super calls the constructor method on the Component class
    super();

    this.state = {
      monsters : [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        },
      ]
      ]
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({string: 'Hello Tad'})}>Change Text</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
