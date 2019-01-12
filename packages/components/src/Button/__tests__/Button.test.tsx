import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from '../';

describe('<Button />', () => {
  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>ClickMe!</Button>);

    expect(onClick.mock.calls.length).toBe(0);
    fireEvent.click(getByText('ClickMe!'));
    expect(onClick.mock.calls.length).toBe(1);
  });
});
