const compact = require("./compact");

describe("compact.js", () => {
  test("removes falsey indices", () => {
    const actual = compact([0, 1, 2, 3, 4, 5]);
    const expectation = compact([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expectation);
  });
});
