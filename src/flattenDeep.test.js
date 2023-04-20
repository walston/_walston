const flattenDeep = require("./flattenDeep");

describe("flattenDeep.js", () => {
  test("lodash example", () => {
    const actual = flattenDeep([1, [2, [3, [4]], 5]]);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).toEqual(expected);
  });

  test("pre-flattened", () => {
    const expected = ["a", "b", "c"];
    const actual = flattenDeep(expected);

    expect(actual).toEqual(expected);
  });
});
