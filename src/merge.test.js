const merge = require("./merge");

describe("merge.js", () => {
  test("less complex example", () => {
    const actual = merge({ a: { b: 2, d: 4 } }, { a: { c: 3, e: 5 } });
    const expected = {
      a: { b: 2, c: 3, d: 4, e: 5 },
    };
    expect(actual).toEqual(expected);
  });

  test("less complex example", () => {
    const actual = merge(
      { a: { b: 2, c: { z: 3 }, d: 4 } },
      { a: { /* */ c: { x: 3 }, e: 5 } }
    );
    const expected = {
      a: { b: 2, c: { x: 3, z: 3 }, d: 4, e: 5 },
    };
    expect(actual).toEqual(expected);
  });

  test("lodash example", () => {
    const actual = merge(
      { a: [{ b: 2 }, { d: 4 }] },
      { a: [{ c: 3 }, { e: 5 }] }
    );
    const expected = {
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("get fucked example", () => {
    const actual = merge({ a: null }, { a: [{ c: 3 }, { e: 5 }] });
    const expected = {
      a: [{ c: 3 }, { e: 5 }],
    };
    expect(actual).toEqual(expected);
  });
});
