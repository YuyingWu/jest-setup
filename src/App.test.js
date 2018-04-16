import { hello } from './App';

describe('hello', () => {
  test('should output: Hello, WYY', () => {
    expect(hello()).toBe('Hello, WYY');
  });
});