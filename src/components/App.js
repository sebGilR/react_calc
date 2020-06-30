import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (buttonName) => this.setState(calculate(this.state), buttonName);

  render() {
    return (
      <div id="calculator">
        <Display result={this.state.total || this.state.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  };
};

export default App;
