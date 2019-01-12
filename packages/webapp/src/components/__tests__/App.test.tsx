import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import App from '../App';

describe('Webapp', () => {
  it('Increments counter 0', () => {
    const { container, getByTestId, getByText } = render(<App />);
    expect(getByTestId('value-test-id-0').textContent).toEqual('0');
    fireEvent.click(getByText('Increase 0'));
    expect(getByTestId('value-test-id-0').textContent).toEqual('1');
  });
});
