// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 1,
      b: 4,
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 7,
      b: 4,
      action: Action.Subtract,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(3);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 2,
      b: 4,
      action: Action.Multiply,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 4,
      b: 2,
      action: Action.Divide,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 2,
      b: 3,
      action: 'Some invalid Action',
    };
    const result = simpleCalculator(input);
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: true,
      b: 'definitely not a number',
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(null);
  });
});
