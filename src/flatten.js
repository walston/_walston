/**
 * @param {any[]} array
 * @returns {any[]}
 */
module.exports = function flatten(array) {
  const ret = [];
  for (let i = 0; i <= array.length; i++)
    if (Array.isArray(array[i]))
      for (let j = 0; j < array[i].length; j++) ret.push(array[i][j]);
    else ret.push(array[i]);
  return ret;
};
