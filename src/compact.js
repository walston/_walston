/** @param {any[]} arr -- an array with 0 or more falsey values */
module.exports = function compact(arr) {
  if (!Array.isArray(arr)) throw Error("compact accepts only arrays");
  const ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) ret.push(arr[i]);
  }

  return ret;
};
