/**
 *
 * @param {object} destination
 * @param {...object} sources
 * @returns void;
 */
module.exports = function merge(destination, ...sources) {
  for (const source of sources) {
    merger(source);
  }

  /** @param {{ [key: string | number]: string | number | boolean | object | Array }} source */
  function merger(source) {
    for (const key of Object.keys(source)) {
      if (typeof source[key] === "object") {
        if (destination[key] === null) destination[key] = source[key];
        else destination[key] = merge(destination[key], source[key]);
      } else {
        destination[key] = source[key];
      }
    }
  }

  return destination;
};
