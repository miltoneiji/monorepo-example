import React from 'react';
import ReactDOM from 'react-dom';

import { sum } from '@monorepo/core';
import { Button } from '@monorepo/components';

type Props = {};
type State = {
  counters: number[];
};

class App extends React.Component<Props, State> {
  state = {
    counters: [0, 0],
  };

  incrementCounter = (counterIndex: number) => {
    this.setState(prevState => {
      const prevCounters = prevState.counters;

      return {
        counters: Object.assign(
          [],
          prevCounters,
          { [counterIndex]: prevCounters[counterIndex] + 1 }
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Counter A:</h3>
          <p>{this.state.counters[0]}</p>
        </div>
        <div>
          <h3>Counter B:</h3>
          <p>{this.state.counters[1]}</p>
        </div>
        <Button onClick={() => this.incrementCounter(0)} title={'Increment A'} />
        <Button onClick={() => this.incrementCounter(1)} title={'Increment B'} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
