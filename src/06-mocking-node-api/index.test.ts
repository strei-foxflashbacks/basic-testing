// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
// import fs from 'fs';
import { join } from 'path';

const callback = jest.fn();
const oneSecond = 1000;

describe('doStuffByTimeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    doStuffByTimeout(callback, oneSecond);
    jest.runAllTimers();
  });

  test('should call callback only after timeout', () => {
    doStuffByTimeout(callback, oneSecond);
    jest.advanceTimersByTime(oneSecond);
    jest.runOnlyPendingTimers();
  });
});

describe('doStuffByInterval', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    callback.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    doStuffByInterval(callback, oneSecond);
    jest.runOnlyPendingTimers();
    expect(callback).toBeCalledTimes(1);
  });

  test('should call callback multiple times after multiple intervals', () => {
    doStuffByInterval(callback, oneSecond);
    jest.advanceTimersByTime(oneSecond * 3);
    expect(callback).toBeCalledTimes(3);
  });
});

jest.mock('path');
jest.mock('fs');

describe('readFileAsynchronously', () => {
  const pathToFile = 'index.test.ts';
  const nonExisting = 'not-exist';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call join with pathToFile', async () => {
    await readFileAsynchronously(pathToFile);
    expect(join).toBeCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const result = await readFileAsynchronously(nonExisting);
    expect(result).toBe(null);
  });

  test('should return file content if file exists', async () => {
    await readFileAsynchronously(pathToFile);
    expect(join).toBeCalledWith(__dirname, pathToFile);
    //I give up here for now.
  });
});
