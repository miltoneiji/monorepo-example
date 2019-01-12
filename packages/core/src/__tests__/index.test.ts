import { multiply, sum } from '../';

describe('sum', () => {
  it('works', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('multiply', () => {
  it('works', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});
