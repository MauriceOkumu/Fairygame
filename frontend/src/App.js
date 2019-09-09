import React ,{ Component } from 'react';
import Login from './Login'
import './App.css';

class App extends Component {
  // console.log('Hurray', this)
  constructor() {
    super()
  }
  componentDidMount() {
    // console.log('Hurray', this.children)
  }
  render() {
    // console.log('Hurray', this)
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Fairy Game
        </a>
      </header>
      <Login />
    </div>
  );
  }
}

export default App;
