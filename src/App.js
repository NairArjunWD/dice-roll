import React, { Component} from 'react';
import RollDice from './RollDice';
import RollD20 from './RollD20';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
        <RollD20 />
      </div>

      // <div className="App">
      //   <RollD20 />
      // </div>
    );
  }
}

export default App;
