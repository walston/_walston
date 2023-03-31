export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeDeeplyEqualTo(expected: any[][]): R;
      toHaveSameElements(expected: any[]): R;
    }
  }
}
