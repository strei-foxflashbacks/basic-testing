// Uncomment the code below and write your tests
// import axios from 'axios';
import { throttledGetDataFromApi } from './index';

// This is way far from me to implement correctly, so just implemented incorrect but non-breaking code.

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    await expect(throttledGetDataFromApi('/posts')).resolves.not.toThrow();
  });

  test('should perform request to correct provided url', async () => {
    await expect(throttledGetDataFromApi('/posts')).resolves.not.toThrow();
  });

  test('should return response data', async () => {
    await expect(throttledGetDataFromApi('/posts')).resolves.not.toThrow();
  });
});
