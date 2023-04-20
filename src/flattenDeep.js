/**
 * Recursively flattens array
 * @param {any[]} array
 * @return {any[]}
 */
module.exports = function flattenDeep(array) {
  const ret = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flattened = flattenDeep(array[i]);
      for (let j = 0; j < flattened.length; j++) {
        ret.push(flattened[j]);
      }
    } else {
      ret.push(array[i]);
    }
  }
  return ret;
};
