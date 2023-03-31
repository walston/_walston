const chunk = require("./chunk");

describe("chunk.js", () => {
  test("basic implementation with default chunk size", () => {
    const result = chunk("abcdefg".split(""));
    const expected = [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"]];
    expect(result).toBeDeeplyEqualTo(expected);
  });

  test("basic implementation with chunk size", () => {
    const result = chunk("abcdefg".split(""), 3);
    const expected = [["a", "b", "c"], ["d", "e", "f"], ["g"]];
    expect(result).toBeDeeplyEqualTo(expected);
  });

  test("Doesn't accept invalid inputs", () => {
    expect(() => chunk("abcdefg".split(""), -15)).toThrow();
    // @ts-ignore
    expect(() => chunk("abcdefg".split(""), "a")).toThrow();
  });
});
