const { expect } = require("@jest/globals");

function assert(truthy, message) {
  if (!truthy) {
    throw Error(message);
  }
}

expect.extend({
  /**
   * @param {any[][]} actual
   * @param {any[][]} expectation */
  toBeDeeplyEqualTo(actual, expectation) {
    try {
      assert(actual.length === expectation.length, "Does not match");
      for (let i = 0; i < actual.length; i++) {
        const a = actual[i];
        const e = expectation[i];
        assert(a.length === e.length, "Does not match");
        for (let j = 0; j < actual[i].length; j++) {
          const aa = a[j];
          const ee = e[j];
          assert(aa == ee, "Does not match");
        }
      }
    } catch (error) {
      return {
        pass: false,
        message: () => error.message,
      };
    }
    return {
      pass: true,
      message: () => "",
    };
  },
  /**
   * @param {any[]} actual
   * @param {any[]} expected
   */
  toHaveSameElements(actual, expected) {
    try {
      assert(actual.length === expected.length);
      for (let i = 0; i < actual.length; i++) {
        assert(actual[i] === expected[i]);
      }
    } catch (err) {
      return {
        pass: false,
        message: () => err,
      };
    }
    return {
      pass: true,
      message: () => "",
    };
  },
});
