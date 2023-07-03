// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'Provided value';
    const resolvedValue = await resolveValue(value);

    expect(resolvedValue).toBe(value);
  });
});

describe('throwError', () => {
  const message = 'An error thrown';
  test('should throw error with provided message', () => {
    expect(() => throwError(message)).toThrow(message);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    try {
      await rejectCustomError();
    } catch (error) {
      expect(error).toBeInstanceOf(MyAwesomeError);
    }
  });
});
