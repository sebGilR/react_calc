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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    let result = total || next;
    if (total && next && operation) {
      result = `${total} ${operation.toLowerCase()} ${next}`
    } else if (total && operation) {
      result = `${total} ${operation.toLowerCase()}`
    }

    return (
      <div id="calculator">
        <Display result={result || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  };
};

export default App;
