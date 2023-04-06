const flatten = require("./flatten");

describe("flatten.js", () => {
  test("lodash example", () => {
    const actual = flatten([1, [2, [3, [4]], 5]]);
    const expected = [1, 2, [3, [4]], 5];
    expect(actual).toEqual(expected);
  });
  test("deep nesting", () => {
    const actual = flatten(["a", ["b"], ["c"], [["d"]], "e"]);
    const expected = ["a", "b", "c", ["d"], "e"];
    expect(actual).toEqual(expected);
  });
  test("shallow & wide nesting", () => {
    const actual = flatten(["a", ["b", "c", "d"], "e"]);
    const expected = ["a", "b", "c", "d", "e"];
    expect(actual).toEqual(expected);
  });
});
