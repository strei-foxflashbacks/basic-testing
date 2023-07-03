// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 1, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 8, b: 10, action: Action.Subtract, expected: -2 },
  { a: 3, b: 8, action: Action.Multiply, expected: 24 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 5, b: 2, action: Action.Multiply, expected: 10 },
  { a: 88, b: 2, action: Action.Divide, expected: 44 },
  { a: 30, b: 3, action: Action.Divide, expected: 10 },
  { a: 48, b: 6, action: Action.Divide, expected: 8 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 5, b: 3, action: Action.Exponentiate, expected: 125 },
  { a: 8, b: 5, action: Action.Exponentiate, expected: 32768 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'performs correct calculations',
    ({ a, b, action, expected }) => {
      const input = {
        a: a,
        b: b,
        action: action,
      };
      expect(simpleCalculator(input)).toBe(expected);
    },
  );
});
