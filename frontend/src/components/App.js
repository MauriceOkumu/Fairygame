import React ,{ Component } from 'react';
import Routes from './Routes'
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    
  }
  render() {

  return (
    <div className="App">
      <h2>Welcome</h2>
      <Routes />
    </div>
  );
  }
}

export default App;
