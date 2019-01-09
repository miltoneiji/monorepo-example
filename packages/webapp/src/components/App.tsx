import React from 'react';

import { sum, multiply } from '@monorepo/core';
import { Button, Paper, LabelValue } from '@monorepo/components';

type Props = {};
type State = {
  counters: number[];
};

class App extends React.Component<Props, State> {
  state = {
    counters: [0, 0],
  };

  incrementCounter = (counterIndex: number, toAdd: number) => {
    this.setState(prevState => {
      const prevCounters = prevState.counters;

      return {
        counters: Object.assign(
          [],
          prevCounters,
          { [counterIndex]: prevCounters[counterIndex] + toAdd }
        ),
      };
    });
  };

  render() {
    const { counters } = this.state;

    return (
      <div style={{ display: 'flex' }}>
        {counters.map((counterValue, idx) => (
          <Paper
            key={idx}
            style={
              {
                display: 'flex',
                flexDirection: 'column',
                margin: 16,
              }
            }
          >
            <LabelValue
              label={`Counter ${idx}`}
              value={counterValue}
              valueTestId={`value-test-id-${idx}`}
            />
            <div style={{ display: 'flex', marginTop: 16 }}>
              <Button
                onClick={() => this.incrementCounter(idx, 1)}
                style={{ marginRight: 8 }}
              >
                Increase {idx}
              </Button>
              <Button onClick={() => this.incrementCounter(idx, -1)}>
                Decrease {idx}
              </Button>
            </div>
          </Paper>
        ))}
        <Paper style={
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: 16,
          }
        }>
          <LabelValue
            label={'Sum'}
            value={sum(counters[0], counters[1])}
          />
          <LabelValue
            label={'Multiply'}
            value={multiply(counters[0], counters[1])}
          />
        </Paper>
      </div>
    );
  }
}

export default App;
